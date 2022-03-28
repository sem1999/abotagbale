/**
 * Vaccin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 const bcrypt = require('bcrypt-nodejs');
module.exports = {

  attributes: {

    libelle:{type:'string',required: true,unique:true},
    maladie:{type:'string'},
    description:{type:'string'},
    dose_rcmd:{type:'string'},
    code_vaccin:{type:'string'},
    etat_vaccin:{type:'string', isIn:['expire','good'], defaultsTo:'good',},
    date_expiration:{type:'string'},
    status:{type:'boolean' , defaultsTo:true,},
    

    
  },

};

