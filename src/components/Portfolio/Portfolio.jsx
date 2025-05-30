import styles from "./Portfolio.module.css"

export default function Portfolio() {
    return(
        <div className={styles.wrapper}>
            <h1 id="portfolioLink">Portfolio</h1>
            <div className={styles.buttons}>
                <button className={styles.filter_button}>All</button>
                <span>/</span>
                <button className={styles.filter_button}>Code</button>
                <span>/</span>
                <button className={styles.filter_button}>UI</button>
            </div>
            <div className={styles.items}>
                <div className={styles.image}>
                    <img src="src/assets/stairs.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>Item</h5>
                        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ex error pariatur? Doloribus quis dolorum cum, architecto repellat deserunt enim minus assumenda qui aut amet illo culpa voluptate tenetur quaerat.</p>
                        <a href="#" className={styles.viewTag}>View resource</a>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="src/assets/magnifier.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>Item</h5>
                        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ex error pariatur? Doloribus quis dolorum cum, architecto repellat deserunt enim minus assumenda qui aut amet illo culpa voluptate tenetur quaerat.</p>
                        <a href="#"className={styles.viewTag}>View resource</a>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="src/assets/stairs.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>Item</h5>
                        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ex error pariatur? Doloribus quis dolorum cum, architecto repellat deserunt enim minus assumenda qui aut amet illo culpa voluptate tenetur quaerat.</p>
                        <a href="#" className={styles.viewTag}>View resource</a>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="src/assets/magnifier.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>Item</h5>
                        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ex error pariatur? Doloribus quis dolorum cum, architecto repellat deserunt enim minus assumenda qui aut amet illo culpa voluptate tenetur quaerat.</p>
                        <a href="#" className={styles.viewTag}>View resource</a>
                    </div>
                </div>
            </div>
        </div>
    )
}