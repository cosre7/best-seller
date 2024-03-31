import { API_URL } from "../../constants"
import styles from "../../../styles/books.module.css"

interface IParmas {
    params: {
        name: string
    }
}
async function getBooks(name:string) {
    const response = await fetch(`${API_URL}/list?name=${name}`)
    return response.json()
}

export async function generateMetadata({params: {name}} : IParmas) {
    return {
        title: name
    }
}

export default async function listPage({params: {name}} : IParmas) {
    const bookList = await getBooks(name)
    return (
        <div className={styles.container}>
            {bookList.results.books.map(book => 
                (<div key={book.primary_isbn10} className={styles.book}>
                    <img src={book.book_image} />
                    <div>
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        <a href={book.buy_links[0].url} target={"_blank"}>Buy Now &rarr;</a>
                    </div>
                </div>)
            )}
        </div>
    )
}