

/**
 * @api {post} /api/v1/add/patient      Ajouter un patient
 * @apiVersion 1.0.0
 * @apiName Ajouter Patient
 * @apiGroup Patient
 *
 * @apiDescription Pour l'ajout d'un patient le medecin doit renseigner les in
 *  
 * 
 * 
 * 
 * @apiHeader {String} Authorization  token unique de l'utilisateur disponible quand l'utilisateur se log  .
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    nom    Represente le nom du patient
 * @apiParam (Body) {String}    prenom     Represente le prenom du patient 
 * @apiParam (Body) {String}    tel
 * @apiParam (Body) {String}    email
 * @apiParam (Body) {String}    cardId  
 * @apiParam (Body) {String}    medecin
 * @apiParam (Body) {String}    dateNaissance     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "nom": "BABA",
 *  "prenom": "TCHAO",
 *  "tel": "22893068270",
 *  "card_id": "557767777767657",
 *  "email": "baba@mail.com",
 *  "date_naissance": "20/03/1993",
 *  "medecin": 1
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} patient   

 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *   {
 * 
 *    status: 'ok'
 *    patient : {"pseudo": "baba",
 *   "createdAt": 1648280820835,
 *   "updatedAt": 1648280820835,
 *   "id": 5,
 *   "nom": "BABA",
 *   "prenom": "TCHAO",
 *   "tel": "22893068270",
 *   "password": "silence44",
 *   "role": "vaccinate",
 *   "card_id": "557767777767657",
 *   "email": "baba@mail.com",
 *   "code_connection": "465d3124-c698-4359-a10b-f5c00fe04baa",
 *   "date_naissance": "20/03/1993",
 *   "status": false,
 *   "medecin": 1}
 *   }
 * 
 *
 * @apiError AuthorizationFormat    Le Format est Authorization: Bearer [token].
 * @apiError AuthorizationHeader    Aucune Authorization trouver.
 * @apiError InvalidToken           token invalide .
 *  @apiError DataVerificationError  Les paramètres envoyés sont invalide.
 * @apiError internalError          Erreur survenue à l'enregistrement 
 * @apiError smsSenderError         Le message sms n'a pas été envoyé 
 * @apiError internalError          Erreur survenue à l'enregistrement 
 * 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "trace" : ""
 *       "message" : "Les paramètres envoyés sont invalide"
 *     }
 */



/**
 * @api {post} /api/v1/add/admin      Ajouter un admin
 * @apiVersion 1.0.0
 * @apiName Ajouter admin
 * @apiGroup Admin
 *
 * @apiDescription Pour l'ajout d'un admin 
 *  
 * 
 * 
 * 
 * @apiHeader {String} Authorization  le token unique de l'utilisateur disponible quand l'utilisateur se log  .
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    nom   
 * @apiParam (Body) {String}    prenom     
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    password
 * @apiParam (Body) {String}    tel
 * @apiParam (Body) {String}    email
 * @apiParam (Body) {String}    cardId  
 * @apiParam (Body) {String}    dateNaissance     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "pseudo": "baba",
 *  "nom": "BABA",
 *  "prenom": "TCHAO",
 *  "tel": "22893068270",
 *  "password": "silence44",
 *  "card_id": "557767777767657",
 *  "email": "baba@mail.com",
 *  "date_naissance": "20/03/1993",
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} admin    
 *
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *  {
 *    "status": "ok",
 *    "admin": { "pseudo": "baba",
 *   "createdAt": 1648280820835,
 *   "updatedAt": 1648280820835,
 *   "id": 5,
 *   "nom": "BABA",
 *   "prenom": "TCHAO",
 *   "tel": "22893068270",
 *   "password": "silence44",
 *   "role": "vaccinate",
 *   "card_id": "557767777767657",
 *   "email": "baba@mail.com",
 *   "code_connection": "465d3124-c698-4359-a10b-f5c00fe04baa",
 *   "date_naissance": "20/03/1993",
 *   "status": false,
 *  }
 *  
 *  }
 * 
 *
 * @apiError AuthorizationFormat    Le Format est Authorization: Bearer [token].
 * @apiError AuthorizationHeader    Aucune Authorization trouver.
 * @apiError InvalidToken           token invalide .
 *  @apiError DataVerificationError  Les paramètres envoyés sont invalide.
 * @apiError internalError          Erreur survenue à l'enregistrement 
 * @apiError internalError          Erreur survenue à l'enregistrement 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *        "trace": ""
 *       "message" : "Les paramètres envoyés sont invalide"
 *     }
 */


