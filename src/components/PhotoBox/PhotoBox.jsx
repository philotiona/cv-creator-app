import styles from "./PhotoBox.module.css"
export default function PhotoBox({name, title, description, avatar, classChanger}){
    return (
        <>
            <div className={styles[classChanger]}>
                <img className = {styles.photo} src={avatar} alt="Profile pciture" />
                <p className={styles.name}>{name}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </>
    )
}