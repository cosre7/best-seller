import "../styles/global.css"
import Navigation from "../components/navigation"
import { Metadata } from "next"
import styles from "../styles/root.module.css"

export const metadata : Metadata = {
    title: {
        template: '%s | best-seller',
        default: 'Best Seller',
    },
    description: 'The best sellers of all time',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <Navigation />
            <body className={styles.container}>{children}</body>
        </body>
      </html>
    )
  }
  