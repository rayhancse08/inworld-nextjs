import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Guide from "../components/Guide";
import styles from "../components/Home.module.css";

export default function GuidePage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <Guide/>
            </div>
        </div>
    );
}
