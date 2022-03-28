module.exports = {


  friendlyName: 'Add admin',


  description: '',


  inputs: {

    nom: { type: 'string', required: true, },
    prenom: { type: 'string', required: true, },
    pseudo:{type: 'string', required: true,},
    tel: { type: 'string', required: true, },
    password:{ type: 'string', required: true, unique:true},
    card_id:{type: 'string',required:true} ,
    email:{type:'string', required: true,isEmail:true},
    date_naissance:{type:'string',},

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


      data =   await Admin.createEach([
       
        { email: inputs.email, nom: inputs.nom, prenom:inputs.prenom,pseudo:inputs.pseudo, password:inputs.password, tel:inputs.tel,card_id:inputs.card_id,date_naissance:inputs.date_naissance  },
       
      ])
      .fetch()
  
      return  exits.success({status : 'ok' , admin : data[0], message: 'admin bien ajouter'});  
        
      } catch (error) {
  
        return exits.success({ status:'ko',
        name:'internalError',
        message:'Une erreur interne est survenue  ',
        trace:error,
        description:'Veuillez vérifier vos informations  '});
        
      }

  }


};

