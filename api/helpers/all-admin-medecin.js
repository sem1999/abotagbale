module.exports = {


  friendlyName: 'All admin medecin',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs,exits) {
    try {
      data = await Medecin_admin.find();

      return exits.success({status:'ok', medecins : data});
    } catch (error) {
      return exits.success({
        status: 'ko',
        name: 'internalError',
        message: 'Une erreur interne est survenue  ',
        trace: error,
        description: 'Veuillez vérifier vos informations  '
      });
    }
  }


};

