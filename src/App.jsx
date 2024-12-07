import { Chat } from './components/Chat/Chat'
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
    </div>
  )
}

const MESSAGES =[ {
  role: 'user',
  content: 'Hello',
}, 
  {
    role: 'assistant',
    content: 'Hey what can I assist you with?',
  },
  {
    role: 'user',
    content: 'Hello',
  }, 
    {
      role: 'assistant',
      content: 'Hey what can I assist you with?',
    },
    {
      role: 'user',
      content: 'Hello',
    }, 
      {
        role: 'assistant',
        content: 'Hey what can I assist you with?',
      },
      {
        role: 'user',
        content: 'Hello',
      }, 
        {
          role: 'assistant',
          content: 'Hey what can I assist you with?',
        },
        {
          role: 'user',
          content: 'Hello',
        }, 
          {
            role: 'assistant',
            content: 'Hey what can I assist you with?',
          },
]

export default App
