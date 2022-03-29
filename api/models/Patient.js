/**
 * Patient.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 const bcrypt = require('bcrypt-nodejs');
module.exports = {

  attributes: {
    
    nom: { type: 'string', required: true, },
    prenom: { type: 'string', required: true, },
    tel: { type: 'string', required: true, },
    password:{ type: 'string', required: true,unique:true},
    role:{
      type:'string',
      defaultsTo:'vaccinate',
      isIn:['medecin','admin','admedecin','vaccinate'],
    },  
    
    card_id:{type: 'string',required:true} ,
    email:{type:'string', required: true,isEmail:true},
    code_connection:{type:'string',unique:true, required: true },
    date_naissance:{type:'string',},
    status:{type:'boolean' , defaultsTo:false},
    
    medecin:{
      model:'medecin'
    },

  },
  customToJSON: function () {
    return _.omit(this, ['password']);

  },
  beforeCreate: function (admin, cb) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(admin.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        admin.password = hash;
        return cb();
      });
    });
  },
  beforeUpdate: function (admin, cb) {
    if (admin.password) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(admin.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        admin.password = hash;
        return cb();
      });
    });
  }else{
    return cb();
  }
  },

};

