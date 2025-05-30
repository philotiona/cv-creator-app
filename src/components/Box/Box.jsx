import styles from "./Box.module.css"
export default function Box({title, content}) {
    return(
        <div>
            <article className={styles.article}>
                <h1 className={styles.title} id="aboutmeLink">{title}</h1>
                <p className={styles.content}>{content}</p>
            </article>
        </div>
    )
}