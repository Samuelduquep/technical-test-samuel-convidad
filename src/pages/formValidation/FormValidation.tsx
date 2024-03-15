import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMailOutline, IoCashOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";

import styles from "./FormValidation.module.scss";
import useGlobal from "../../hooks/useGlobal";
import useFormValidation from "../../hooks/useValidationForm";

const FormValidation = () => {
    const { setTitlePage, success, setSuccess, setActivePage } = useGlobal();
    const navigate = useNavigate()
    const { formData, handleChange, validateForm, errors } = useFormValidation();

    useEffect(() => {
        setTitlePage("Form Validation");
        setActivePage("form")
    }, [setTitlePage, setActivePage]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            setSuccess(true)
        } else {
            setSuccess(false)
        }
    };

    const handleReturn = () => {
        navigate("/weather")
        setSuccess(false)
    }

    return (
        success ? (
            <div className={styles.container_form}>
                <h1 className={styles.info_text}>Your information has been successfully sent.</h1>
                <p className={styles.info_text_ph}>We will get back to your shortly</p>
                <button type="button" className={styles.btn_return} aria-label="Validate" title="Validate the form" role="button" onClick={handleReturn}>
                    <span className={styles.btn_icon}>
                        <IoReturnDownBack />
                    </span>
                    Return to Weather
                </button>
            </div>
        ) : (
            <form className={styles.container_form} onSubmit={handleSubmit} noValidate>
                <div className={styles.form_group}>
                    <input
                        type="email"
                        id="emails"
                        className={`${styles.form_style} ${errors.emails && styles.form_style__error}`}
                        placeholder="Insert multiple emails separated by commas"
                        autoComplete="off"
                        aria-label="Emails"
                        aria-required="true"
                        value={formData.emails}
                        onChange={handleChange}
                    />
                    <span className={styles.input_icon}><IoMailOutline /></span>
                    {errors.emails && <p className={styles.error_message}>{errors.emails}</p>}
                </div>
                <div className={styles.form_group}>
                    <input
                        type="text"
                        id="amount"
                        className={`${styles.form_style} ${errors.amount && styles.form_style__error}`}
                        placeholder="Insert an amount with € symbol and decimals"
                        autoComplete="off"
                        aria-label="Amount"
                        aria-required="true"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                    <span className={styles.input_icon}><IoCashOutline /></span>
                    {errors.amount && <p className={styles.error_message}>{errors.amount}</p>}
                </div>
                <div className={styles.form_group}>
                    <input
                        type="url"
                        id="url"
                        className={`${styles.form_style} ${errors.url && styles.form_style__error}`}
                        placeholder="Insert a URL"
                        autoComplete="off"
                        aria-label="URL"
                        aria-required="true"
                        value={formData.url}
                        onChange={handleChange}
                    />
                    <span className={styles.input_icon}><TbWorld /></span>
                    {errors.url && <p className={styles.error_message}>{errors.url}</p>}
                </div>
                <div className={styles.form_group}>
                    <button type="submit" className={styles.btn} aria-label="Validate" title="Validate the form" role="button">
                        <span className={styles.btn_icon}>
                            <FaCheck />
                        </span>
                        Validate
                    </button>
                </div>
            </form>
        )
    );

};

export default FormValidation;
