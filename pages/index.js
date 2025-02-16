import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import UniversityList from "../components/UniversityList";
import styles from "../components/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <UniversityList />
            </div>
        </div>
    );
}
