function displayRecipe (response) {
console.log("Recipe generated");

    new Typewriter('.recipe-instructions', {
        strings: response.data.answer,
        autoStart: true,
        delay: 10,
        cursor: "",
      });

}

function generateRecipe (event) {
    event.preventDefault();

    console.log("Generating recipe");

    let ingredientsEntered = document.querySelector(".ingredients");

    let apiKey = "279o37234fc0ba3effba9a107a3601tc";
    let context = "You are a great cook, could you please generate an easy to follow recipe with the following ingredients, using the metric system for ingredients measurements and celsius degrees for temperatures."
    let prompt = `Please generate a recipe with this ingredients ${ingredientsEntered.value} the ingredients needed must be showned in a <strong> HTML element, and each step of the recipe must be separated by a <br> HTML element`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayRecipe)
    
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);

 