/**
* @api {post} /api/v1/add/medecin      Ajouter un medecin
* @apiVersion 1.0.0
* @apiName Ajouter Medecin
* @apiGroup Medecin
*
* @apiDescription Pour l'ajout d'un medecin 
*  
* 
* 
* 
* @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
* 
* @apiHeaderExample {json} Header-Exemple:
*     {
*       "Content-Type": "application/x-www-form-urlencoded",
*       "Authorization": "Bearer token",
*       "Accept": "application/json"
*     }
* 
* 
* @apiParam (Body) {String}    nom   
* @apiParam (Body) {String}    prenom     
* @apiParam (Body) {String}    pseudo  
* @apiParam (Body) {String}    password
* @apiParam (Body) {String}    tel
* @apiParam (Body) {String}    email
* @apiParam (Body) {String}    cardId  
* @apiParam (Body) {String}    medecin
* @apiParam (Body) {String}    dateNaissance    
  @apiParam (Body) {String}    medecin 
  @apiParam (Body) {String}    centre 
* s
* @apiParamExample {json} Body-Exemple:
* 
*     
* {
*  "pseudo": "baba",
*  "nom": "BABA",
*  "prenom": "TCHAO",
*  "tel": "22893068270",
*  "password": "silence44",
*  "card_id": "557767777767657",
*  "email": "baba@mail.com",
*  "date_naissance": "20/03/1993",
*  "medecin": 1
*  "centre":1
*  }
*
* 
* 
* 
* 
* @apiSuccess {String} status       
* @apiSuccess {String} medecin    
*
* 
* 
* 
* 
* @apiSuccessExample {json} Reponse de succès :
*     HTTP/1.1 200 OK
*  {
    status:'ok',
    medecin:{"pseudo": "baba",
*   "createdAt": 1648280820835,
*   "updatedAt": 1648280820835,
*   "id": 5,
*   "nom": "BABA",
*   "prenom": "TCHAO",
*   "tel": "22893068270",
*   "password": "silence44",
*   "role": "vaccinate",
*   "card_id": "557767777767657",
*   "email": "baba@mail.com",
*   "date_naissance": "20/03/1993",
*   "status": "ok",
*   "medecin_admin": "1"
*   "centre":"1"}
*   
*  }
* 
*
* @apiError AuthorizationFormat    Le Format est Authorization: Bearer [token].
* @apiError AuthorizationHeader    Aucune Authorization trouver.
* @apiError InvalidToken           token invalide .
* @apiError DataVerificationError  Les paramètres envoyés sont invalide.
 *@apiError internalError          Erreur survenue à l'enregistrement 
* 
* 
* @apiError (Error 5xx) InternalError Service   indisponible .
* 
* @apiErrorExample {json} Exemple reponse d'échec :
*
*     HTTP/1.1 200 
*     {
*       "status": "ko",
*       "name": "DataVerificationError",
*       "trace": ""
*       "message" : "Les paramètres envoyés sont invalide"
*     }
*/


