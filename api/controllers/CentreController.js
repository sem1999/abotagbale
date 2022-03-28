/**
 * CentreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {



    add_center_api: async function (req, res) {

        if (!req.body.nom || !req.body.lat || !req.body.long || !req.body.adminId) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.addCentre(req.body.nom, req.body.lat, req.body.long, req.body.adminId);

        res.json(data);

    },

    update_center_api: async function (req, res) {

        if (!req.body.nom || !req.body.lat || !req.body.long || !req.body.adminId || !req.body.id) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.updateCenter(req.body.id, req.body.nom, req.body.lat, req.body.long, req.body.adminId);

        res.json(data);


    },

    delete_center_api: async function (req, res) {

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        var data = await sails.helpers.deleteCentre(req.body.id, req.body.adminId);

        res.json(data);


    },

    all_center_api: async function (req, res) {

        var data = await sails.helpers.allCentre();

        res.json(data);
    },

    find_center_by_id_api: async function (req, res) {

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findCentreById(req.body.id);

        res.json(data);
    }




};

