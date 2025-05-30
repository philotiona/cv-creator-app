import styles from "./Expertise.module.css"

export default function Expertise({data}) {
    return(
        <div className={styles.wrapper}>
            <h1 id="experienceLink">Experience</h1>
            {data.map((item, index) =>(
                <div className={styles.expertiseItem} key={index}> 
                    <div className={styles.companyDate}>
                        <h3>{item.info.company}</h3>
                        <p className={styles.date}>{item.date}</p>
                    </div>
                    <div className={styles.jobDescription}>
                        <h3>{item.info.job}</h3>
                        <p className={styles.description}>{item.info.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}