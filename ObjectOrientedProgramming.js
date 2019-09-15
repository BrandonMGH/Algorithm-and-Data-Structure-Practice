//** Object Practice */

const  movieOne = {
    title: "StarWars",
    director: "George Lucas",
    releaseYear: "1977",
    printSummary: function(){
        console.log(`${this.title} came out in ${this.releaseYear} and was directed by ${this.director}`)
    }
}

movieOne.printSummary(); 
console.log(Object.values(movieOne))
console.log(Object.keys(movieOne))

//** Constructor Practice **//

class Movies {
    constructor(title, director, releaseYear){
        this.title = title
        this.director = director
        this.releaseYear = releaseYear
        this.printSummary = function (){
            console.log(`${this.title} came out in ${this.releaseYear} and was directed by ${this.director}`)
        }
    }
}

let theMatrix = new Movies("The Matrix", "Wachowskis", "1999")
let Alien = new Movies("Alien", "Ridley Scott", "1979")

theMatrix.printSummary(); 
Alien.printSummary(); 

// * Prototypes * //

class BasketballPlayer{
    constructor(player, team, dateBorn){
        this.player = player
        this.team = team
        this.dateBorn = dateBorn
    }
}

BasketballPlayer.prototype.getStats = function (){
    return `${this.player} players for the ${this.team}`
}

BasketballPlayer.prototype.getAge = function (){
    const currentAge = new Date().getFullYear() - this.dateBorn
    return `${this.player} is ${currentAge} years old`
}

let kawhiLeonard = new BasketballPlayer("Kawhi Leonard", "Clippers", 1991)

console.log(kawhiLeonard.getStats());
console.log(kawhiLeonard.getAge());

// ** INHERITANCE ** // 

function Book(title, author, year){  // ** CANNOT BE A CLASS OR ES5 Javascript will have trouble compiling the ES6 class designation ** // 
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

function BookGenre(title, director, releaseYear, genre){
    Book.call(this, title, director, releaseYear);

    this.genre = genre;
}

BookGenre.prototype = Object.create(Book.prototype)

const itBook = new BookGenre("It", "Stephen King", 1986, "Horror")

// To change the constructor in the prototype from the Book constructor to the BookGenre constructor...  //

BookGenre.prototype.constructor = BookGenre

console.log(itBook.getSummary())

// ** Using Object.create to create new objects ** //

const movieCatalogue = {
    getCatalogue: function(){
        return `${this.title} was written by ${this.director} in ${this.year}`
    },
    getAge: function (){
        const currentAge = new Date().getFullYear() - this.year
        return `${this.title} is ${currentAge} years old`
    }
}

const GoneWithTheWind = Object.create(movieCatalogue);
GoneWithTheWind.title = `Gone With the Wind`
GoneWithTheWind.director = `Victor Fleming`
GoneWithTheWind.year = 1939

console.log(GoneWithTheWind.getCatalogue()); 
console.log(GoneWithTheWind.getAge());

// ** E6 Classes ** //

class TVShows {
    constructor(name, lead, year){
        this.name = name
        this.lead = lead
        this.year = year
    }
    getTVShowInfo(){
        return `${this.name} stars ${this.lead} and came out in the year ${this.year}`
    }
}

const TheBoys = new TVShows(`The Boys`, `Karl Urban`, 2019)

console.log(TheBoys.getTVShowInfo())

class Genre extends TVShows {
    constructor(name, lead, year, genre){
        super(name, lead, year);
        this.genre = genre;
    }
    genreType(){
        console.log(`${this.name} is a ${this.genre}`)
    }
}

const Castle = new Genre (`Castle`, `Nathan Fillion`, 2009, `Comedy-Drama`)

console.log(Castle)
console.log(Castle.genreType())

