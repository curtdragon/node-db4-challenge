exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", table => {
        table.increments();
        table.string("recipe_name", 128)
            .notNullable()
            .unique();
    })
    .createTable("ingredients", table => {
        table.increments();
        table.string("ingredient_name", 128)
            .notNullable();
        table.integer("quantity")
            .notNullable();
    })
    .createTable("steps", table => {
        table.increments();
        table.integer("step_number")
            .notNullable();
        table.string("instructions")
            .notNullable();
        table.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
    .createTable("recipe_ingredients", table => {
        table.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes");
        table.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("ingredients");
        table.primary(["recipe_id","ingredient_id"])
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("steps")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")  
};
