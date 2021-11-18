/**
 * Create notifications (messages)  table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
 exports.up = function (knex) {
    return knex.schema.createTable('notifications', table => {
        table.increments('id').primary().unsigned();
        table.string('notification').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * Drop notifications table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
exports.down = function (knex) {
    return knex.schema.dropTable('notifications');
};
