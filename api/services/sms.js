
const request = require('request');
module.exports={

    sendMessage:function(to , message , from, ){
        var objs = {
            'from': ''+from,
            'to': ''+ to,
            'type': '0',
            'message': ''+message,
            'dlr': '1',
    
        };

           
    request({
        method: 'POST',
        uri: "https://edok-api.kingsmspro.org/api/v1/sms/send",
        body: objs,
        json: true,// Automatically stringifies the body to JSON,
        headers: {
            //"Accept": "application/json",
            "APIKEY": process.env.SMS_API_KEY,
            "CLIENTID": process.env.SMS_CLIENT_ID,
            //'content-type': 'application/x-www-form-urlencoded',
            //'User-Agent': 'Request-Promise'
        },
    }, function (error, response, body) {
        if (error) {
           
            return 0;
        }
        else {

            return 1;
            
        }
    });

    }



}