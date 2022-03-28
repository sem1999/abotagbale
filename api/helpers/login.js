
const bcrypt = require('bcryptjs');

require('dotenv').config();

module.exports = {


  friendlyName: 'Login',


  description: 'Script pour loger l\' admin , le medecin , l\'admin medecin , et les utilisateurs ',


  inputs: {

    pseudo: {

      type: "string",

      description: "Pseudo de l\'utilisateur ",

      required: true

    },


    password: {

      type: "string",

      description: " Mot de passe pour se loger ",

      required: true



    },

    type: {

      type: "string",

      description: " type d\'utilisateur qui veut se connecter  ",

      isIn: ['medecin', 'admin', 'admedecin', 'vaccinate'],

      required: true

    },





  },


  exits: {

    success: {

      description: ' Peut se loger .',
    },

    noAccount: {
      status: 'ko',
      name: 'internalError',
      message: 'Le pseudo  utilisé n\'a pas été retrouver',
      description: 'La recherche du pseudo n\'a pas aboutie à un resultat  '

    },

    usernamePasswordRequired: {


      status: 'ko',
      name: 'usernamePasswordRequired',
      message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
      description: 'Vous n\'avez pas renseigner les identifiants de connexion '






    },

    internalError: {



      status: 'ko',
      name: 'internalError',
      message: 'Une erreur interne est survenue ',
      description: 'La recherche du pseudo à générer une erreur interne '




    },

    pseudoPasswordValidationError: {



      status: 'ko',
      name: 'pseudoPasswordValidationError',
      message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

      description: 'Echec lors de l\'authentification '


    },

    UserRoleError: {


      status: 'ko',
      name: 'UserRoleError',
      message: 'Vous n\'êtes pas autorisé à faire cette action ',
      description: 'Seule le role admin peut effectuer cette action  '



    },





  },














  fn: async function (inputs, exits) {

    if (!inputs.pseudo || !inputs.password) {

      return exits.internalError({
        status: 'ko',
        name: 'internalError',
        message: 'Une erreur interne est survenue ',
        description: 'La recherche du pseudo à générer une erreur interne '
      });

    }


    //On vérifie si le pseudo exist vraiment 

    var password = inputs.password;

    if (inputs.type === 'admin') {

      Admin.findOne({ pseudo: inputs.pseudo, status: true }).exec(function (err, users) {
        if (err) {


          return exits.usernamePasswordRequired({
            status: 'ko',
            name: 'usernamePasswordRequired',
            message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
            description: 'Vous n\'avez pas renseigner les identifiants de connexion '
          });


        }


        if (!users) {

          return exits.noAccount({
            status: 'ko',
            name: 'noAccount',
            message: 'Le pseudo  utilisé n\'a pas été retrouver',
            description: 'La recherche du pseudo n\'a pas aboutie à un resultat  '
          });


        } else {

          bcrypt.compare(password, users.password, function (err, valid) {
            if (err) {

              return exits.pseudoPasswordValidationError({
                status: 'ko',
                name: 'pseudoPasswordValidationError',
                message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                description: 'Echec lors de l\'authentification '
              });

            };

            if (!valid) {



              return exits.pseudoPasswordValidationError({
                status: 'ko',
                name: 'pseudoPasswordValidationError',
                message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                description: 'Echec lors de l\'authentification '
              });



            } else {

              if (users.status) {


                if (users.role !== 'admin') {


                  return exits.usernamePasswordRequired({
                    status: 'ko',
                    name: 'pseudoPasswordValidationError',
                    message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                    description: 'Echec lors de l\'authentification '
                  });

                } else {
                  //password is a match

                  data = {
                    status: 'ok',
                    user: users.id + "",
                    token: jwToken.sign(users)//generate the token and send it in the response


                  };

                  return exits.success(data);
                }


              } else {

                return exits.pseudoPasswordValidationError({
                  status: 'ko',
                  name: 'pseudoPasswordValidationError',
                  message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                  description: 'Echec lors de l\'authentification '
                });

              }






            }

          });

        }

      });
    }
    if (inputs.type === 'medecin') {

      Medecin.findOne({ pseudo: inputs.pseudo, status: true }).exec(function (err, users) {
        if (err) {


          return exits.sucess({
            status: 'ko',
            name: 'usernamePasswordRequired',
            message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
            description: 'Vous n\'avez pas renseigner les identifiants de connexion '
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

          bcrypt.compare(password, users.password, function (err, valid) {
            if (err) {

              return exits.success({
                status: 'ko',
                name: 'pseudoPasswordValidationError',
                message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                description: 'Echec lors de l\'authentification '
              });


            };

            if (!valid) {



              return exits.success({
                status: 'ko',
                name: 'usernamePasswordRequired',
                message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
                description: 'Vous n\'avez pas renseigner les identifiants de connexion '
              });



            } else {

              if (users.status) {


                if (users.role !== 'medecin') {


                  return exits.success({
                    status: 'ko',
                    name: 'usernamePasswordRequired',
                    message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
                    description: 'Vous n\'avez pas renseigner les identifiants de connexion '
                  });

                } else {
                  //password is a match

                  data = {
                    status: 'ok',
                    user: users.id + "",
                    token: jwToken.sign(users)//generate the token and send it in the response


                  };

                  return exits.success(data);
                }


              } else {

                return exits.success({
                  status: 'ko',
                  name: 'pseudoPasswordValidationError',
                  message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                  description: 'Echec lors de l\'authentification '
                });

              }






            }

          });

        }

      });
    }
    if (inputs.type === 'admedecin') {

      Medecin_admin.findOne({ pseudo: inputs.pseudo, status: true }).exec(function (err, users) {
        if (err) {


          return exits.usernamePasswordRequired({
            status: 'ko',
            name: 'usernamePasswordRequired',
            message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
            description: 'Vous n\'avez pas renseigner les identifiants de connexion '
          });


        }


        if (!users) {

          return exits.noAccount({
            status: 'ko',
            name: 'noAccount',
            message: 'Le pseudo  utilisé n\'a pas été retrouver',
            description: 'La recherche du pseudo n\'a pas aboutie à un resultat  '
          });


        } else {

          bcrypt.compare(password, users.password, function (err, valid) {
            if (err) {

              return exits.pseudoPasswordValidationError({
                status: 'ko',
                name: 'pseudoPasswordValidationError',
                message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                description: 'Echec lors de l\'authentification '
              });

            };

            if (!valid) {



              return exits.pseudoPasswordValidationError({
                status: 'ko',
                name: 'pseudoPasswordValidationError',
                message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                description: 'Echec lors de l\'authentification '
              });



            } else {

              if (users.status) {


                if (users.role !== 'admedecin') {


                  return exits.usernamePasswordRequired({
                    status: 'ko',
                    name: 'usernamePasswordRequired',
                    message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
                    description: 'Vous n\'avez pas renseigner les identifiants de connexion '
                  });

                } else {
                  //password is a match

                  data = {
                    status: 'ok',
                    user: users.id + "",
                    token: jwToken.sign(users)//generate the token and send it in the response


                  };

                  return exits.success(data);
                }


              } else {

                return exits.pseudoPasswordValidationError({
                  status: 'ko',
                  name: 'pseudoPasswordValidationError',
                  message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                  description: 'Echec lors de l\'authentification '
                });

              }






            }

          });

        }

      });
    }
    if (inputs.type === 'vaccinate') {

      Patient.findOne({ pseudo: inputs.pseudo, status: true }).exec(function (err, users) {
        if (err) {


          return exits.success({
            status: 'ko',
            name: 'usernamePasswordRequired',
            message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
            description: 'Vous n\'avez pas renseigner les identifiants de connexion '
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

          bcrypt.compare(password, users.password, function (err, valid) {
            if (err) {

              return exits.success({
                status: 'ko',
                name: 'pseudoPasswordValidationError',
                message: 'Le pseudo utilisé ou le mot de passe ne sont pas valide ',

                description: 'Echec lors de l\'authentification '
              });
            };

            if (!valid) {



              return exits.success({
                status: 'ko',
                name: 'usernamePasswordRequired',
                message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
                description: 'Vous n\'avez pas renseigner les identifiants de connexion '
              });



            } else {

              if (users.status) {


                if (users.role !== 'vacinnate') {


                  return exits.succes({
                    status: 'ko',
                    name: 'usernamePasswordRequired',
                    message: 'Veuillez renseigner le mot de passe et votre pseudo svp',
                    description: 'Vous n\'avez pas renseigner les identifiants de connexion '
                  });

                } else {
                  //password is a match

                  data = {
                    status: 'ok',
                    user: users.id + "",
                    token: jwToken.sign(users)//generate the token and send it in the response


                  };

                  return exits.success(data);
                }


              } else {

                throw 'pseudoPasswordValidationError';

              }






            }

          });

        }

      });
    }












  }


};

