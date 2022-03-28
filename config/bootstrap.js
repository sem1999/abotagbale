/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
   if (await Admin.count() > 0) {
     return;
   }
  
   await Admin.createEach([
     
     { email: 'akade@example.com', nom: 'Ryan ', prenom:'Dahl',pseudo:'ghostadmin', password:'silence3', tel:'22893413423', role:'admin',card_id:'222222222222',date_naissance:'1/2/2000'  },
    
   ]);
  

};
