import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Social Media Icons */}
                <div className={styles.socialMedia}>
                    <a href="https://www.facebook.com/inworldstudentcampus/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                        <FaFacebookF className={styles.icon} />
                    </a>
                    <a href="https://twitter.com/inworldstudent/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                        <FaTwitter className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/inworld_student_campus/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                        <FaInstagram className={styles.icon} />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className={styles.navLinks}>
                    <a href="/privacy-policy/">Privacy Policy</a>
                    <a href="/terms-conditions/">T&C</a>
                    <a href="/disclaimer-terms/">Disclaimer</a>
                </div>

                {/* Footer Bottom */}
                <div className={styles.footerBottom}>
                    <p>
                        © {new Date().getFullYear()}
                        <a href="https://inworldstudentcampus.com/" target="_blank" rel="noopener noreferrer">
                            In World Student Campus
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
