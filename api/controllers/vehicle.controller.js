import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import Vehicle from '../models/vehicle.model';

/**
 * Find all the vehicle
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Vehicle.forge()
        .fetchAll()
        .then(vehicle => res.json({
                error: false,
                data: vehicle.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 *  Find vehicle by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    Vehicle.forge({id: req.params.id})
        .fetch()
        .then(vehicle => {
            if (!vehicle) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: vehicle.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Add new vehicle
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
 export function add(req, res) {
    const {code, description, model, chesis, engine, made_year, registration_year, owner, owner_phone, owner_email,user_id, created_by} = req.body;
    const status = true;
 
     Vehicle.forge({
        code, description, model, chesis, engine, made_year, registration_year, owner, owner_phone, owner_email,user_id, status
    }).save()
        .then(user => res.json({
                success: true,
                data: user.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}