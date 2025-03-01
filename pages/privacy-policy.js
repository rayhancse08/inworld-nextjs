import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import styles from "../components/Home.module.css";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <PrivacyPolicy />
                <Footer />
            </div>

        </div>
    );
}
