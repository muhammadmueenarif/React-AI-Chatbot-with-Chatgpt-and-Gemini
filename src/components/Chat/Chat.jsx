import { useRef, useEffect, useMemo } from 'react'
import Markdown from 'react-markdown'
import styles from './Chat.module.css'

const WELCOME_MESSAGE_GROUP = [
    {
        role: 'assistant',
        content: 'Welcome to the AI Chatbot!',
    }
];

export function Chat({ messages }) {
    //ref for auto scrolling to end of response of ai.
    const messagesEndRef = useRef(null)

    //now create variable and use memo hook that memorize its value and not calculate on each react but 
    // it will calculate when really need like when messages will be updated. 
    //reduce function to create groups. then [] for default value.
    const messagesGroups = useMemo(
        () => messages.reduce((groups, message) => {

            //check last message of user so we put each msg in array. 
            if (message.role === 'user') groups.push([]);
            //length-1 to push the last msg. 
            groups[groups.length - 1].push(message);
            return groups;
        }, []), [messages]
    );

    // use effect for auto scrolling to get messages update
    // ? is used because element not defined so it doesn't break the app. behavior smooth for smooth scroll
    useEffect(() => {
        //we want to scroll when message from user is added not from assistant so we want to get last msg 
        //of user and implement scroll behavior on it.
        const lastMessage = messages[messages.length - 1]
        //? used with condition if there is no msg
        if (lastMessage?.role === 'user') {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
     }, [messages])

    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE_GROUP, ...messagesGroups].map(
                (messages, groupIndex) => (

                    // for groups
                    <div key={groupIndex} className={styles.Group}>
                        {messages.map(({ role, content }, index) => (

                            //for messages 
                            <div key={index} className={styles.Message} data-role={role}>
                                <Markdown>{content}</Markdown>
                            </div>
                        ))}
                    </div>
                ))}

            {/* this div for auto scrolling */}
            <div ref={messagesEndRef} />
        </div>
    )
}