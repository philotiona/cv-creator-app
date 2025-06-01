import Info from "../Info/Info"
import styles from "./Feedback.module.css"

export default function Feedback({data}) {
    return(
    <div className={styles.wrapper}>
        <h1 id="feedbackLink">Feedbacks</h1>
        {data.map((item, index) => (
            <div className={styles.box} key ={index}>
                <Info text = {item.feedback}/>
                <div className={styles.user}>
                    <img  className={styles.image} src={item.reporter.photoUrl.replace("./", "src/assets/")} alt="" />
                    <p className={styles.nameCite}>{item.reporter.name}, <span className={styles.span}> {item.reporter.citeUrl}</span></p>
                </div>
            </div>
        ))}
    </div>
    )
}