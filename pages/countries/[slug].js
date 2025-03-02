import Sidebar from "@/components/SideBar";
import Header from "@/components/Header";
import UniversityProfile from '@/components/UniversityProfile'
import styles from "@/components/Home.module.css";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import CountryUniversities from "@/components/CountryUniversities";

export default function Country() {
    const router = useRouter();
    const { slug } = router.query;
    //
    // const [country, setCountry] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     if (!slug) return; // Prevent fetching until slug is available
    //
    //     fetch(`https://inworldstudentcampus.com/api/countries/${slug}`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error("Country not found");
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setCountry(data);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //             setLoading(false);
    //         });
    // }, [slug]);
    //
    // console.log(country)
    return (

                <CountryUniversities countrySlug={slug} />

    );
}
