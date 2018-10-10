interface Ibook {

    title: String,
    readonly author: String,
    published?: Date,
    pages?: number

}

function newBook(book: Ibook) {

    return `Title : ${book.title} Author : ${book.author}, Published : ${book.published}, Pages : ${book.pages}`

}

var testBook = { title: 'Bai Ivan', author: 'Cekata', published: new Date('23.06.2023'), pages: 3 }

document.body.innerHTML = newBook(testBook);

class book implements Ibook {
    title: String;
    author: String;
    publiced?: Date;
    pages?: number
    constructor(title, author, publiced, pages) {
        this.title = title,
            this.author = author,
            this.publiced = publiced,
            this.pages = pages

    }


}