import { useState } from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <aside className={styles.sidebar}>
            {/* Logo Section */}
            <div className={styles.logoContainer}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
            </div>

            {/* Menu List */}
            <ul className={styles.menuList}>
                <li className={styles.menuItem} onClick={() => window.location.href = '/'}>🏠 <strong>Home</strong></li>
                <li className={styles.menuItem} onClick={() => window.location.href = '/ranking'}>🏆 <strong>World University Ranking List</strong></li>
                <li className={styles.menuItem} onClick={() => window.location.href = '/countries'}>🌍 <strong>World Top Country Universities</strong></li>
                <li className={styles.menuItem} onClick={() => window.location.href = '/question_and_answer'}>❓ <strong>Q & A</strong></li>
                <li className={styles.menuItem}>📖 <strong>Comprehensive Guide</strong></li>

                {/* Dropdown for "How to Write" */}
                <li className={styles.dropdown} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    📝 <strong>How to Write</strong> ▼
                </li>
                {isDropdownOpen && (
                    <ul className={styles.submenu}>
                        <li className={styles.submenuItem}>📄 Personal Statement</li>
                        <li className={styles.submenuItem}>💡 Purpose of Study</li>
                        <li className={styles.submenuItem}>👤 Resume</li>
                        <li className={styles.submenuItem}>📋 How to Write Research Plan</li>
                        <li className={styles.submenuItem}>✉️ Reference Letter</li>
                    </ul>
                )}

                <li className={styles.menuItem}>🌎 <strong>Countries Visa Application Link</strong></li>
                <li className={styles.menuItem}>⚠️ <strong>Scholarship Update</strong></li>
                <li className={styles.menuItem}>ℹ️ <strong>About Us</strong></li>
                <li className={styles.menuItem}>📩 <strong>Contact Us</strong></li>
            </ul>
        </aside>
    );
}
