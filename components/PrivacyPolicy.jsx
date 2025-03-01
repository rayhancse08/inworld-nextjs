import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Privacy Policy</h2>

            <div className={styles.policyContent}>
                <p>
                    In World Student Campus is committed to protecting your privacy. The information you provide on this website will be used according to this policy. We may update this policy periodically, so please check this page regularly. This policy is effective from the date stated on the website.
                </p>

                <div className={styles.policySection}>
                    <h3><strong>Information We Collect</strong></h3>
                    <ul>
                        <li>Name and job title</li>
                        <li>Contact information including email address</li>
                        <li>Demographic information such as postcode, preferences, and interests</li>
                        <li>Other information relevant to customer surveys and/or offers</li>
                    </ul>
                </div>

                <div className={styles.policySection}>
                    <h3><strong>What We Do with the Information</strong></h3>
                    <ul>
                        <li>Understand your needs and improve our services</li>
                        <li>Improve our products and services</li>
                        <li>Send promotional emails about new products, special offers, or other information of interest</li>
                    </ul>
                </div>

                <div className={styles.policySection}>
                    <h3><strong>Security</strong></h3>
                    <p>
                        We are committed to securing your information with appropriate physical, electronic, and managerial procedures.
                    </p>
                </div>

                <div className={styles.policySection}>
                    <h3><strong>Links to Other Websites</strong></h3>
                    <p>
                        Our site may contain links to other websites. We are not responsible for the privacy practices of those sites.
                    </p>
                </div>

                <div className={styles.policySection}>
                    <h3><strong>Acceptance of this Policy</strong></h3>
                    <p>
                        By using our website, you accept this Privacy Policy. If you disagree, please do not use our website.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
