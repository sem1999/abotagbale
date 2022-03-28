/**
 * vaccination.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nbr_dose_prise:{type:'number'},
    code_enrollement:{type:'string'},
    date_prise:{type:'string'},
    date_expiration_prise:{type:'string'},
    status_vaccination:{type:'string', isIn:['complet','imcomplet','partiel']},
    patient:{model:'patient'},
    medecin:{model:'medecin'},
    vaccin:{model:'vaccin'},
    status:{type:'boolean', defaultsTo:true},




  },

};

