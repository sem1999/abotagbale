/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/bfbzjbzefbejzefkk': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  //login api 

  'POST /api/v1/auth/login/admin': { controller: 'AdminController', action: 'login_api', csrf: false },
  'POST /api/v1/auth/login/patient': { controller: 'PatientController', action: 'login_api', csrf: false },
  'POST /api/v1/auth/login/patient/first/connexion': { controller: 'PatientController', action: 'first_connexion_api', csrf: false },
  'POST /api/v1/auth/login/medecin': { controller: 'MedecinController', action: 'login_api', csrf: false },
  'POST /api/v1/auth/login/admin/medecin': { controller: 'MedecinAdminController', action: 'login_api', csrf: false },

  'POST /api/v1/auth/update/medecin/password': { controller: 'MedecinController', action: 'update_password_api', csrf: false },
  'POST /api/v1/auth/update/admin/password': { controller: 'AdminController', action: 'update_password_api', csrf: false },
  'POST /api/v1/auth/update/admin/medecin/password': { controller: 'MedecinAdminController', action: 'update_password_api', csrf: false },
  'POST /api/v1/auth/update/patient/password': { controller: 'PatientController', action: 'update_password_api', csrf: false },




  //centre api

  'POST /api/v1/add/centre': { controller: 'CentreController', action: 'add_center_api', csrf: false },
  'POST /api/v1/update/centre': { controller: 'CentreController', action: 'update_center_api', csrf: false },
  'POST /api/v1/delete/centre': { controller: 'CentreController', action: 'delete_center_api', csrf: false },
  'POST /api/v1/all/centre': { controller: 'CentreController', action: 'all_center_api', csrf: false },
  'POST /api/v1/find/centre/by/id ': { controller: 'CentreController', action: 'find_center_by_id_api', csrf: false },



  //vaccin api

  'POST /api/v1/add/vaccin': { controller: 'VaccinController', action: 'add_vaccin_api', csrf: false },
  'POST /api/v1/all/vaccin': { controller: 'VaccinController', action: 'all_vaccin_api', csrf: false },
  'POST /api/v1/find/vaccin/by/id': { controller: 'VaccinController', action: 'find_vaccin_by_id_api', csrf: false },
  'POST /api/v1/update/vaccin': { controller: 'VaccinController', action: 'update_vaccin_api', csrf: false },
  //vaccination api

  'POST /api/v1/add/vaccination': { controller: 'VaccinationController', action: 'add_vaccination_api', csrf: false },
  'POST /api/v1/all/vaccination': { controller: 'VaccinationController', action: 'all_vaccination_api', csrf: false },
  'POST /api/v1/find/vaccination/by/id': { controller: 'VaccinationController', action: 'find_vaccination_by_id_api', csrf: false },
  'POST /api/v1/find/vaccination/by/medecin': { controller: 'VaccinationController', action: 'find_vaccination_by_medecin_api', csrf: false },
  'POST /api/v1/find/vaccination/by/patient': { controller: 'VaccinationController', action: 'find_vaccination_by_patient_api', csrf: false },
  'POST /api/v1/find/vaccination/by/vaccin': { controller: 'VaccinationController', action: 'find_vaccination_by_vaccin_api', csrf: false },

  // patient api

  'POST /api/v1/add/patient': { controller: 'PatientController', action: 'add_patient_api', csrf: false },
  'POST /api/v1/all/patient': { controller: 'PatientController', action: 'all_patient_api', csrf: false },
  'POST /api/v1/update/patient': { controller: 'PatientController', action: 'update_patient_api', csrf: false },
  'POST /api/v1/find/patient/by/id': { controller: 'PatientController', action: 'find_patient_by_id_api', csrf: false },
  'POST /api/v1/find/patient/by/medecin': { controller: 'PatientController', action: 'find_patient_by_medecin_api', csrf: false },


  // medecin api 

  'POST /api/v1/add/medecin': { controller: 'MedecinController', action: 'add_medecin_api', csrf: false },
  'POST /api/v1/all/medecin': { controller: 'MedecinController', action: 'all_medecin_api', csrf: false },
  'POST /api/v1/update/medecin': { controller: 'MedecinController', action: 'update_medecin_api', csrf: false },
  'POST /api/v1/find/medecin/by/id': { controller: 'MedecinController', action: 'find_medecin_by_id_api', csrf: false },
  'POST /api/v1/find/medecin/by/centre': { controller: 'MedecinController', action: 'find_medecin_by_centre_api', csrf: false },

  // medecin admin  api

  'POST /api/v1/add/admin/medecin': { controller: 'MedecinAdminController', action: 'add_medecin_admin_api', csrf: false },
  'POST /api/v1/update/admin/medecin': { controller: 'MedecinAdminController', action: 'update_medecin_admin_api', csrf: false },
  'POST /api/v1/all/admin/medecin': { controller: 'MedecinAdminController', action: 'all_medecin_admin_api', csrf: false },
  'POST /api/v1/find/admin/medecin/by/id': { controller: 'MedecinAdminController', action: 'find_medecin_admin_by_id_api', csrf: false },
  'POST /api/v1/find/admin/medecin/by/centre': { controller: 'MedecinAdminController', action: 'find_medecin_admin_by_centre_api', csrf: false },

  // admin api 

  'POST /api/v1/add/admin': { controller: 'AdminController', action: 'add_admin_api', csrf: false },
  'POST /api/v1/update/admin': { controller: 'AdminController', action: 'update_admin_api', csrf: false },
  'POST /api/v1/all/admin': { controller: 'AdminController', action: 'all_admin_api', csrf: false },
  'POST /api/v1/find/admin/by/id': { controller: 'AdminController', action: 'find_admin_by_id_api', csrf: false },








};
