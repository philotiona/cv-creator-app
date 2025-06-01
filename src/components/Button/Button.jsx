import styles from "./Button.module.css"
export default function Button({text, icon, classChanger, onClick}) {
    return(
        <div className={styles.wrap}>
            <button className={styles[classChanger]} onClick={onClick}><span className={styles.span}>{icon}</span> <span className={styles.spanText}>{text}</span></button>
        </div>
    )
}