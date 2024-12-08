import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Controls.module.css'
// onsend is a prop
export function Controls({ onSend }) {
 
  const [content, setContent] = useState("");

  function handleContentChanges(event) {
    setContent(event.target.value);
  }

//   function to send content
  function handleContentSend() {
    if (content.length >0 ) {
        onSend(content)
        setContent("")  // clear the input field after sending the message
    }
  }

  //function to send user msg if he press enter btn. 
  function handleEnterPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleContentSend();
    }
  }
    return (
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <TextareaAutosize className={styles.TextArea} placeholder="Message AI Chatbot" 
                value={content} onChange={handleContentChanges}
                onKeyDown={handleEnterPress}
                minRows={1} maxRows={4}/>
            </div>
            <button className={styles.Button} onClick={handleContentSend}>
                <SendIcon/>
            </button>
        </div>
    )
}

function SendIcon() {
    return (
        <svg width="24px" height="24px" viewBox="0 -960 960 960" fill="#5f6368" xmlns="http://www.w3.org/2000/svg">
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
        </svg>
    )
}
