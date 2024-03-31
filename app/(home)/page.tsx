import Link from "next/link";
import { API_URL } from "../constants"
import styles from "../../styles/home.module.css"

export const metadata = {
    title: 'Home'
}

async function getSellers() {
    const response = await fetch(`${API_URL}/lists`)
    const json = await response.json();
    return json
}

export default async function HomePage() {
    const sellers = await getSellers()
    return (
        <div className={styles.container}>
            {sellers.results.map(seller => 
                (<Link key={seller.list_name_encoded} href={`/list/${seller.list_name_encoded}`}>{seller.display_name} &rarr;</Link>)
            )}
        </div>
    )
}