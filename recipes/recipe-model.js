const db = require("../data/db-config");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeByIngredient
};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {

}

function getInstructions(recipe_id) {

}

function getRecipeByIngredient() {

}