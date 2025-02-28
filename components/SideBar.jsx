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
                <li className={styles.menuItem} onClick={() => window.location.href = '/faq'}>❓ <strong>Q & A</strong></li>
                <li className={styles.menuItem} onClick={() => window.location.href = '/guide'}>📖 <strong>Comprehensive Guide</strong></li>

                {/* Dropdown for "How to Write" */}
                <li className={styles.dropdown} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    📝 <strong>How to Write</strong> ▼
                </li>
                {isDropdownOpen && (
                    <ul className={styles.submenu}>
                        <li
                            className={styles.submenuItem}
                            onClick={() => window.open('/pdfs/Personal_statement_Demo.pdf', '_blank')}
                        >
                            📄 Personal Statement
                        </li>
                        <li className={styles.submenuItem} onClick={() => window.open('/pdfs/Purpose_of_study.pdf', '_blank')}>💡 Purpose of Study</li>
                        <li className={styles.submenuItem} onClick={() => window.open('/pdfs/Resume.pdf', '_blank')}>👤 Resume</li>
                        <li className={styles.submenuItem} onClick={() => window.open('/pdfs/HOW_TO_WRITE_RESEARCH_PLAN.pdf', '_blank')}>📋 How to Write Research Plan</li>
                        <li className={styles.submenuItem} onClick={() => window.open('/pdfs/RecommendationLetter.pdf', '_blank')}>✉️ Reference Letter</li>
                    </ul>
                )}

                <li className={styles.menuItem} onClick={() => window.location.href = '/visaApplication'}>🌎 <strong>Countries Visa Application Link</strong></li>
                <li className={styles.menuItem} onClick={() => window.location.href = '/scholarshipUpdate'}>⚠️ <strong>Scholarship Update</strong></li>
                <li className={styles.menuItem} onClick={() => window.location.href = '/about'}>ℹ️ <strong>About Us</strong></li>
                <li className={styles.menuItem} onClick={() => window.location.href = '/contact'}>📩 <strong>Contact Us</strong></li>
            </ul>
        </aside>
    );
}
