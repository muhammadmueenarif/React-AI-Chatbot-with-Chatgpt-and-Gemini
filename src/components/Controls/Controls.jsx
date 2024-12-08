import { useRef, useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Controls.module.css'
// onsend is a prop
//when loading, the input will be disabled by isDisabled props.by default it is false
export function Controls({ isDisabled=false, onSend }) {
  // useref for when chatbot response is complete, input will be focused automatically. 
  const textAreaRef = useRef(null); 
  const [content, setContent] = useState("");

  // use effect also for auto focus on input. 
  useEffect(() => {
    if(!isDisabled) {
      textAreaRef.current.focus();
    }
  }, [isDisabled]);

  // handle content changes and set it to state.
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
              {/* ref for auto focus when ai response completed */}
                <TextareaAutosize className={styles.TextArea} ref={textAreaRef} placeholder="Message AI Chatbot" 
                value={content} onChange={handleContentChanges}
                onKeyDown={handleEnterPress}
                minRows={1} maxRows={4} disabled={isDisabled}/>
            </div>
            <button className={styles.Button} disabled={isDisabled} onClick={handleContentSend}>
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
