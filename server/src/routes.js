const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register,
        )
    // Before dividing controllers
    // app.post('/register', (req, res) => {
    //     res.send({
    //         message: `Hello ${req.body.email}, User Registered!`
    //     })
    // })
}