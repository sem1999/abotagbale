module.exports = {


  friendlyName: 'All patient',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },
    internalError:{
      description: 'une erreur interne est survenue '
    }

  },


  fn: async function (inputs,exits) {
    try {
      data = await Patient.find();

      exits.success({status:'ok' , patients:data});
    } catch (error) {
      return exits.success({ status:'ko',
      name:'internalError',
      message:'Une erreur interne est survenue  ',
      trace:error,
      description:'Veuillez vérifier vos informations  '});
    }
  }


};

