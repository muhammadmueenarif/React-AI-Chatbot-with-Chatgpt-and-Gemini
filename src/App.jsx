import { Chat } from './components/Chat/Chat'
import { Assistant } from './assistant/openai';
import { Controls } from './components/Controls/Controls';
import styles from './App.module.css'
import { useState } from 'react'
import { Loader } from './components/Loader/Loader';

function App() {
  const assistant = new Assistant()
  const [messages, setMessages] = useState([]);
  //for loader
  const [isLoading, setIsLoading] = useState(false);
  //for streaming
  const [isStreaming, setIsStreaming] = useState(false)

  //to update last msg content use this function. 
  function updateLastMessageContent(content) {
    //using map function, we go through all previous msgs. if true then it will first give prev 
    // msg content and then give next msg content and when reach to last msg then it returns complete response. 
    setMessages((prevMessages) => prevMessages.map((message, index) => index === prevMessages.length - 1 ? { ...message, content: `${message.content}${content}` } 
    :message ))
  }

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  // function to save message in chatbox screen on browser
  async function handleContentSend(content) {

    // this is used for user messages
    addMessage({ content, role: "user" })

    //this is for loader
    setIsLoading(true)
    try {
      //we need to pass messaes as content history
      const result = await assistant.chatStream(content, messages);
      let isFirstChunk = false;
      // use loop with await to save result in form of chunks.
      for await (const chunk of result) {
        if (!isFirstChunk) {
          isFirstChunk = true;
          //first message is empty and then we are updating message with chatbot response in chunks and removed 
          //the loader after first chunk so that user can read while ai is writing instead of wawiting until the 
          //complete response is wriiten. 
          addMessage({ content: "", role: "assistant" })
          setIsLoading(false);

          //streaming of chatbot start and off outside the loop
          setIsStreaming(true);
        }
        updateLastMessageContent(chunk)
      }
      //streaming is off.
      setIsStreaming(false)

    } catch (error) {
      addMessage({ content: "Sorry! We couldn't process your request. Please try again", role: "system" })
      setIsLoading(false)
      //if we get first chunk but need second chunk and it crashed so we off it here also. 
      setIsStreaming(false)
    }
  }

  return (
    <div className={styles.App}>
      {/* bydefault will not display */}
      {isLoading && <Loader />}

      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        {/* sending props */}
        <Chat messages={messages} />
      </div>
      {/* on send is a prop */}
      {/* isDisabled when ai is writing response */}
      {/* isStreaming passed to disable the control */}
      <Controls isDisabled={isLoading || isStreaming} onSend={handleContentSend} />
    </div>
  )
}


export default App
