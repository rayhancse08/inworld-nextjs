import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import TermsConditions from "../components/TermsConditions";
import styles from "../components/Home.module.css";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <TermsConditions />
                <Footer />
            </div>

        </div>
    );
}
