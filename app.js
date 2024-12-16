// class Book {
//     constructor(title, author, genre) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.available = true;
//     }
//     getDetails() {
//         return `title: ${this.title}, author: ${this.author}, genre: ${this.genre}, available: ${this.available}`;
//     }
//     markAsBorrowed() {
//         if (this.available) {
//             this.available = false;
//         } else {
//             console.log(`${this.title} is borrowed`);
//         }
//     }
//     markAsReturned() {
//         if (this.available == false) {
//             this.available = true;
//         } else {
//             console.log(`${this.title} is available`);
//         }
//     }
// }

// class Library {
//     constructor() {
//         this.books = []
//     }
//     addBook(book) {
//         for (let i of this.books) {
//             if (i.title === books.title) {
//                 console.log(`"${book.title}" already exists in the library`)
//             }
//         }
//         this.books.push(book)
//         console.log(`"${book.title}" added`)
//     }
//     removeBook(title) {
//         const index = this.books.findIndex((book) => book.title === title)
//         if (index !== -1) {
//             this.books.splice(index, 1)
//             console.log(`"${title}" removed`)
//         } else {
//             console.log(`"${title}" not found in the library`)
//         }
//     }
//     searchByGenre(genre) {
//         const genreBooks = this.books.filter(
//             (book) => book.genre.toLowerCase() === genre.toLowerCase()
//         )
//         return genreBooks.length > 0 ? genreBooks : `0 book found "${genre}"`
//     }
//     listAvailableBooks() {
//         const availableBooks = this.books.filter((book) => book.available)
//         return availableBooks.length > 0 ? availableBooks : "available books 0"
//     }
// }
// const library = new Library();
// const book1 = new Book("book", "John", "fantasy");
// const book2 = new Book("book2", "Mark", "historical");
// library.addBook(book1)
// library.addBook(book2)
// library.removeBook(book1)
// book1.markAsBorrowed()
// book1.markAsReturned()
// console.log(library.listAvailableBooks());
// console.log(book1.getDetails());



// 2 ---------------------------------------------------------------------------------------
// class Bus {
//     constructor(id, route, seats, reservedSeats = 0) {
//         this.id = id
//         this.route = route
//         this.seats = seats
//         this.reservedSeats = reservedSeats
//     }

//     getDetails() {
//         return `route:${this.route},  seats:${this.seats},  available Seats:${
//             this.seats - this.reservedSeats
//         }`
//     }

//     reserveSeats(sit) {
//         const availableSeats = this.seats - this.reservedSeats
//         if (sit <= availableSeats) {
//             this.reservedSeats += sit
//             console.log(`${sit} seat reserved`)
//         } else {
//             console.log(`not enough seats available`)
//         }
//     }

//     cancelReservation(stand) {
//         if (stand <= this.reservedSeats) {
//             this.reservedSeats -= stand
//             console.log(`${stand} reservation canceled`)
//         } else {
//             console.log(
//                 `cannot cancel ${stand}, reserved seats = ${this.reservedSeats} `
//             )
//         }
//     }
// }

// class BusSystem {
//     constructor(buses) {
//         this.buses = []
//     }

//     addBus(bus) {
//         for (let i of this.buses) {
//             if (i.id === bus.id) {
//                 console.log(`${bus.id} this bus already exists`)
//             }
//         }
//         this.buses.push(bus)
//         console.log(`bus (${bus.id}) added`)
//     }

//     listBuses() {
//         this.buses.forEach((bus) => {
//             console.log(bus.getDetails())
//         })
//     }

//     searchByRoute(route) {
//         const routeBus = this.buses.filter((b) => b.route === route)
//         console.log(routeBus.length > 0 ? routeBus : `${route} not found`)
//     }

//     reserveSeat(busId, reserveNum) {
//         const bus = this.buses.find((b) => b.id === busId)

//         bus.reserveSeats(reserveNum)
//     }

//     cancelReservation(busId, cancelNum) {
//         const bus = this.buses.find((b) => b.id === busId)

//         bus.cancelReservation(cancelNum)
//     }
// }

// const busSystem = new BusSystem()

// const bus1 = new Bus(1, "uzb-rus", 10, 0)
// const bus2 = new Bus(2, "kaz-uae", 20, 0)

// busSystem.addBus(bus1)
// busSystem.addBus(bus2)
// busSystem.listBuses()
// busSystem.searchByRoute("uzb-rus")
// busSystem.reserveSeat(1, 2)
// busSystem.cancelReservation(1, 1)
// busSystem.listBuses()







//  -------------------------- NOT COMPLETED YET ----------------------------------------------------------
// 3 ------------------------------------------------------------------------------------------------------
class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `name:${this.name}, price:${this.price}, stock:${this.stock}`;
    }
}



