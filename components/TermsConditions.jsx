import styles from "./TermsConditions.module.css";

export default function TermsConditions() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Terms and Conditions</h2>
            <p>
                Welcome to <a href="https://inworldstudentcampus.com/" target="_blank" rel="noopener noreferrer">In World Student Campus</a>.
                By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
                Please read these terms carefully before using the site.
            </p>

            <ul className={styles.listGroup}>
                <li className={styles.listItem}>
                    <strong>1. Acceptance of Terms</strong><br />
                    By accessing our website, you accept these terms and conditions in full. If you disagree with any part, please do not use our website.
                </li>

                <li className={styles.listItem}>
                    <strong>2. Intellectual Property Rights</strong><br />
                    Unless otherwise stated, In World Student Campus owns the intellectual property rights for all content on the website.
                    You may view, download, and print pages for personal use, subject to restrictions set in these terms.
                </li>

                <li className={styles.listItem}>
                    <strong>3. User Conduct</strong><br />
                    You agree not to use the website in any way that causes damage or impairs the availability or accessibility of the site.
                    You must not use our website for any fraudulent, unlawful, or harmful purpose.
                </li>

                <li className={styles.listItem}>
                    <strong>4. Registration and Accounts</strong><br />
                    To access certain features, you may need to register for an account. You must ensure that the information provided upon registration is accurate and complete.
                </li>

                <li className={styles.listItem}>
                    <strong>5. Privacy Policy</strong><br />
                    Our privacy policy explains how we collect, use, and protect your personal information.
                    By using the site, you consent to the collection and use of information as described in our <a href="/privacy-policy">Privacy Policy</a>.
                </li>

                <li className={styles.listItem}>
                    <strong>6. Limitation of Liability</strong><br />
                    In World Student Campus will not be liable for any indirect, special, or consequential loss or damage arising out of or in connection with your use of the website.
                </li>

                <li className={styles.listItem}>
                    <strong>7. Third-Party Links</strong><br />
                    Our website may contain links to third-party websites that are not owned or controlled by us.
                    We have no control over and assume no responsibility for the content or practices of any third-party sites.
                </li>

                <li className={styles.listItem}>
                    <strong>8. Amendments</strong><br />
                    We may revise these terms from time to time. Revised terms will apply from the date of publication on this website.
                </li>

                <li className={styles.listItem}>
                    <strong>9. Governing Law</strong><br />
                    These terms and conditions are governed by the laws of the United States/Texas.
                    Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of United States/Texas.
                </li>

                <li className={styles.listItem}>
                    <strong>10. Contact Information</strong><br />
                    For any questions about these terms, please contact us at <a href="mailto:inworldstudentcampus@gmail.com">inworldstudentcampus@gmail.com</a>.
                </li>
            </ul>
        </div>
    );
}
