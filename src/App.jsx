import { GoogleGenerativeAI } from '@google/generative-ai';
import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls';
import styles from './App.module.css'
import { useState } from 'react'
function App() {
  const [messages, setMessages] = useState([]);

  // function to save message in chatbox screen on browser
  function handleContentSend(content) {
    setMessages((prevMessages) => [...prevMessages, {content, role:'user'}])
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        {/* sending props */}
        <Chat messages={messages}/>
      </div>
      {/* on send is a prop */}
      <Controls onSend={handleContentSend}/>
    </div>
  )
}


export default App
