exports.seed = function(knex) {
    return knex("steps").insert([
      { recipe_id: 1, step_number: 1, instructions: "Combine ingredients" },
      { recipe_id: 1, step_number: 2, instructions: "Bake for 15 minutes" },    
      { recipe_id: 2, step_number: 1, instructions: "Combine ingredients" },
      { recipe_id: 2, step_number: 2, instructions: "Bake for 15 minutes" },       
    ]);
};
