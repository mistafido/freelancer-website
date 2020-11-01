const User = require('../database/models/User');

module.exports = (req, res) => {
    const pword = req.body.password;
    const cword = req.body.cpassword;

    if( pword !== cword ) {
        console.log('passwords do not match')
        res.redirect('/auth/signup')
    } else {
        User.create(req.body, (error,user) => {
            if (error) {
                console.log(error)
                const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                req.flash('registrationErrors', registrationErrors) 
                req.flash('data', req.body)
                return res.redirect('/auth/signup') 
            }
            else {
                res.redirect('/')
            }
        })
    }
    
}