exports.seed = function(knex) {
    return knex("ingredients").insert([
      { ingredient_name: "tablespoon of butter", quantity: 2 },
      { ingredient_name: "cups of flour", quantity: 1 },                
      { ingredient_name: "cups of milk", quantity: 2 },                
      { ingredient_name: "ounces of chocolate chips", quantity: 2 },
      { ingredient_name: "teaspoons of salt", quantity: 2 },       
      { ingredient_name: "cups of sugar", quantity: 2 },
      { ingredient_name: "tablespoons of baking powder", quantity: 2 },    
    ]);
};
