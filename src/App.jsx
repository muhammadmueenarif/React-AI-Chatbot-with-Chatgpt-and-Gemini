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

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
    setIsLoading(true)
  }

  // function to save message in chatbox screen on browser
  async function handleContentSend(content) {
    addMessage({ content, role: "user" })
    try {
      const result = await assistant.chat(content, messages);
      addMessage({ content:result, role: "assistant" })
    } catch (error) {
      addMessage({ content:"Sorry! We couldn't process your request. Please try again", role: "system" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.App}>
      {/* bydefault will not display */}
      {isLoading && <Loader/> }

      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        {/* sending props */}
        <Chat messages={messages} />
      </div>
      {/* on send is a prop */}
      <Controls onSend={handleContentSend} />
    </div>
  )
}


export default App
