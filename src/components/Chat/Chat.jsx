import { useRef, useEffect } from 'react'
import Markdown from 'react-markdown'
import styles from './Chat.module.css'

const WELCOME_MESSAGE = {
    role: 'assistant',
    content: 'Welcome to the AI Chatbot!',
} 
export function Chat({ messages }) {
    //ref for auto scrolling to end of response of ai.
    const messagesEndRef = useRef(null)

    // use effect for auto scrolling to get messages update
    // ? is used because element not defined so it doesn't break the app. behavior smooth for smooth scroll
    useEffect(()=> {
        messagesEndRef.current?.scrollIntoView({ behavior:'smooth' })
    })

    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
                <div key={index} className={styles.Message} data-role={role}>
                    <Markdown>{content}</Markdown>
                </div>
            ))}
            {/* this div for auto scrolling */}
            <div ref={messagesEndRef}/>
        </div>
    )
}