import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import PhotoBox from "../PhotoBox/PhotoBox";
import Button from "../Button/Button";
import styles from "./Panel.module.css";
import { useNavigate } from "react-router";

const backIcon = (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512"
    width="14"
    height="14"
    fill="currentColor">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
);

export default function Panel() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const handleClick = () => navigate("/");

    return (
        <aside className={styles.wrapper}>
            <div className={`${styles.panel} ${open ? "": styles.closed}`}>
                <div className={styles.top}>
                    <PhotoBox classChanger={open ? "navPhotoBox" : "navMiniPhotoBox"} name="Olzhas Kelgenbay" avatar="src/assets/anon_pfp.jpg"/>
                    
                    <Navigation onlyIcons={!open} />
                </div>
                <Button text="Go back" classChanger={open? "panelButton" : "miniPanelButton"} icon={backIcon} onClick={handleClick}/>
            </div>
            <div className={styles.burger}>
                <button onClick={() => setOpen(o => !o)}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                        fill="#f7f7f7"
                        width="24"
                        height="24"
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
            </div>
        </aside>
    );
}