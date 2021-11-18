/**
 * Create vehicle's' drivers  table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 exports.up = function (knex) {
    return knex.schema.createTable('vehicle_drivers', table => {
        table.increments('id').primary().unsigned();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('licence').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('phone').notNullable();
        table.integer('vehicle_id').notNullable().comment('this refer vehicles table id column');
        table.bool('status').default(false);    
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop vehicle's drivers table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('vehicle_drivers');
};
