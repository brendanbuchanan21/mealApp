
 const input = document.getElementById("input");
 const findBtn = document.getElementById("find-btn");

  findBtn.addEventListener("click", function() {
    const keyword = input.value.trim();
    if(keyword) {
        getRecipes(keyword);
    } else {
        alert("Please input a valid recipe");
    }
    input.value = "";
  });

  function getRecipes(keyword) {
        console.log("getRecipes called with keyword:", keyword);
        const apiKey = "2dcbf2d8532e4a4693ad25602e4636a0";
        const apiURL = `https://api.spoonacular.com/recipes/complexSearch?query=${keyword}&number=5&apiKey=${apiKey}`;

        fetch(apiURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.results);
            const recipes = data.results || [];
            displayRecipes(recipes);
        })
        .catch(error => {
            console.error("Error fetching recipes:", error);
        });
} 


function displayRecipes(recipes) {
 const container = document.getElementById("section-2");
 
    container.innerHTML = "";

    if(recipes.length === 0) {
        container.innerHTML = "<p>No recipes found.</p>";
        return;
    }


    recipes.forEach(recipe => {
        //creaate a new div for each recipe
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-container");

        recipeCard.innerHTML = ` <h3>Meal Name: ${recipe.title}</h3>
        <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: auto; border-radius: 5px;"> 
        <p class="recipe-description">"No description available"</p>`;

        container.appendChild(recipeCard);
        });
}
