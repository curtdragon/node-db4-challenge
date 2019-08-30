const express = require("express");
const Recipes = require("./recipe-router");
const router = express.Router();


// GET / api / recipes /: all recipes(without details about ingredients or steps)


// GET / api / recipes /: id / shoppingList: a list of ingredients and quantites for a single recipe


// GET / api / recipes /: id / instructions: a correctly ordered list of how to prepare a single recipe


// GET / api / ingredients /: id / recipes: all recipes in the system that utilize a single ingredient



module.exports = router;