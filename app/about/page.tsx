import styles from "../../styles/about.module.css"

export const metadata = {
    title: 'About'
}

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <h2>About us</h2>
            <p>Welcome to the official explorer for The New York Times Best Seller list explorer:</p>
            <p>We hope you enjoy your stay!</p>
        </div>
    )
}