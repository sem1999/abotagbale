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

      return exits.success(data);
    } catch (error) {
      return exits.internalError({
        status: 'ko',
        name: 'internalError',
        message: 'Une erreur interne est survenue  ',
        trace: error,
        description: 'Veuillez vérifier vos informations  '
      });
    }
  }


};

