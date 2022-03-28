/**
 * MedecinController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login_api: async function (req, res) {

        if (!req.body.pseudo || !req.body.password) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner le mot de passe et votre contact svp'
            });

        }

        var data = await sails.helpers.login("" + req.body.pseudo, "" + req.body.password, "medecin").intercept('UserRoleError', 'pseudoPasswordValidationError', 'noAccount', 'internalError', 'DataVerificationError', 'UserRoleError');

        res.json(data);

    },

    add_medecin_api: async function (req, res) {

        if (!req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId || !req.body.password || !req.body.dateNaissance || !req.body.tel || !req.body.centre) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.addMedecin(req.body.nom, req.body.prenom, req.body.pseudo, req.body.tel, req.body.password, req.body.cardId, req.body.email, req.body.dateNaissance, req.body.centre);

        res.json(data);
    },

    update_medecin_api: async function (req, res) {

        if (!req.body.id || !req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId || !req.body.password || !req.body.dateNaissance || !req.body.tel || !req.body.centre) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.updtaeMedecin(req.body.id, req.body.nom, req.body.prenom, req.body.pseudo, req.body.tel, req.body.password, req.body.cardId, req.body.email, req.body.dateNaissance, req.body.centre);

        res.json(data);
    },

    update_password_api: async function (req, res) {

        if (!ancienmdp || !nouveaumdp || !id) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }


        var data = await sails.helpers.updatePassword(req.body.id, req.body.ancienmdp, req.body.nouveaumdp, "medecin");

        res.json(data);

    },

    all_medecin_api: async function (req, res) {

        var data = await sails.helpers.allMedecin();

        res.json(data);
    },

    find_medecin_by_id_api: async function (req, res) {

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findMedecinById(req.body.id);

        res.json(data);
    },

    find_medecin_by_centre_api: async function (req, res) {

        if (!req.body.centreId) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findMedecinByCentre(req.body.centreId);

        res.json(data);
    },

    find_medecin_by_medecin_admin_api: async function (req, res) {

        if (!req.body.medecinAdminId) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findMedecinByMedecinAdmin(req.body.medecinAdminId);

        res.json(data);
    },


};

