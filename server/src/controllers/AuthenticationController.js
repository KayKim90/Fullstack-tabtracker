const {User} = require('../models')

module.exports = {
    async register(req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch(err) {
            res.status(404).send({
                error: 'This email account is already in use'
            })
            // case: email already exists

        }
        res.send({
            message: `Hello ${req.body.email}, User Registered!`
        })
    }
}