import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls';
import styles from './App.module.css'
import { useState } from 'react'
function App() {
  const [messages, setMessages] = useState(MESSAGES);
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

const MESSAGES =[ {
  role: "user",
  content: "Hello"
}, 
  {
    role: "assistant",
    content: "Hey what can I assist you with?"
  },
  {
    role: "user",
    content: "How are you?"
  }, 
    {
      role: "assistant",
      content: "I am a chatbot and don't have feelings. I am here to help you"
    },
    {
      role: "user",
      content: "How can you help me?"
    }, 
      {
        role: "assistant",
        content: "I can help you in all matters where you need."
      },
      {
        role: "user",
        content: "can you help in coding?"
      }, 
        {
          role: "assistant",
          content: "Yes of course. I can help you in coding and all other related fields also."
        }
]

export default App
