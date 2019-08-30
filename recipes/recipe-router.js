const express = require("express");
const Recipes = require("./recipe-model");
const router = express.Router();


// GET / api / recipes /: all recipes(without details about ingredients or steps)
router.get("/", (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({
            message: "Failed to get recipes"
        })
    })
})


// GET / api / recipes /: id / shoppingList: a list of ingredients and quantites for a single recipe


// GET / api / recipes /: id / instructions: a correctly ordered list of how to prepare a single recipe


// GET / api / ingredients /: id / recipes: all recipes in the system that utilize a single ingredient



module.exports = router;