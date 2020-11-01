const nodemailer = require('nodemailer');

module.exports = (req, res, next) => {

    const transporter =  nodemailer.createTransport({
        service : "gmail",
        auth: {
          user: "fredthafreelancer@gmail.com",
          pass: "SoulSearcher#01"
        }
    });
    
    
    const mail = {
        from: 'fredthafreelancer@gmail.com',
        to: 'fredottache@gmail.com',
        subject: req.body.email,
        text: req.body.message 
    }

    console.log(mail)

    // verify connection configuration
    transporter.verify(function(err, success) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is ready to take our messages");
    }
    });
    
    transporter.sendMail(mail, function(err, info){
        if(err) {
            console.log(err)
        } else {
            console.log('Email has been sent!!' + info.response)
        }
    
    }) 

    next()
}