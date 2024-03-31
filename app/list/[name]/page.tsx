import { API_URL } from "../../constants"

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
        <div>
            {bookList.results.books.map(book => 
                (<div key={book.primary_isbn10}>
                    <img src={book.book_image} />
                    <h2>{book.title}</h2>
                    <h2>{book.author}</h2>
                    <a href={book.buy_links[0].url} target={"_blank"}>Buy Now</a>
                </div>)
            )}
        </div>
    )
}