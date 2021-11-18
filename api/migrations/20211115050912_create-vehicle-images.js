/**
 * Create vehicles' and drivers' images table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 exports.up = function (knex) {
    return knex.schema.createTable('images', table => {
        table.increments('id').primary().unsigned();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.binary('image').notNullable();
        table.string('relation_type').notNullable().comment('Relation Type => VEHICLE / DRIVER');;             
        table.integer('relation_id').unsigned().notNullable().comment('Relation ID => VEHICLE ID / DRIVER ID');    
        table.bool('status').default(false);    
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop vehicles' and drivers' images table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('images');
};
