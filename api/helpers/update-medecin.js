module.exports = {


  friendlyName: 'Update Medecin',


  description: '',


  inputs: {
    id: { type: 'string', required: true, },
    nom: { type: 'string', required: true, },
    prenom: { type: 'string', required: true, },
    pseudo:{type: 'string', required: true,},
    tel: { type: 'string', required: true, },
    password:{ type: 'string', required: true, unique:true},
    card_id:{type: 'string',required:true} ,
    email:{type:'string', required: true,isEmail:true},
    date_naissance:{type:'string'},
    centre:{
      type:'string' , required:true
    },
    adminId:{
      type : 'string'
    }



  },


  exits: {

    success: {
      description: 'All done.',
    },
    internalError:{

      description:'Une erreur est survenue'
    },

  },


  fn: async function (inputs, exits) {
    
    try {


      data =   await Medecin.update( inputs.id,
       
        { email: inputs.email, nom: inputs.nom, prenom:inputs.prenom,pseudo:inputs.pseudo, password:inputs.password, tel:inputs.tel,card_id:inputs.card_id,date_naissance:inputs.date_naissance, centre : inputs.centre  },
       
      );
  
      return  exits.success({status : 'ok', description : 'Modification effectuer '});  
        
      } catch (error) {
  
        return exits.success({ status:'ko',
        name:'internalError',
        message:'Une erreur interne est survenue  ',
        trace:error,
        description:'Veuillez vérifier vos informations  '});
        
      }

  }


};

