exports.seed = function(knex) {
    return knex("recipes").insert([
      { recipe_name: "Chocolate Chip Cookies" },
      { recipe_name: "Sugar Cookies" },
    ]);
};
