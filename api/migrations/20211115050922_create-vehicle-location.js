/**
 * Create vehicle location  table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 exports.up = function (knex) {
    return knex.schema.createTable('vehicle_location', table => {
        table.increments('id').primary().unsigned();
        table.integer('vehicle_id').notNullable().comment('this refer vehicles table id column');
        table.string('description').notNullable();
        table.double('longitute',8,4).notNullable();
        table.double('latitude',8,4).notNullable();
        table.bool('status').default(false);    
        table.string('created_by').nullable();  
        table.string('updated_by').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop vehicle location table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('vehicle_location');
};
