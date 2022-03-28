/**
 * Centre.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 const bcrypt = require('bcrypt-nodejs');
module.exports = {

  attributes: {

    nom:{type:'string',unique:true, required : true},
    lat:{type:'string',},
    long:{type:'string',},
    url:{type:'string',unique:true, required : true},
    status:{type:'boolean', defaultsTo: true },
    admin:{
      model:'admin'
    },
    medecins_admin:{
      collection:'medecin_admin',
      via:'centre'
    },
    medecins:{
      collection:'medecin',
      via:'centre'
    },
  

  },

};

