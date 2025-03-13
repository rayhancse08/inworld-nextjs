import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./Footer.module.css";

// Lazy-load icons to reduce the initial page load
const FaFacebookF = dynamic(() => import("react-icons/fa").then((mod) => mod.FaFacebookF), { ssr: false });
const FaTwitter = dynamic(() => import("react-icons/fa").then((mod) => mod.FaTwitter), { ssr: false });
const FaInstagram = dynamic(() => import("react-icons/fa").then((mod) => mod.FaInstagram), { ssr: false });

export default function Footer({ year }) {
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
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-conditions">T&C</Link>
                    <Link href="/disclaimer-terms">Disclaimer</Link>
                </div>

                {/* Footer Bottom */}
                <div className={styles.footerBottom}>
                    <p>
                        © <span className={styles.year}>{year}</span>{" "}
                        <a href="https://inworldstudentcampus.com/" target="_blank" rel="noopener noreferrer">
                            In World Student Campus
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

// Pre-render the current year for faster loading
export async function getStaticProps() {
    return {
        props: { year: new Date().getFullYear() },
    };
}
