import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import styles from "../components/Home.module.css";

export default function ContactFormPage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <ContactForm/>
            </div>
        </div>
    );
}
