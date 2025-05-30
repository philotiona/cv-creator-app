import styles from "./Button.module.css"
export default function Button({text, icon, classChanger, onClick}) {
    return(
        <div className="wrap">
            <button className={styles[classChanger]} onClick={onClick}><span>{icon}</span> {text}</button>
        </div>
    )
}