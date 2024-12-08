import Markdown from 'react-markdown'
import styles from './Chat.module.css'
export function Chat({ messages }) {
    
    const WELCOME_MESSAGE = {
        role: 'assistant',
        content: 'Welcome to the AI Chatbot!',
    } 
    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
                <div key={index} className={styles.Message} data-role={role}>
                    <Markdown>{content}</Markdown>
                </div>
            ))}
        </div>
    )
}