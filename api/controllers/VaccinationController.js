/**
 * VaccinationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    add_vaccination_api: async function (req, res) {

        if (!req.body.dosePrise || !req.body.code_enrollement || !req.body.datePrise || !req.body.dateExpirationPrise || !req.body.patient || !req.body.patient || !req.body.medecin || !req.body.vaccin) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        data = await sails.helpers.addVacccination(req.body.dosePrise, req.body.code_enrollement, req.body.datePrise, req.body.dateExpirationPrise, req.body.patient, req.body.patient, req.body.medecin, req.body.vaccin);

        res.json(data);


    },

    all_vaccination_api: async function (req, res) {

        var data = await sails.helpers.allVaccination();

        res.json(data);
    },

    update_vaccination_api: async function (req, res) {

        if (!req.body.dosePrise || !req.body.code_enrollement || !req.body.datePrise || !req.body.dateExpirationPrise || !req.body.patient || !req.body.patient || !req.body.medecin || !req.body.vaccin) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });

        }

        data = await sails.helpers.addVacccination(req.body.dosePrise, req.body.code_enrollement, req.body.datePrise, req.body.dateExpirationPrise, req.body.patient, req.body.patient, req.body.medecin, req.body.vaccin);

        res.json(data);

    },

    find_vaccination_by_id_api: async function (req, res) {

        if (!req.body.id) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findVaccinationById(req.body.id);

        res.json(data);
    },

    find_vaccination_by_medecin_api: async function (req, res) {

        if (!req.body.medecinId) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findVaccinationByMedecin(req.body.medecinId);

        res.json(data);
    },

    find_vaccination_by_patient_api: async function (req, res) {

        if (!req.body.patientId) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findPatientById(req.body.patientId);

        res.json(data);
    },

    find_vaccination_by_vaccin_api: async function (req, res) {

        if (!req.body.vaccinId) {


            res.json({
                status: 'ko',
                name: 'DataVerificationError',
                message: 'Veuillez renseigner les données  svp'
            });


        }

        var data = await sails.helpers.findPatientById(req.body.vaccinId);

        res.json(data);
    },


};

