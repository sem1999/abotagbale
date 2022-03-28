module.exports = {


  friendlyName: 'Find admin by id',


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
      data = await Admin.findOne({ id: inputs.id });
      exits.success(data);
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

