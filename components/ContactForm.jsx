import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle Input Change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate form submission
        console.log("Form Submitted:", formData);

        setSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.formTitle}>Contact Us</h2>
                <hr />
                {submitted ? (
                    <p className="text-center text-success"><strong>Thank you! Your message has been sent.</strong></p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <i className={`fas fa-user ${styles.iconField}`}></i>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <i className={`fas fa-envelope ${styles.iconField}`}></i>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <i className={`fas fa-tag ${styles.iconField}`}></i>
                            <input
                                type="text"
                                id="subject"
                                className="form-control"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <i className={`fas fa-comment ${styles.iconField}`}></i>
                            <textarea
                                id="message"
                                className="form-control"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
