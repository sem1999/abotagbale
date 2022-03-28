module.exports = {


  friendlyName: 'All admin',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

    internalError:{
      description : 'une erreur interne  est survenue '
    }

  },


  fn: async function (exits) {
    
    try {
      data = await Admin.find();

     return  exits.success({status:'ok', admins:data});
     
    } catch (error) {
      return exits.succes({ status:'ko',
      name:'internalError',
      message:'Une erreur interne est survenue  ',
      trace:error,
      description:'Veuillez vérifier vos informations  '});
    }
  }


};

