

module.exports = {


  friendlyName: 'Find medecin admin by centre',


  description: '',


  inputs: {
    id:{required : true, type:'number'}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs,exits) {
    try {
      data = await Medecin_admin.findOne({centre:inputs.id});
      exits.success(data);
    } catch (error) {
      return exits.success({ status:'ko',
      name:'internalError',
      message:'Une erreur interne est survenue  ',
      trace:error,
      description:'Veuillez vérifier vos informations  '});
    }
  }


};