/**
* @api {post} /api/v1/add/admin/medecin      Ajouter un Medecin admin
* @apiVersion 1.0.0
* @apiName Ajouter Medecin Admin
* @apiGroup Admin_medecin
*
* @apiDescription Pour l'ajout d'un medecin admin 
*  
* 
* 
* 
* @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
* 
* @apiHeaderExample {json} Header-Exemple:
*     {
*       "Content-Type": "application/x-www-form-urlencoded",
*       "Authorization": "Bearer token",
*       "Accept": "application/json"
*     }
* 
* 
* @apiParam (Body) {String}    nom   
* @apiParam (Body) {String}    prenom     
* @apiParam (Body) {String}    pseudo  
* @apiParam (Body) {String}    password
* @apiParam (Body) {String}    tel
* @apiParam (Body) {String}    email
* @apiParam (Body) {String}    pseudo
* @apiParam (Body) {String}    cardId  
* @apiParam (Body) {String}    centre
* @apiParam (Body) {String}    dateNaissance     
* 
* @apiParamExample {json} Body-Exemple:
* 
*     
* {
*  "pseudo": "baba",
*  "nom": "BABA",
*  "prenom": "TCHAO",
*  "tel": "22893068270",
*  "password": "silence44",
*  "card_id": "557767777767657",
*  "email": "baba@mail.com",
*  "date_naissance": "20/03/1993",
*  "centre": "2"
*  }
*
* 
* 
* 
* 
* @apiSuccess {String} status       
* @apiSuccess {String} medecin  

* 
* 
* 
* 
* @apiSuccessExample {json} Reponse de succès :
*     HTTP/1.1 200 OK
*     {
*     status:'ok',
*     medecin:{"pseudo": "baba",
*   "createdAt": 1648280820835,
*   "updatedAt": 1648280820835,
*   "id": 5,
*   "nom": "BABA",
*   "prenom": "TCHAO",
*   "tel": "22893068270",
*   "password": "silence44",
*   "role": "vaccinate",
*   "card_id": "557767777767657",
*   "email": "baba@mail.com",
*   "code_connection": "465d3124-c698-4359-a10b-f5c00fe04baa",
*   "date_naissance": "20/03/1993",
*   "status": false,
*   "medecin": 1}
*}
* 
*
* @apiError AuthorizationFormat    Le Format est Authorization: Bearer [token].
* @apiError AuthorizationHeader    Aucune Authorization trouver.
* @apiError InvalidToken           token invalide .
* @apiError DataVerificationError  Les paramètres envoyés sont invalide.
* @apiError internalError          Erreur survenue à l'enregistrement 
* 
* 
* @apiError (Error 5xx) InternalError Service   indisponible .
* 
* @apiErrorExample {json} Exemple reponse d'échec :
*     HTTP/1.1 200 
*     {
*       "status": "ko",
*       "name": "DataVerificationError",
*       "message" : "Les paramètres envoyés sont invalide"
*     }
*/






