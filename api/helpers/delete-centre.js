module.exports = {


  friendlyName: 'Delete centre',


  description: '',


  inputs: {

    id:{

      type:"string",

      description:"id du centre ",

      required:true

    },

    adminId:{
      type:"number",

      description:"id du centre ",

      required:true
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

      await Centre.destroy({id :parseInt(inputs.id)});

      exits.success({status:'ok', description:'Centre suprimmer avec succes '})

    } catch (error) {

      return exits.internalError({ status:'ko',
      name:'internalError',
      message:'Une erreur interne est survenue  ',
      description:'Veuillez vérifier vos informations  '});
    }
   
    
    
  }


};

