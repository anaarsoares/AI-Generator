function generateRecipe (event) {
    event.preventDefault();


    new Typewriter('.recipe-instructions', {
        strings: "Generating a recipe for you!",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);