import styles from './Header.module.css';
import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <header className={styles.header}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description"
                  content="Author: In World Student Campus, In World Student Campus for information world all university"/>

            <title>In World Student Campus</title>
            <div className={styles.logo}>In World Student Campus</div>

            <div className={styles.searchBar}>
                <input type="text" placeholder="Search University"/>
                <FaSearch className={styles.searchIcon}/>
            </div>
            <div className={styles.authButtons}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Signup</button>
            </div>
        </header>
    );
}

