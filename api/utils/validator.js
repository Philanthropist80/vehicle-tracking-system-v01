import Joi from 'joi';

export default {
    storeUser:
        Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        }),

    updateUser: Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    }),


    storeVehicle:
    Joi.object({
        code: Joi.string().required(),
        description: Joi.string().required(),
        model: Joi.string().required(),
        chesis: Joi.string().required(),
        engine: Joi.string().required(),
        made_year: Joi.string().required(),
        registration_year: Joi.string().required(),
        owner: Joi.string().required(),
        owner_phone: Joi.string().required(),
        owner_email: Joi.string().email().required(),
        user_id: Joi.string().required()
    }),

updateVehicle: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}),

storeLocation:
    Joi.object({
        vehicle_id: Joi.string().required(),
        description: Joi.string().required(),
        longitute: Joi.number().required(),
        latitude: Joi.number().required()
    }),

updateLocation: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}),
    login:
        Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required()
        })

};