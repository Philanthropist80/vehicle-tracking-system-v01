import bcrypt from 'bcrypt';
import HttpStatus from 'http-status-codes';
import Location from '../models/location.model';

/**
 * Find all active vehicles' Location
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Location.forge({status: true})
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
 *  Find vehicle's location by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    Location.forge({id: req.params.id})
        .fetch()
        .then(location => {
            if (!location) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: location.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Add new vehicle's location
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
 export function add(req, res) {
    const {vehicle_id, description, longitute, latitude, created_by} = req.body;
    const status = true;
 
    
    Location.forge({
        vehicle_id, description, longitute, latitude, created_by, status
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