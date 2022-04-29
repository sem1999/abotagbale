module.exports = {


  friendlyName: 'Add vaccination',


  description: '',


  inputs: {

    nbr_dose_prise:{type:'number', required: true},
    code_enrollement:{type:'string' , defaultsTo:' '},
    date_prise:{type:'string', required: true},
    date_expiration_prise:{type:'string', required: true},
    patient:{type:'number', required: true},
    medecin:{type:'number', required: true},
    vaccin:{type:'number', required: true},
    

  },


  exits: {

    success: {
      description: 'All done.',
    },

    internalError:{

      descrirption : "Une erreur est survenue "
    }

  },


  fn: async function (inputs, exits) {
    
    try {


      data =   await Vaccination.createEach([
       
        {nbr_dose_prise: inputs.nbr_dose_prise, code_enrollement : inputs.code_enrollement, date_prise : inputs.date_prise, date_expiration_prise: inputs.date_expiration_prise, patient: inputs.patient , medecin:inputs.medecin ,vaccin:inputs.vaccin },
       
      ])
      .fetch()
  
      return  exits.success({status:'ok', vaccination:data[0]});  
        
      } catch (error) {
  
        return exits.success({ status:'ko',
        name:'internalError',
        message:'Une erreur interne est survenue  ',
        trace:error,
        description:'Veuillez vérifier vos informations  '});

        
        
      }

  }


}