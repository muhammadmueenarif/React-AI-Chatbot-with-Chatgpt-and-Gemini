import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls';
import styles from './App.module.css'
import { useState } from 'react'
function App() {
  const [messages, setMessages] = useState();
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
      <Controls/>
    </div>
  )
}


export default App
