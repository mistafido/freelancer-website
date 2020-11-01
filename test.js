const nodemailer = require('nodemailer');


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
    subject: 'Contact Email',
    text: 'some cool content'
}


transporter.sendMail(mail, function(err, info){
    if(err) {
        console.log(err)
    } else {
        console.log('Email has been sent!!' + info.response)
    }

})