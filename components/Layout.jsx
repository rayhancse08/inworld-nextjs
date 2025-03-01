import Sidebar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className={styles.mainContent}>
                <Header />
                <div className={styles.contentWrapper}>
                    {children} {/* Dynamic Page Content */}
                </div>
                <Footer />
            </div>
        </div>
    );
}
