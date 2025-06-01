import styles from "./Timeline.module.css"

export default function Timeline({data}) {
    return(
        <div className={styles.wrapper}>
            <h1>Education</h1>
            <div className={styles.container}>
                {data.map((item, index) => (
                    <div className={styles.timeline}>
                        <div className={styles.event} key={index}>
                            <div className={styles.dot}>
                                {item.date}
                            </div>
                            <div className={styles.content}>
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}