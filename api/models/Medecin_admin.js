/**
 * Medecin_admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 const bcrypt = require('bcrypt-nodejs');
 
module.exports = {

  attributes: {
    
    nom: { type: 'string', required: true, },
    prenom: { type: 'string', required: true, },
    pseudo:{type: 'string', required: true,},
    tel: { type: 'string', required: true, },
    password:{ type: 'string', required: true,unique:true},

    role:{
      type:'string',
      defaultsTo:'admedecin',
      isIn:['medecin','admin','admedecin','vaccinate'],
    },  
    card_id:{type: 'string',required:true} ,
    email:{type:'string', required: true,isEmail:true},
    date_naissance:{type:'string',},
    status:{type:'boolean' , defaultsTo:true},
   

    medecin_gestion_logs:{

      collection:'admin_medecin_gerer',
      via:'medecin_admin'
    },

    vaccin_gestion_logs:{

      collection:'admin_vaccin_gerer',
      via:'medecin_admin'
    },

    medecins:{

      collection:"medecin",
      via:'medecin_admin'

    },

    centre:{
      model:'centre'
    },

  },

  customToJSON: function () {
    return _.omit(this, ['password']);

  },
  beforeCreate: function (medecin_admin, cb) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(medecin_admin.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        medecin_admin.password = hash;
        return cb();
      });
    });
  },
  beforeUpdate: function (medecin_admin, cb) {
    if (medecin_admin.password) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(medecin_admin.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        medecin_admin.password = hash;
        return cb();
      });
    });
  }else{
    return cb();
  }
  },

};

