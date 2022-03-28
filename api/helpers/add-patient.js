

module.exports = {


  friendlyName: 'Add Patient',


  description: '',


  inputs: {
    nom: { type: 'string', required: true, },
    prenom: { type: 'string', required: true, },
    pseudo:{type: 'string', required: true,},
    tel: { type: 'string', required: true, },
    card_id:{type: 'string',required:true} ,
    email:{type:'string', required: true,isEmail:true},
    date_naissance:{type:'string',},
    medecin : {type : 'string'}
  },


  exits: {

    success: {
      description: 'All done.',
    },
    internalError:{

      description:'Une erreur est survenue'
    },
    smsSenderError:{
      description:'Une erreur est survenue lors de l\'envoie du sms'
    }

  },


  fn: async function (inputs, exits) {
    var b = Math.floor(Math.random(100) * 1000) + 67827648;
    var code = Math.floor(Math.random(100) * 1000) + b;
   

    try {


      data =   await Patient.createEach([
       
        { email: inputs.email, nom: inputs.nom, prenom:inputs.prenom, pseudo:inputs.pseudo, password:"1234", tel:inputs.tel, card_id:inputs.card_id,date_naissance:inputs.date_naissance ,code_connection : code, medecin : inputs.medecin },
       
      ])
      .fetch()

      sms = sms.sendMessage(data[0].tel, 'Bienvenue sur Abotabgalé voici votre code de connexion : '+data[0].code_connection,'PAYZY');
      
      if(sms == 0 ){

        await Patient.destroy({ id : data[0].id});

        return exits.smsSenderError({ status:'ko',
        name:'smsSenderError',
        message:'Une erreur est survenue lors de l\'envoie du sms  ',
        description:'Veuillez recommencer l\'enregistrement ou contacter un admin  '});

      }else{

        return  exits.success(data[0]);
      }
        
        
      } catch (error) {
  
        return exits.internalError({ status:'ko',
        name:'internalError',
        message:'Une erreur interne est survenue  ',
        trace:error,
        description:'Veuillez vérifier vos informations  '});
        
      }
  }


};

