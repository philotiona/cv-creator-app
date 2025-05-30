import Navigation from "../Navigation/Navigation"
import PhotoBox from "../PhotoBox/PhotoBox"
import Button from "../Button/Button"
import styles from "./Panel.module.css"


const backIcon = (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        width="14"
        height="14"
        fill="currentColor">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
)


export default function Panel() {
    return (
        <div className={styles.panel}>
            <div className={styles.top}>
                <PhotoBox classChanger="navPhotoBox" name="Olzhas Kelgenbay" avatar="src/assets/anon_pfp.jpg"/>
                <Navigation/>
            </div>
            <Button text="Go back" classChanger="panelButton" icon={backIcon}/>
        </div>

    )
}