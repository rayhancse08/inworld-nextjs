import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import VisaTable from "../components/VisaTable";
import styles from "../components/Home.module.css";

export default function GuidePage() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <VisaTable/>
            </div>
        </div>
    );
}
