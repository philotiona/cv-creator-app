import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { addSkill, fetchSkills } from '../../features/skills/skillsSlice'
import styles from "./Skills.module.scss"

const validationSchema = Yup.object({
    skillName: Yup.string()
        .required("Skill name is a required field"),
    skillRange: Yup.number()
        .typeError("Skill range must be a 'number' type")
        .min(10, "Skill range must be greater than or equal to 10")
        .max(100, "Skill range must be less than or equal to 100")
        .required("Skill range is a required field")
});

export default function Skills() {
    const dispatch = useDispatch()
    const skills = useSelector(state => state.skills.items)
    const [openEditor, setOpenEditor] = useState(false);
    
    useEffect(() => {
        dispatch(fetchSkills())
    }, [dispatch])

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await dispatch(addSkill(values))
            resetForm()
            setOpenEditor(false)
        } catch (error) {
            console.error("Add skill error:", error);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1>Skills</h1>
                <button className={styles.btn} onClick={() => setOpenEditor(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                        width ="15px"
                        height= "15px"
                        fill="#f7f7f7"
                        >
                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                        
                        Open Edit
                </button>
            </div>

            {openEditor && (
                <Formik
                    initialValues={{
                        skillName: "",
                        skillRange: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isValid, dirty }) => (
                        <Form className={styles.form}>
                            <div className={styles.inputWrap}>
                                <div className={styles.skillNameSuperWrap}>
                                    <div className={styles.skillNameWrap}>
                                        <label htmlFor="skillName">Skill name: </label>
                                        <Field
                                            type="text"
                                            name="skillName"
                                            id="skillName"
                                            placeholder="Enter skill name"
                                            className={`${styles.skillNameClass} ${touched.skillName && errors.skillName ? styles.inputError : ''}`}
                                        />
                                    </div>
                                    {touched.skillName && errors.skillName && (
                                        <div className={styles.error}>{errors.skillName}</div>
                                    )}
                                </div>

                                <div className={styles.skillRangeSuperWrap}>
                                    <div className={styles.skillRangeWrap}>
                                        <label htmlFor="skillRange">Skill Range: </label>
                                        <Field
                                            type="text" 
                                            name="skillRange"
                                            id="skillRange"
                                            placeholder="Enter skill range"
                                            className={`${styles.skillRangeClass} ${touched.skillRange && errors.skillRange ? styles.inputError : ''}`}
                                        />
                                    </div>
                                    {touched.skillRange && errors.skillRange && (
                                        <div className={styles.error}>{errors.skillRange}</div>
                                    )}
                                </div>
                            </div>
                            <button 
                                className={styles.addSkill} 
                                type="submit"
                                disabled={!isValid || !dirty}
                            >
                                Add skill
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <div 
                            className={styles.skillBar}
                            style={{ width: `${skill.skillRange}%` }}
                        >
                            <span>{skill.skillName}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.scale}>
                <div className={styles.line}></div>
                <div className={styles.levels}>
                    <p className={styles.p_before}>Beginner</p>
                    <p className={styles.p}>Proficient</p>
                    <p className={styles.p}>Expert</p>
                    <p className={styles.p_after}>Master</p>
                </div>
            </div>
        </div>
    )
}