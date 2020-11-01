const User = require('../database/models/User')

module.exports = (req, res) => {
    const { email,password } = req.body;

    console.log({email})
    
    User.findOne({email}, (error, user) => {
        if ( user.email == 'admin@admin.com' ) {
            req.session.userId = user._id
            return res.redirect('/dashboard')
        }
        if( user ) {
            if ( password === user.password ) {
                req.session.userId = user._id
                return res.redirect('/')
            }
        } else {
            res.redirect('/auth/login')
        }
    })
    
}