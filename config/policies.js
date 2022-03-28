/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  admin:{
  
    'update_admin_api':['ApiAuthorized','isAdmin'],
    'all_admin_api':['ApiAuthorized','isAdmin'],
    'find_admin_by_id_api':['ApiAuthorized','isAdmin'],
    'update_password_api':['ApiAuthorized','isAdmin'],
    'add_admin_api':['ApiAuthorized','isAdmin'],

  },

  medecin:{

    'add_medecin_api':['ApiAuthorized','isAdminMedecin'],
    'update_medecin_api':['ApiAuthorized'],
    'update_password_api':['ApiAuthorized'],
    'all_medecin_api':['ApiAuthorized'],
    'find_medecin_by_id_api':['ApiAuthorized'],
    'find_medecin_by_centre_api':['ApiAuthorized'],
    'find_medecin_by_medecin_admin_api':['ApiAuthorized'],

  },

  medecinadmin:{

    'update_center_api':['ApiAuthorized'],
    'add_medecin_admin_api':['ApiAuthorized'],
    'update_medecin_admin_api':['ApiAuthorized'],
    'update_password_api':['ApiAuthorized'],
    'all_medecin_admin_api':['ApiAuthorized'],
    'find_medecin_admin_by_id_api':['ApiAuthorized'],
    'find_medecin_admin_by_centre_api':['ApiAuthorized'],



  },


  centre:{


    'add_center_api':['ApiAuthorized'],
    'update_center_api':['ApiAuthorized'],
    'delete_center_api':['ApiAuthorized'],
    'all_center_api':['ApiAuthorized'],
    'find_center_by_id_api':['ApiAuthorized'],



  },


  vaccin:{

    'add_vaccin_api':['ApiAuthorized'],
    'all_vaccin_api':['ApiAuthorized'],
    'find_vaccin_by_id_api':['ApiAuthorized'],
    'update_vaccin_api':['ApiAuthorized'],


  },


  vaccination:{

    'add_vaccination_api':['ApiAuthorized'],
    'all_vaccination_api':['ApiAuthorized'],
    'update_vaccination_api':['ApiAuthorized'],
    'find_vaccination_by_id_api':['ApiAuthorized'],
    'find_vaccination_by_medecin_api':['ApiAuthorized'],
    'find_vaccination_by_patient_api':['ApiAuthorized'],
    'find_vaccination_by_vaccin_api':['ApiAuthorized'],


  },

  patient:{

    'add_patient_api':['ApiAuthorized'],
    'update_patient_api':['ApiAuthorized'],
    'update_password_api':['ApiAuthorized'],
    'all_patient_api':['ApiAuthorized'],
    'find_patient_by_id_api':['ApiAuthorized'],
    'find_patient_by_medecin_api':['ApiAuthorized'],

  }









};
