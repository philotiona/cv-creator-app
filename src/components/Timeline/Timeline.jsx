import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEducations } from '../../features/education/educationSlice'
import styles from "./Timeline.module.css"

export default function Timeline() {
    const dispatch = useDispatch()
    const { items, status } = useSelector(state => state.education)

    useEffect(() => {
        dispatch(fetchEducations())
    }, [dispatch])

    if (status === 'loading') {
        return (
            <div className={styles.wrapper}>
                <h1>Education</h1>
                <div className={styles.loading}>
                    <svg 
                        className={styles.icon} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                    >
                        <path d="M370.7 133.3C339.5 104 298.9 88 255.8 88c-77.5 .1-144.3 53.2-162.8 126.9-1.3 5.4-6.1 9.2-11.7 9.2H24.1c-7.5 0-13.2-6.8-11.8-14.2C33.9 94.9 134.8 8 256 8c66.4 0 126.8 26.1 171.3 68.7L463 41C478.1 25.9 504 36.6 504 57.9V192c0 13.3-10.7 24-24 24H345.9c-21.4 0-32.1-25.9-17-41l41.8-41.7zM32 296h134.1c21.4 0 32.1 25.9 17 41l-41.8 41.8c31.3 29.3 71.8 45.3 114.9 45.3 77.4-.1 144.3-53.1 162.8-126.8 1.3-5.4 6.1-9.2 11.7-9.2h57.3c7.5 0 13.2 6.8 11.8 14.2C478.1 417.1 377.2 504 256 504c-66.4 0-126.8-26.1-171.3-68.7L49 471C33.9 486.1 8 475.4 8 454.1V320c0-13.3 10.7-24 24-24z"/>
                    </svg>
                </div>
            </div>
        )
    }

    if (status === 'failed') {
        return (
            <div className={styles.wrapper}>
                <h1>Education</h1>
                <div className={styles.error}>
                    Something went wrong; please review your server connection!
                </div>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <h1>Education</h1>
            <div className={styles.container}>
                <div className={styles.timeline}>
                    {items && items.map((item, index) => (
                        <div className={styles.event} key={index}>
                            <div className={styles.dot}>
                                {item.date}
                            </div>
                            <div className={styles.content}>
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}