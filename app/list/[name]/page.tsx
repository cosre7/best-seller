import { API_URL } from "../../constants"

export async function getBooks(name:string) {
    const response = await fetch(`${API_URL}/list?name=${name}`)
    return response.json()
}

export default async function listPage({params: {name}} : {params: {name: string}}) {
    const bookList = await getBooks(name)
    console.log(bookList)
    return (
        <div>
            {bookList.results.books.map(book => 
                (<div>
                    <img src={book.book_image} />
                    <h2>{book.title}</h2>
                    <h2>{book.author}</h2>
                    <a href={book.buy_links[0].url}>Buy Now</a>
                </div>)
            )}
        </div>
    )
}