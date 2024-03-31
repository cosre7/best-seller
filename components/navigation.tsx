'use client'

import Link from "next/link"
import styles from "../styles/navigation.module.css"

export default function Navigation() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
            </nav>
        </header>
    )
}