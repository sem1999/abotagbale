module.exports = {


  friendlyName: 'Find centre by admin',


  description: '',


  inputs: {
    id:{required : true, type:'number'}
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
      data = await Centre.find({admin:inputs.id});
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