/**
 * @api {post} /api/v1/auth/login/admin     Connecter un admin
 * @apiVersion 1.0.0
 * @apiName Connecter un admin
 * @apiGroup Auth
 *
 * @apiDescription Pour vérifier l'identité d'un utilisateur admin
 *  
 * 
 * 
 * 
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *      
 *       "Accept": "application/json"
 *     }
 * 
 * 
 *   
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    password
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "pseudo": "baba",
 *  
 *  "password": "silence44",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} user    
 * @apiSuccess {String} token
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "ok",
 *   "user": "12",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI"
 * }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/login/patient     Connecter un patient
 * @apiVersion 1.0.0
 * @apiName Connecter un patient
 * @apiGroup Auth
 *
 * @apiDescription Pour vérifier l'identité d'un utilisateur patient 
 *  
 * 
 * 
 * 
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *      
 *       "Accept": "application/json"
 *     }
 * 
 * 
 *   
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    password
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "pseudo": "baba",
 *  
 *  "password": "silence44",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} user    
 * @apiSuccess {String} token
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "ok",
 *   "user": "12",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI"
 * }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/login/medecin     Connecter un medecin
 * @apiVersion 1.0.0
 * @apiName Connecter un medecin
 * @apiGroup Auth
 *
 * @apiDescription Pour vérifier l'identité d'un utilisateur medecin 
 *  
 * 
 * 
 * 
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *      
 *       "Accept": "application/json"
 *     }
 * 
 * 
 *   
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    password
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "pseudo": "baba",
 *  
 *  "password": "silence44",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} user    
 * @apiSuccess {String} token
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "ok",
 *   "user": "12",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI"
 * }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/login/admin/medecin    Connecter un admin medecin
 * @apiVersion 1.0.0
 * @apiName Connecter un admin medecin
 * @apiGroup Auth
 *
 * @apiDescription Pour vérifier l'identité d'un utilisateur admin medecin 
 *  
 * 
 * 
 * 
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *      
 *       "Accept": "application/json"
 *     }
 * 
 * 
 *   
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    password
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "pseudo": "baba",
 *  
 *  "password": "silence44",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} user    
 * @apiSuccess {String} token
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "ok",
 *   "user": "12",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI"
 * }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/login/medecin     Connecter un medecin
 * @apiVersion 1.0.0
 * @apiName Connecter un medecin
 * @apiGroup Auth
 *
 * @apiDescription Pour vérifier l'identité d'un utilisateur medecin 
 *  
 * 
 * 
 * 
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *      
 *       "Accept": "application/json"
 *     }
 * 
 * 
 *   
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    password
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "pseudo": "baba",
 *  
 *  "password": "silence44",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} user    
 * @apiSuccess {String} token
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *     {
 *   "status": "ok",
 *   "user": "12",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI"
 * }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/login/patient/first/connexion    Connecter patient pour la première fois 
 * @apiVersion 1.0.0
 * @apiName Connecter un patient pour la prmière fois 
 * @apiGroup Auth
 *
 * @apiDescription Pour vérifier l'identité d'un utilisateur patient 
 *  
 * 
 * 
 * 
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 *   
 * @apiParam (Body) {String}    code  
 * 
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  
 *  
 *  "code": "465d3124-c698-4359-a10b-f5c00fe04baa",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} user    
 * @apiSuccess {String} token
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *     {
 *          "status": "ok",
 *          "user": "12",
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI"
 *     }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */


/**
 * @api {post} /api/v1/add/centre   Ajouter un centre
 * @apiVersion 1.0.0
 * @apiName Ajouter un  centre 
 * @apiGroup Centre
 *
 * @apiDescription Ajout d'un centre dans la base de données  
 *  
 * 
 * 
 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 *   
 * @apiParam (Body) {String}    lat  
 * @apiParam (Body) {String}    long
 * @apiParam (Body) {String}    nom
 * @apiParam (Body) {String}    adminId
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 * 
 * 
 *  "status": "ok"
 *  "id":"1"
 *  "nom": "nom",
 *  "lat": "lat",
 *  "long": "long",
 *  "adminId": "admin",
 *  
 *   
 *
 *  }
 *
 * 
 * 
 * 
 * 
 *
 * @apiSuccess  {String}    centre
 * @apiSuccess  {String}    status
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 *     HTTP/1.1 200 OK
 *   {
 *   
 *    "status": "ok",
 *    "centre":{
 *    "id":"1"
 *    "nom": "nom",
 *    "lat": "lat",
 *    "long": "long",
 *    "adminId": "admin",
 * }
 *    
 *    
 *   }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */


