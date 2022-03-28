
const bcrypt = require('bcryptjs');

require('dotenv').config();

module.exports={

compare:function(nmdp, ompd){

    bcrypt.compare(nmdp, ompd, function (err, valid) {

        if(err){

            return 0;
        }

        if(!valid){

            return 0;

        
        }

        if(valid){

            return 1;


        }

    });


}


}