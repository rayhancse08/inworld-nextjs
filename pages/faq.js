import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Faq from "../components/Faq";
import styles from "../components/Home.module.css";

export default function FaqPage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <Faq/>
            </div>
        </div>
    );
}
