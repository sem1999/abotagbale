module.exports = {


  friendlyName: 'All vaccination',


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
      data = await Vaccination.find();

      exits.success({status:'ok' , vaccinations:data});
    } catch (error) {
      return exits.success({ status:'ko',
      name:'internalError',
      message:'Une erreur interne est survenue  ',
      trace:error,
      description:'Veuillez vérifier vos informations  '});
    }
  }


};

