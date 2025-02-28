import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import AboutWebsite from "../components/AboutWebsite";
import styles from "../components/Home.module.css";

export default function AboutWebsitePage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <AboutWebsite/>
            </div>
        </div>
    );
}
