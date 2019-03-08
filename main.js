/*------------ QuerySelectors ------------*/
var btnEnter = document.querySelector('#btn-enter');
var inputTitle = document.querySelector('#input-title');
var inputAddress = document.querySelector('#input-address');
var outputTitle = document.querySelector('.output-title');
var outputAddress = document.querySelector('.output-address');
var btnRead = document.querySelector('.btn-delete');
var btnDelete = document.querySelector('.btn-read');

/*------------ Event Listeners ---------*/

btnEnter.addEventListener('click' saveBookmark);
btnRead.addEventListener('click' markRead);
btnDelete.addEventListener('click' deleteCard);

/*------------ Clone Node --------------*/

// clone the card UI and the event listeners on each card
// create function to replace html on card with input data from "input-title" and "input-address"
function saveBookmark(e){
  e.preventDefault()

}

/*------------ Functions ---------------*/

// --------- Phase one
// toggle function to add class of "read" to card after click and remove if already marked
function markRead(e){

}

// function to delete card if user clicks button

function deleteCard(e){

}

//---------- Phase two


// If the user omits the title or the URL, the application should not create the link and should instead display an error.



//---------- Phase Three

//The button for creating links should be disabled if there are no contents in the title or URL fields.

//The application should be able to keep count of the total number of links currently on the page.

//The application should be able to keep count of the total number of read and unread links currently on the page.



//----------- Phase Four

//Add a “Clear Read Bookmarks” button which clears all the read bookmarks when clicked.

//The user should not to be able to add a URL that isn’t valid.