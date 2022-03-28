
module.exports = {


  friendlyName: 'Patient first connexion',


  description: '',


  inputs: {

    code: {

      type: "string",

      description: "Code de connexion",

      required: true

    },


  },


  exits: {

    success: {
      description: 'All done.',
    },

    noAccountError: {
      status: 'ko',
      name: 'internalError',
      message: 'Le pseudo  utilisé n\'a pas été retrouver',
      description: 'La recherche du pseudo n\'a pas aboutie à un resultat  '

    },

    UserRoleError: {


      status: 'ko',
      name: 'UserRoleError',
      message: 'Vous n\'êtes pas autorisé à faire cette action ',
      description: 'Seule le role patient peut effectuer cette action  '



    },

    internalError: {



      status: 'ko',
      name: 'internalError',
      message: 'Une erreur interne est survenue ',
      description: 'La recherche du pseudo à générer une erreur interne '




    },



  },


  fn: async function (inputs, exits) {


    if (!inputs.code) {

      return exits.success({
        status: 'ko',
        name: 'internalError',
        message: 'Une erreur interne est survenue ',
        description: 'La recherche du code à générer une erreur interne '
      });

    }


    Patient.findOne({ code_connection: inputs.code }).exec(function (err, users) {
      if (err) {


        return exits.success({
          status: 'ko',
          name: 'noAccount',
          message: 'Le code  utilisé n\'a pas été retrouver',
          description: 'La recherche du code n\'a pas aboutie à un resultat  '
        });


      }


      if (!users) {

        return exits.success({
          status: 'ko',
          name: 'noAccount',
          message: 'Le pseudo  utilisé n\'a pas été retrouver',
          description: 'La recherche du pseudo n\'a pas aboutie à un resultat  '
        });



      } else {

         Patient.update(users.id,

          { code_connection: 0, status:true },

        );

        return exits.success({ status: "ok", user: "" + users.id, token: jwToken.sign(users) });

      }

    });

s



  }


};

