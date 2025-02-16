import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import TopCountries from "../components/TopCountries";
import styles from "../components/Home.module.css";

export default function Ranking() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <TopCountries />
            </div>
        </div>
    );
}
