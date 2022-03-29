module.exports = {


  friendlyName: 'Find vaccination by Vaccin',


  description: '',


  inputs: {
    id: { required: true, type: 'number' }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    try {
      data = await Vaccination.find({ vaccin: inputs.id });
      return exits.success({status:'ok', vaccinations:data});
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

