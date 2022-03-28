/**
 * MedecinAdminController
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

    add_medecin_admin_api: async function (req, res) {

        if (!req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId || !req.body.password || !req.body.dateNaissance || !req.body.tel || !req.body.centre) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.addMedecinAdmin(req.body.nom, req.body.prenom, req.body.pseudo, req.body.tel, req.body.password, req.body.cardId, req.body.email, req.body.dateNaissance, req.body.centre);

        res.json(data);
    },
    
    update_medecin_admin_api:async function (req, res) {

        if (! req.body.id || !req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId || !req.body.password || !req.body.dateNaissance || !req.body.tel || !req.body.centre) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.updateMedecinAdmin(req.body.id , req.body.nom, req.body.prenom, req.body.pseudo, req.body.tel, req.body.password, req.body.cardId, req.body.email, req.body.dateNaissance, req.body.centre);

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


        var data = await sails.helpers.updatePassword(req.body.id , req.body.ancienmdp, req.body.nouveaumdp, "admedecin");

        res.json(data);
        
    },
    all_medecin_admin_api: async function (req, res) {

        var data = await sails.helpers.allAdminMedecin();

        res.json(data);
    },

    find_medecin_admin_by_id_api: async function (req, res) {

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'formDataRequired',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findMedecinAdminById(req.body.id);

        res.json(data);
    },

    find_medecin_admin_by_centre_api: async function (req, res) {

        if (!req.body.centreId) {


            res.json({
                status: 'ko',
                name: 'formDataRequired',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findMedecinAdminById(req.body.centreId);

        res.json(data);
    }
}