/**
 * @api {post} /api/v1/update/centre   Modifier un centre 
 * @apiVersion 1.0.0
 * @apiName Modifier un  centre 
 * @apiGroup Centre
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *
 * 
 *
 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 *   
 * @apiParam (Body) {String}    lat  
 * @apiParam (Body) {String}    long
 * @apiParam (Body) {String}    nom
 * @apiParam (Body) {String}    adminId
 * @apiParam (Body) {String}    id
 *   
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  
 *  "id":"1"
 *  "nom": "nom",
 *  "lat": "lat",
 *  "long": "long",
 *  "adminId": "admin",
 *  
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "Centre modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/update/admin   Modifier un admin
 * @apiVersion 1.0.0
 * @apiName Modifier un  admin
 * @apiGroup Admin
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    nom   
 * @apiParam (Body) {String}    prenom     
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    tel
 * @apiParam (Body) {String}    email
 * @apiParam (Body) {String}    cardId  
 * @apiParam (Body) {String}    dateNaissance     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "pseudo": "baba",
 *  "nom": "BABA",
 *  "prenom": "TCHAO",
 *  "tel": "22893068270",
 *  "card_id": "557767777767657",
 *  "email": "baba@mail.com",
 *  "date_naissance": "20/03/1993",
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "Admin modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */


/**
 * @api {post} /api/v1/update/medecin   Modifier un medecin
 * @apiVersion 1.0.0
 * @apiName Modifier un  medecin
 * @apiGroup Medecin
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    nom   
 * @apiParam (Body) {String}    prenom     
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    tel
 * @apiParam (Body) {String}    email
 * @apiParam (Body) {String}    cardId  
 * @apiParam (Body) {String}    dateNaissance     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "pseudo": "baba",
 *  "nom": "BABA",
 *  "prenom": "TCHAO",
 *  "tel": "22893068270",
 *  "card_id": "557767777767657",
 *  "email": "baba@mail.com",
 *  "date_naissance": "20/03/1993",
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "Medecin modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/update/admin/medecin   Modifier un admin
 * @apiVersion 1.0.0
 * @apiName Modifier un  admin medecin 
 * @apiGroup Admin_medecin
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    nom   
 * @apiParam (Body) {String}    prenom     
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    tel
 * @apiParam (Body) {String}    email
 * @apiParam (Body) {String}    cardId  
 * @apiParam (Body) {String}    dateNaissance     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "pseudo": "baba",
 *  "nom": "BABA",
 *  "prenom": "TCHAO",
 *  "tel": "22893068270",
 *  "card_id": "557767777767657",
 *  "email": "baba@mail.com",
 *  "date_naissance": "20/03/1993",
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "Admin medecin modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */


/**
 * @api {post} /api/v1/update/patient   Modifier un patient
 * @apiVersion 1.0.0
 * @apiName Modifier un  patient
 * @apiGroup Patient
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    nom   
 * @apiParam (Body) {String}    prenom     
 * @apiParam (Body) {String}    pseudo  
 * @apiParam (Body) {String}    tel
 * @apiParam (Body) {String}    email
 * @apiParam (Body) {String}    cardId  
 * @apiParam (Body) {String}    dateNaissance     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "pseudo": "baba",
 *  "nom": "BABA",
 *  "prenom": "TCHAO",
 *  "tel": "22893068270",
 *  "card_id": "557767777767657",
 *  "email": "baba@mail.com",
 *  "date_naissance": "20/03/1993",
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "Patient modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */


/**
 * @api {post} /api/v1/auth/update/medecin/password   Modifier mot de passe d'un medecin
 * @apiVersion 1.0.0
 * @apiName Modifier mot de passe d'un  medecin 
 * @apiGroup Medecin
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    ancienmdp   
 * @apiParam (Body) {String}    nouveaumdp     
     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "ancienmdp": "baba",
 *  "nouveaumdp": "BABA",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "mot de passe modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */



