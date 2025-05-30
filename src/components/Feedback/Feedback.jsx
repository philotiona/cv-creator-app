import Info from "../Info/Info"
import styles from "./Feedback.module.css"

export default function Feedback({data}) {
    <div className={styles.wrapper}>
        <h1 id="feedbackLink">Feedbacks</h1>
        <Info text = {data.feedback}/>
        <div className={styles.user}>
            <img  className={styles.image} src={data.reporter?.photUrl} alt="" />
            <p>{data.reproter?.name},<span className={styles.span}>{data.reporter?.citeUrl}</span></p>
        </div>
    </div>
}