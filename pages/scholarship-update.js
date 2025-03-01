import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import ScholarshipUpdates from "../components/ScholarshipUpdates";
import styles from "../components/Home.module.css";

export default function ScholarshipUpdatesPage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <ScholarshipUpdates/>
            </div>
        </div>
    );
}
