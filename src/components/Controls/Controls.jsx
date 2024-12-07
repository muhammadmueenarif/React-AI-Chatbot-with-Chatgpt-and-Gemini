import styles from './Controls.module.css'
export function Controls() {
    return (
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea className={styles.TextArea} placeholder="Message AI Chatbot" />
            </div>
            <button className={styles.Button}>
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
