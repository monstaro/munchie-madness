//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.

var snackName = document.getElementById("snack-name")

var snackDesc = document.getElementById("snack-desc")

var snackButton = document.querySelector(".button")

var newCard = document.querySelector(".grocery-list")

var deleteButton = document.querySelector(".deleteMe")


snackButton.addEventListener('click', openCard);

newCard.addEventListener('click', closeCard);

function closeCard(event){
	if (event.target.classList.contains('deleteMe')) {
		event.target.closest('section').remove();
	}
}


function openCard(){
	event.preventDefault();
	newCard.insertAdjacentHTML('afterbegin',
`<section class="snack-card">
<h1 class="snack-name-card">
${snackName.value}
</h1>
<p class="snack-desc-card">
${snackDesc.value}</p><input type="button" class="deleteMe" value="delete me">
</section>`)
}







//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM


//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled
