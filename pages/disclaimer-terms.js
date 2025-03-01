import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import DisclaimerTerms from "../components/DisclaimerTerms";
import styles from "../components/Home.module.css";
import Footer from "../components/Footer";

export default function DisclaimerTermsPage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <DisclaimerTerms />
                <Footer />
            </div>

        </div>
    );
}
