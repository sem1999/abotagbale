/**
 * AdminController
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

            var data = await sails.helpers.login( ""+req.body.pseudo,  ""+req.body.password,  "admin" ).intercept('UserRoleError', 'pseudoPasswordValidationError','noAccount','internalError','usernamePasswordRequired','UserRoleError');

            res.json(data);

    },

    update_center_api:  async function(req, res){ 

        if (!req.body.nom || !req.body.lat || !req.body.long || !req.body.adminId || !req.body.id) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.updateCenter(req.body.id,req.body.nom, req.body.lat, req.body.long, req.body.adminId);

        res.json(data);


    },

    delete_center_api:  async function(req, res){ 

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.deleteCentre(req.body.id , req.body.adminId);

        res.json(data);


    },

    add_admin_api:async function(req, res){ 

        if (!req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId || !req.body.password || !req.body.dateNaissance || !req.body.tel  ) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.addAdmin(req.body.nom, req.body.prenom, req.body.pseudo,req.body.tel,req.body.password,req.body.cardId,req.body.email,req.body.dateNaissance);

        res.json(data);

    },

    update_admin_api:async function (req, res) {

        if (! req.body.id || !req.body.nom || !req.body.prenom || !req.body.pseudo || !req.body.email || !req.body.cardId || !req.body.password || !req.body.dateNaissance || !req.body.tel ) {


            res.json({
                status: 'ko',
                name: 'formdataRequired',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.addMedecin(req.body.id , req.body.nom, req.body.prenom, req.body.pseudo, req.body.tel, req.body.password, req.body.cardId, req.body.email, req.body.dateNaissance);

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


        var data = await sails.helpers.updatePassword(req.body.id , req.body.ancienmdp, req.body.nouveaumdp, "admin");

        res.json(data);
        
    },
    
    all_admin_api: async function(req, res){

        var data = await sails.helpers.allAdmin();

        res.json(data);
    },

    find_admin_by_id_api: async function(req,res){

         if (!req.body.id ) {


            res.json({
                status: 'ko',
                name: 'formDataRequired',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findAdminById(req.body.id);

        res.json(data);
    }








};

