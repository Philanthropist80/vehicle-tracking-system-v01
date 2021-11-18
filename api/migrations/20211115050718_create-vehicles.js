/**
 * Create vehicles  table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 exports.up = function (knex) {
    return knex.schema.createTable('vehicles', table => {
        table.increments('id').primary().unsigned();
        table.string('code').notNullable();
        table.string('description').notNullable();
        table.string('model').notNullable();
        table.string('chesis').unique().notNullable();
        table.string('engine').unique().notNullable();
        table.string('made_year').notNullable();
        table.string('registration_year').notNullable();
        table.string('owner').notNullable();
        table.string('owner_phone').notNullable();
        table.string('owner_email').notNullable();
        table.bool('status').default(false);    
        table.integer('user_id').notNullable().comment('this refer users table id column');
        table.string('created_by').nullable();
        table.string('updated_by').nullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop vehicles table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('vehicles');
};
