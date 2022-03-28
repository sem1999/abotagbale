/**
 * Medecin.js
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
      defaultsTo:'medecin',
      isIn:['medecin','admin','admedecin','vaccinate'],
    },  
    card_id:{type: 'string'} ,
    email:{type:'string', required: true,isEmail:true,},
    date_naissance:{type:'string',},

    status:{type:'boolean' , defaultsTo: true, },
    
    patients:{
      collection:'patient',
      via:'medecin'
    },

    vaccin_gestion_logs:{
      collection:'medecin_vaccin_gerer',
      via:'medecin'
    },

    centre:{
      model:'centre'
    },

    medecin_admin:{
      model:'medecin_admin'
    },





  },

};

