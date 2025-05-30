import styles from "./Info.module.css"

export default function Info({text}) {
    return(
        <div className={styles.box}>
            <p className={styles.content}>{text}</p>
        </div>
    )
}