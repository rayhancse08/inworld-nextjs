import styles from './Header.module.css';
import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>🌍 In World Student Campus</div>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search University" />
                <FaSearch className={styles.searchIcon} />
            </div>
            <div className={styles.authButtons}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Signup</button>
            </div>
        </header>
    );
}

