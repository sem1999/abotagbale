/**
 * VaccinController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {



    add_vaccin_api: async function (req, res) {

        data = req.body.maladie,
            sails.log.error(req.body);

        if (!req.body.libelle || !req.body.maladie || !req.body.description || !req.body.doseRcmd || !req.body.codeVaccin || !req.body.dateExpiration) {

            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        } else {

            var data = await sails.helpers.addVaccin(req.body.libelle, req.body.maladie, req.body.description, req.body.doseRcmd, req.body.codeVaccin, req.body.dateExpiration);

            res.json(data);
        }



    },

    all_vaccin_api: async function (req, res) {

        var data = await sails.helpers.allVaccin();

        res.json(data);
    },

    find_vaccin_by_id_api: async function (req, res) {

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findVaccinById(req.body.id);

        res.json(data);
    },

    update_vaccin_api: async function (req, res) {

        data = req.body.maladie,
            sails.log.error(req.body);

        if (!req.body.id || !req.body.libelle || !req.body.maladie || !req.body.description || !req.body.doseRcmd || !req.body.codeVaccin || !req.body.dateExpiration) {

            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        } else {

            var data = await sails.helpers.updateVaccin(req.body.id, req.body.libelle, req.body.maladie, req.body.description, req.body.doseRcmd, req.body.codeVaccin, req.body.dateExpiration);

            res.json(data);
        }



    },



};