/**
 * @api {post} /api/v1/auth/update/admin/password   Modifier mot de passe d'un admin
 * @apiVersion 1.0.0
 * @apiName Modifier mot de passe d'un  admin 
 * @apiGroup Admin
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    ancienmdp   
 * @apiParam (Body) {String}    nouveaumdp     
     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "ancienmdp": "baba",
 *  "nouveaumdp": "BABA",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "mot de passe modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/update/patient/password   Modifier mot de passe d'un patient
 * @apiVersion 1.0.0
 * @apiName Modifier mot de passe d'un  patient 
 * @apiGroup Patient
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    ancienmdp   
 * @apiParam (Body) {String}    nouveaumdp     
     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "ancienmdp": "baba",
 *  "nouveaumdp": "BABA",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "mot de passe modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/update/admin/password   Modifier mot de passe d'un admin
 * @apiVersion 1.0.0
 * @apiName Modifier mot de passe d'un  admin 
 * @apiGroup Admin
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    ancienmdp   
 * @apiParam (Body) {String}    nouveaumdp     
     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "ancienmdp": "baba",
 *  "nouveaumdp": "BABA",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "mot de passe modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */

/**
 * @api {post} /api/v1/auth/update/admin/medecin/password   Modifier mot de passe d'un admin medecin
 * @apiVersion 1.0.0
 * @apiName Modifier mot de passe d'un  admin medecin 
 * @apiGroup Admin_medecin
 *
 * @apiDescription Pour actualiser les informations d'une application 
 *  
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiParam (Body) {String}    id  
 * @apiParam (Body) {String}    ancienmdp   
 * @apiParam (Body) {String}    nouveaumdp     
     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *  "ancienmdp": "baba",
 *  "nouveaumdp": "BABA",
 *
 *  }
 *
 * 
 * 
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} description   
 * 
 * 
 * 
 * 
 * 
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "description : "mot de passe modifier avec succès "
 *    }
 * 
 *
 * @apiError DataVerificationError  Les paramètres envoyés sont invalides.
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "DataVerificationError",
 *       "message" : "Les paramètres envoyés sont invalides"
 *     }
 */


/**
 * @api {post} /api/v1/all/medecin  Afficher tous les medecins
 * @apiVersion 1.0.0
 * @apiName Affiche medecin 
 * @apiGroup Medecin
 *
 * @apiDescription Pour afficher  les informations des medecins
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} medecins   
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "medecins : [{}]
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */

/**
 * @api {post} /api/v1/all/patient  Afficher tous les patients
 * @apiVersion 1.0.0
 * @apiName Affiche patients 
 * @apiGroup Patient
 *
 * @apiDescription Pour afficher  les informations des patients
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} patients   
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "patients : [{}]
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */

/**
 * @api {post} /api/v1/all/admin/medecin  Afficher tous les medecins admin
 * @apiVersion 1.0.0
 * @apiName Affiche medecin admin
 * @apiGroup Medecin_admin
 *
 * @apiDescription Pour afficher  les informations des medecins admin
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} medecins   
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "medecins : [{}]
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */


/**
 * @api {post} /api/v1/all/admin/  Afficher tous les  admins
 * @apiVersion 1.0.0
 * @apiName Affiche admin
 * @apiGroup Admin
 *
 * @apiDescription Pour afficher les informations des  admin
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} admins   
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "admins : [{}]
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */

/**
 * @api {post} /api/v1/all/vaccin  Afficher tous les vaccins
 * @apiVersion 1.0.0
 * @apiName Affiche vaccins
 * @apiGroup Vaccin
 *
 * @apiDescription Pour afficher  les informations des vaccins
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} vaccins   
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "vaccins : [{}]
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */


/**
 * @api {post} /api/v1/all/vaccination  Afficher tous les vaccinations
 * @apiVersion 1.0.0
 * @apiName Affiche vaccinations
 * @apiGroup Vaccin
 *
 * @apiDescription Pour afficher  les informations des vaccinations
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} vaccinations   
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "vaccinations : [{}]
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */

/**
 * @api {post} /api/v1/find/vaccination/by/id  Afficher une vaccination en particulier 
 * @apiVersion 1.0.0
 * @apiName Affiche vaccination
 * @apiGroup Vaccination
 *
 * @apiDescription Pour afficher  les informations d'une  vaccination par son id
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * @apiParam (Body) {String}    id     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *
 *  }
 *
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} vaccination  
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "vaccination : {}
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */

