import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import UniversityRanking from "../components/UniversityRanking";
import styles from "../components/Home.module.css";

export default function Ranking() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <UniversityRanking />
            </div>
        </div>
    );
}
