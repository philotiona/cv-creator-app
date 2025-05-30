import Button from "../../components/Button/Button";
import PhotoBox from "../../components/PhotoBox/PhotoBox";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/main")
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentBox}>
                <PhotoBox
                    name="Olzhas Kelgenbay"
                    title="Programmer.Creative.Innovator"
                    description="Hello, I like clouds, rain and mangoes"
                    avatar="src/assets/avatar.png"
                    classChanger="mainPage"
                />
                <Button text="Know More" classChanger="knowMoreButton" onClick={handleClick}/>
            </div>
        </div>
    );
}