/**
 * @api {post} /api/v1/find/vaccin/by/id  Afficher un vaccin en particulier 
 * @apiVersion 1.0.0
 * @apiName Affiche vaccin
 * @apiGroup Vaccin
 *
 * @apiDescription Pour afficher  les informations d'un  vaccin par son id
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * @apiParam (Body) {String}    id     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 * {
 *  "id":1
 *
 *  }
 *
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} vaccin  
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "vaccin: {}
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */


/**
 * @api {post} /api/v1/find/patient/by/id  Afficher un patient en particulier 
 * @apiVersion 1.0.0
 * @apiName Affiche patient
 * @apiGroup Patient
 *
 * @apiDescription Pour afficher  les informations d'un  patient par son id
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * @apiParam (Body) {String}    id     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 *  {
 *    
 *    "id":1
 *
 *  }
 *
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} vaccin  
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "patient: {}
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */


/**
 * @api {post} /api/v1/find/medecin/by/id  Afficher un medecin en particulier 
 * @apiVersion 1.0.0
 * @apiName Affiche medecin
 * @apiGroup Medecin
 *
 * @apiDescription Pour afficher  les informations d'un  medecin par son id
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * @apiParam (Body) {String}    id     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 *  {
 *    
 *    "id":1
 *
 *  }
 *
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} medecin  
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "medecin: {}
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */


/**
 * @api {post} /api/v1/find/admin/by/id  Afficher un admin en particulier 
 * @apiVersion 1.0.0
 * @apiName Affiche admin
 * @apiGroup Admin
 *
 * @apiDescription Pour afficher  les informations d'un  admin par son id
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 * 
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * @apiParam (Body) {String}    id     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 *  {
 *    
 *    "id":1
 *
 *  }
 *
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} admin  
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "admin: {}
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */

/**
 * @api {post} /api/v1/find/admin/medecin/by/id  Afficher un medecin admin en particulier 
 * @apiVersion 1.0.0
 * @apiName Affiche medecin admin
 * @apiGroup Medecin_admin
 *
 * @apiDescription Pour afficher  les informations d'un  medecin admin par son id
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * @apiParam (Body) {String}    id     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 *  {
 *    
 *    "id":1
 *
 *  }
 *
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} medecin  
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "medecin: {}
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */

/**
 * @api {post} /api/v1/find/centre/by/id  Afficher un centre en particulier 
 * @apiVersion 1.0.0
 * @apiName Affiche centre
 * @apiGroup Centre
 *
 * @apiDescription Pour afficher  les informations d'un  centre par son id
 * 
 * 
 * 
 *

 * @apiHeader {String} Authorization  Token unique de l'utilisateur disponible quand l'utilisateur se log  .
 *
 * 
 * @apiHeaderExample {json} Header-Exemple:
 *     {
 *       "Content-Type": "application/x-www-form-urlencoded",
 *       "Authorization": "Bearer token",
 *       "Accept": "application/json"
 *     }
 * 
 * @apiParam (Body) {String}    id     
 * 
 * @apiParamExample {json} Body-Exemple:
 * 
 *     
 *  {
 *    
 *    "id":1
 *
 *  }
 *
 * 
 * @apiSuccess {String} status       
 * @apiSuccess {String} centre  
 * 
 * @apiSuccessExample {json} Reponse de succès :
 * 
 *     HTTP/1.1 200 OK
 *
 *    {
 *      "status": "ok",
 *      "centre: {}
 *    }
 * 
 *
 * @apiError internalError  Une erreur est survenue à la recupération des données 
 * 
 * 
 * @apiError (Error 5xx) InternalError Service   indisponible .
 * 
 * @apiErrorExample {json} Exemple reponse d'échec :
 *     HTTP/1.1 200 
 *     {
 *       "status": "ko",
 *       "name": "internalError",
 *       "trace":""
 *       "message" : ""
 *     }
 */













