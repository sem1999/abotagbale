module.exports = {


  friendlyName: 'Add vaccin',


  description: '',


  inputs: {

    libelle: { type: 'string', required: true, unique: true },
    maladie: { type: 'string', required: true },
    description: { type: 'string', required: true },
    dose_rcmd: { type: 'string', required: true },
    code_vaccin: { type: 'string', required: true },
    date_expiration: { type: 'string', required: true },
  },


  exits: {

    success: {
      description: 'All done.',
    },
    internalError: {
      description: 'Une erreur est survenue'
    },

  },


  fn: async function (inputs, exits) {

    try {


      data = await Vaccin.createEach([

        { libelle: inputs.libelle, maladie: inputs.maladie, description: inputs.description, dose_rcmd: inputs.dose_rcmd, code_vaccin: inputs.code_vaccin, date_expiration: inputs.date_expiration },

      ])
       
        .fetch()

      return exits.success(data);

    } catch (error) {

      return exits.success(
        {
          status: 'ko',
          name: 'internalError',
          message: 'Une erreur interne est survenue  ',
          trace: error,
          description: 'Veuillez vérifier vos informations  '
        }
      );

    }
  }


};

