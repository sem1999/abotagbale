/**
 * Admin_vaccin_gerer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 const bcrypt = require('bcrypt-nodejs');
module.exports = {

  attributes: {

    operation:{type:'string', isIn:['create','update','delete']
  },

  status:{type:'boolean' , defaultsTo:true},
    vaccin:{
      model:'vaccin'
    },

    medecin_admin:{

      model:'medecin_admin'
    }


  },

};

