import styles from "./VisaTable.module.css";

const visaData = [
    { country: "USA", link: "https://ceac.state.gov/CEAC/" },
    { country: "UK", link: "https://www.gov.uk/apply-to-come-to-the-uk" },
    { country: "Canada", link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html" },
    { country: "Australia", link: "https://immi.homeaffairs.gov.au/visas/apply-to-travel" },
    { country: "Germany", link: "https://www.germany.info/us-en/service/05-VisaEinreise/-/917226" },
    { country: "France", link: "https://france-visas.gouv.fr/" },
    { country: "Japan", link: "https://www.mofa.go.jp/j_info/visit/visa/index.html" },
    { country: "South Korea", link: "https://www.visa.go.kr/" },
    { country: "China", link: "https://www.visaforchina.org/" },
    { country: "Spain", link: "https://www.spainvisa.eu/" },
    { country: "Italy", link: "https://vistoperitalia.esteri.it/home/en" },
    { country: "Netherlands", link: "https://www.netherlandsandyou.nl/travel-and-residence/visas-for-the-netherlands" },
    { country: "Sweden", link: "https://www.migrationsverket.se/English/Private-individuals/Visiting-Sweden.html" },
    { country: "Denmark", link: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Short-stay-visa" },
    { country: "Switzerland", link: "https://www.swiss-visa.ch/ivis2/" },
    { country: "Singapore", link: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements" },
    { country: "Taiwan", link: "https://visawebapp.boca.gov.tw/BOCA_EVISA/" },
    { country: "Ireland", link: "https://www.irishimmigration.ie/" },
    { country: "Malaysia", link: "https://malaysiavisa.imi.gov.my/evisa/evisa.jsp" },
    { country: "Finland", link: "https://um.fi/visa-to-visit-finland" },
    { country: "Turkey", link: "https://dtvgroup.com.tr/" },
    { country: "Norway", link: "https://www.udi.no/en/" },
    { country: "Brazil", link: "https://formulario-mre.serpro.gov.br/sci/pages/web/ui/#/cidadao-nacionalidade" },
    { country: "South Africa", link: "https://www.dha.gov.za/index.php/applying-for-sa-visa" },
    { country: "Greece", link: "https://www.mfa.gr/en/visas/" },
    { country: "Hong Kong", link: "https://www.immd.gov.hk/eng/services/visas/" },
    { country: "New Zealand", link: "https://www.immigration.govt.nz/" },
    { country: "Thailand", link: "https://thaievisa.go.th/" },
    { country: "Portugal", link: "https://vistos.mne.gov.pt/en/" },
    { country: "Croatia", link: "https://mvep.gov.hr/services-for-citizens/consular-information-22802/visas-22807/22807" },
    { country: "Austria", link: "https://www.bmeia.gv.at/en/travel-stay/entry-and-residence-in-austria/" },
];

const VisaTable = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Visa Application Links</h2>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Country</th>
                    <th>Visa Application Link</th>
                </tr>
                </thead>
                <tbody>
                {visaData.map((visa, index) => (
                    <tr key={index}>
                        <td><strong>{index + 1}. {visa.country}</strong></td>
                        <td>
                            <a href={visa.link} target="_blank" rel="noopener noreferrer" className={styles.applyLink}>
                                Apply Now
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={styles.footer}>
                <p>Additional links available upon request. Contact support for further information.</p>
            </div>
        </div>
    );
};

export default VisaTable;
