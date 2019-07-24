const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error, value} = Joi.validate(req.body, schema)
        if(error){
            switch(error.details[0].context.key){
                case 'email': 
                res.status(400).send({
                    error: `Please enter a valid email address ${req.body.email}`
                })
                break
                case 'password': 
                res.status(400).send({
                    error: `Password failed to match the following rules: 
                    <br>
                    1. It must contain ONLY the following characters: lower case, upper case, numerics
                    <br>
                    2. The password lenth should be from 8 characters to 32 characters
                    `
                })                
                break
                default:
                    res.status(400).send({
                        error: `Please try again`
                    })
            }
        } else {
            next()
        }
    }
}