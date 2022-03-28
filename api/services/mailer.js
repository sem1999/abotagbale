
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "mail.payzyapp.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'recovery@payzyapp.com', 
      pass: '@k@de1999gil2@', 
    }

  });

  var transporter2 = nodemailer.createTransport({
    host: "mail.payzyapp.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'contact@payzyapp.com', 
      pass: '@k@de1999gil2@', 
    }

  });


 
module.exports ={

'recovery':function(code,to){

    var mailOptions = {
        from: 'recovery@payzyapp.com',
        to: to+'',
        subject:'RECUPERATION DE MOT DE PASSE',
        text: 'Merci d\'utiliser la plateforme de paiement en ligne Payzy votre code de récupération est : '+code+'. Merci de ne plus oublier votre mot de passe '
      };
      var a;
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          a = 0;
          return a;
        } else {
          a = 1
          return a;
        }
      }); 

},

'sendevis':function(num,name,desc,to){

  var mailOptions = {
      from: 'contact@payzyapp.com',
      to: 'akadepremier60@gmail.com',
      subject:'CREATION SITE WEB ',
      text: 'Demande de devis demander par '+name+' contact : '+num+' mail : '+to+' description projet : '+desc+' .'
    };
    var a ;
    transporter2.sendMail(mailOptions, function(error, info){
      if (error) {
        sails.log.error(error);
        sails.log.error(info);
        a = 0;
        return a;
      } else {
        a = 1
        return a;
      }
    }); 

}

};