import { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState("*");
    
    useEffect(() => {
        setIsotope(
            new Isotope(".portfolio-items", {
                itemSelector: ".portfolio-item",
                layoutMode: "fitRows"
            })
        );
    }, []);

    useEffect(() => {
        if (isotope) {
            filterKey === "*"
                ? isotope.arrange({ filter: "*" })
                : isotope.arrange({ filter: `.${filterKey}` });
        }
    }, [isotope, filterKey]);

    const handleFilterKeyChange = key => setFilterKey(key);

    return(
        <div className={styles.wrapper}>
            <h1 id="portfolioLink">Portfolio</h1>
            <div className={styles.buttons}>
                <button 
                    className={`${styles.filter_button} ${filterKey === '*' ? styles.active : ''}`}
                    onClick={() => handleFilterKeyChange("*")}
                >
                    All
                </button>
                <span>/</span>
                <button 
                    className={`${styles.filter_button} ${filterKey === 'code' ? styles.active : ''}`}
                    onClick={() => handleFilterKeyChange("code")}
                >
                    Code
                </button>
                <span>/</span>
                <button 
                    className={`${styles.filter_button} ${filterKey === 'ui' ? styles.active : ''}`}
                    onClick={() => handleFilterKeyChange("ui")}
                >
                    UI
                </button>
            </div>
            <div className="portfolio-items">
                <div className={`portfolio-item ui ${styles.image}`}>
                    <img src="src/assets/stairs.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>UI Item</h5>
                        <p className={styles.text}>Lorem ipsum...</p>
                        <a href="#" className={styles.viewTag}>View resource</a>
                    </div>
                </div>
                <div className={`portfolio-item code ${styles.image}`}>
                    <img src="src/assets/magnifier.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>Code Item</h5>
                        <p className={styles.text}>Lorem ipsum...</p>
                        <a href="#" className={styles.viewTag}>View resource</a>
                    </div>
                </div>
                <div className={`portfolio-item ui ${styles.image}`}>
                    <img src="src/assets/stairs.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>UI Item</h5>
                        <p className={styles.text}>Lorem ipsum...</p>
                        <a href="#" className={styles.viewTag}>View resource</a>
                    </div>
                </div>
                <div className={`portfolio-item code ${styles.image}`}>
                    <img src="src/assets/magnifier.png" alt="" />
                    <div className={styles.imageOverlay}>
                        <h5>Code Item</h5>
                        <p className={styles.text}>Lorem ipsum...</p>
                        <a href="#" className={styles.viewTag}>View resource</a>
                    </div>
                </div>
            </div>
        </div>
    );
}