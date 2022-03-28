/**
 * PatientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login_api: async function (req, res) {

        if (!req.body.pseudo || !req.body.password) {


            res.json({
                status: 'ko',
                name: 'usernamePasswordRequired',
                message: 'Veuillez renseigner le mot de passe et votre contact svp'
            });

        }

        var data = await sails.helpers.login("" + req.body.pseudo, "" + req.body.password, "admedecin").intercept('UserRoleError', 'pseudoPasswordValidationError', 'noAccount', 'internalError', 'usernamePasswordRequired', 'UserRoleError');

        res.json(data);

    },

    first_connexion_api: async function (req, res) {

        if (!req.body.code) {


            res.json({
                status: 'ko',
                name: 'usernamePasswordRequired',
                message: 'Veuillez renseigner le mot de passe et votre contact svp'
            });

        }


        var data = await sails.helpers.patientFirstConnexion("" + req.body.code,).intercept('UserRoleError', 'pseudoPasswordValidationError', 'noAccountError', 'internalError', 'usernamePasswordRequired', 'UserRoleError');
        res.json(data);

    },

    add_patient_api: async function (req, res) {

        if (!req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId  || !req.body.dateNaissance || !req.body.tel || !req.body.medecin) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.addPatient(req.body.nom, req.body.prenom, req.body.pseudo, req.body.tel, req.body.cardId, req.body.email, req.body.dateNaissance, req.body.medecin);

        res.json(data);
    },

    update_patient_api: async function (req, res) {

        if (!req.body.id || !req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId || !req.body.password || !req.body.dateNaissance || !req.body.tel || !req.body.medecin) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.updatePatient(req.body.id, req.body.nom, req.body.prenom, req.body.pseudo, req.body.tel, req.body.password, req.body.cardId, req.body.email, req.body.dateNaissance, req.body.medecin);

        res.json(data);
    },

    update_password_api: async function (req,res) {

        if (!ancienmdp || !nouveaumdp || !id  ) {


            res.json({
                status: 'ko',
                name: 'formDataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }


        var data = await sails.helpers.updatePassword(req.body.id , req.body.ancienmdp, req.body.nouveaumdp, "vaccinnate");

        res.json(data);
        
    },

    all_patient_api: async function (req, res) {

        var data = await sails.helpers.allPatient();

        res.json(data);
    },

    find_patient_by_id_api: async function (req, res) {

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'formDataRequired',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findPatientById(req.body.id);

        res.json(data);
    },

    find_patient_by_medecin_api: async function (req, res) {

        if (!req.body.medecinId) {


            res.json({
                status: 'ko',
                name: 'formDataRequired',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findPatientByMedecin(req.body.medecinId);

        res.json(data);
    },


};

