import styles from "./DisclaimerTerms.module.css";

export default function DisclaimerTerms() {
    return (
        <div className={styles.container}>
            {/* Disclaimer Section */}
            <div className={styles.contentContainer}>
                <h2 className={styles.heading}>Disclaimer</h2>
                <div className={styles.content}>
                    <p>
                        The information on the <strong>In World Student Campus</strong> website is for general informational purposes only. While we strive for accuracy, we make no warranties about the completeness, reliability, or suitability of the content. Any reliance on this information is at your own risk.
                        We are not liable for any loss or damage, including indirect or consequential loss, arising from the use of this website.
                        Additionally, we have no control over the content or availability of external sites linked through our website.
                    </p>
                </div>
            </div>

            {/* Terms and Conditions Section */}
            <div className={styles.contentContainer}>
                <h2 className={styles.heading}>Terms and Conditions</h2>
                <div className={styles.content}>
                    <p>By accessing the <strong>In World Student Campus</strong> website, you agree to the following terms:</p>
                    <ul className={styles.list}>
                        <li>The content is for general information and may change without notice.</li>
                        <li>We do not guarantee the accuracy or suitability of the information and exclude liability for any inaccuracies to the fullest extent permitted by law.</li>
                        <li>Your use of the information is at your own risk, and you are responsible for ensuring it meets your needs.</li>
                        <li>The website’s material, including design and graphics, is owned by us, and reproduction is prohibited.</li>
                        <li>Unauthorized use may result in damages and/or criminal charges.</li>
                        <li>Links to other websites are for convenience and do not signify endorsement. We are not responsible for their content.</li>
                        <li>Use of this website and any disputes are governed by the laws of our jurisdiction.</li>
                    </ul>
                    <p>If you disagree with any part of these terms, please do not use the website.</p>
                </div>
            </div>
        </div>
    );
}
