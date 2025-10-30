class LibraryItem {
    title;
    itemId;
    publicationYear;

    constructor(title, itemId, publicationYear) {
        this.title = title;
        this.itemId = itemId;
        this.publicationYear = publicationYear;
    }

    getInfo() {
        return `Title: ${this.title}, ID: ${this.itemId}, Year: ${this.publicationYear}`;
    }
}

class Book extends LibraryItem {
    author;
    isbn;

    constructor(title, itemId, publicationYear, author, isbn) {
        super(title, itemId, publicationYear);
        this.author = author;
        this.isbn = isbn;
    }

    getInfo() {
        return `Title: ${this.title}, ID: ${this.itemId}, Year: ${this.publicationYear}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

class Magazine extends LibraryItem {
    issueNumber;
    editor;

    constructor(title, itemId, publicationYear, issueNumber, editor) {
        super(title, itemId, publicationYear);
        this.issueNumber = issueNumber;
        this.editor = editor;
    }

    getInfo() {
        return `Title: ${this.title}, ID: ${this.itemId}, Year: ${this.publicationYear}, Issue: ${this.issueNumber}, Editor: ${this.editor}`;
    }
}

const genericItem = new LibraryItem("A General Guide", 500, 2023);
const novel = new Book("The JavaScript Way", 101, 2024, "Alex Banks", "978-0321765723");
const techMag = new Magazine("Web Dev Today", 205, 2024, 42, "Jane Doe");

console.log(genericItem.getInfo());
console.log(novel.getInfo());
console.log(techMag.getInfo());