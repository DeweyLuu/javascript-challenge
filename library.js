function Library() {
	this.shelf = [];
}
function Shelf(name) {
	this.name = name;
	this.books = [];
};
Library.prototype.addShelf = function(name) {
	this.shelf.push(name);
}
Library.prototype.removeShelf = function(name) {
	for (var i = 0; i < this.shelf.length; i++) {
		if (this.shelf[i].name == name) {
			this.shelf.splice(i,1);
		}
	}
}
Library.prototype.addBook = function(name, shelfName) {
	for (var i = 0; i < this.shelf.length; i++) {
		if (this.shelf[i].name == shelfName) {
			this.shelf[i].books.push(name);
		}
	}
}
Library.prototype.removeBook = function(genre, name) {
	for (var i = 0; i < this.shelf.length; i++) {
		if (this.shelf[i].name == genre) {
			for (var j = 0; j < this.shelf[i].books.length; j++) {
				if (this.shelf[i].books[j].name == name) {
					this.shelf[i].books.splice(j,1);
				}
			}
		}
	}
}
function Book(name, author) {
	this.name = name;
	this.author = author;
};

var library = new Library();

var shelf1 = new Shelf('teen');
var shelf2 = new Shelf('comic');

var potter = new Book("harry potter", "jk rowling");
var games = new Book("hunger games", "suzanne collins");
var marvel1 = new Book("spiderman", "stan lee");
var marvel2 = new Book("hulk", "stan lee");

library.addShelf(shelf1);
library.addShelf(shelf2);

library.addBook(potter, 'teen');
library.addBook(games, 'teen');
library.addBook(marvel1, 'comic');
library.addBook(marvel2, 'comic');

library.removeBook('comic', 'hulk');

library.removeShelf('teen');
