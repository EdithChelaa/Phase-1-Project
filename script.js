"use strict";
document.addEventListener("DOMContentLoaded", () => {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

})

const cocktail = document.getElementById('get_cocktail');
const cocktail_container = document.getElementById('cocktail');
cocktail.addEventListener('click', () => {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createCocktail(res.drinks[0]);
	});
});

const createCocktail = (cocktail) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(cocktail[`strIngredient${i}`]) {
			ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
	
	const newInnerHTML = `
		<div id="rowa" id="cocktail-dataa">
			<div id="five">
				<img src="${cocktail.strDrinkThumb}" >
            </div>
            <div id="seven">
               <h4>${cocktail.strDrink}</h4>

			   <div class="likes"> 
			      <button id="likeButton">
			        <i class="fa fa-thumbs-up"></i>
			      </button>
				  <input type="number" id="inputLike" value="0" name="">likes</input>
		       </div>
			 
			   
				<p><strong>Category:</strong> ${cocktail.strCategory}</p>
				<p><strong>Glass type:</strong> ${cocktail.strGlass}</p>
				<p><strong>Type:</strong> ${cocktail.strAlcoholic}</p>
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
                <h5>Instructions:</h5>
				<p>${cocktail.strInstructions}</p>
				
			</div>
		</div>

	`;

	cocktail_container.innerHTML = newInnerHTML;
	let likebtn = document.querySelector('#likeButton');
    let inputLike= document.querySelector('#inputLike');

    likebtn.addEventListener('click', () => {
	inputLike.value = parseInt(inputLike.value) + 1;
	// inputLike.style.color = "#12ff00";
})
	
}