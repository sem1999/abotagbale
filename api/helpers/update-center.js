module.exports = {


  friendlyName: 'Update centre',


  description: 'helper to update center in the systems ',


  inputs: {

    id:{

      type:"string",

      description:"id du centre ",

      required:true

    },

    nom:{

      type:"string",

      description:"Nom du centre ",

      required:true

    },

    lat:{


      type:"string",

      description:"latitude du centre ",

      required:true
    },

    long:{

      type:"string",

      description:"Longitude du centre  ",

      required:true

    },


    adminId:{ 
      
      type:'number',

      description:"L\'administrateur qui crée le centre  ",

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

    uniqueError:{
      description:'Le centre exite déjà'

    }

  },


  fn: async function (inputs,exits) {

   

    try {


    data =   await Centre.update( parseInt(inputs.id),
     
      { nom: inputs.nom, lat: inputs.lat , long: inputs.long , admin:inputs.admin},
     
    );

    return  exits.success({status:'ok', description: 'Le centre à été modifier '});  
      
    } catch (error) {

      return exits.internalError({ status:'ko',
      name:'internalError',
      message:'Une erreur interne est survenue  ',
      description:'Veuillez vérifier vos informations  '});
      
    }

      
      

      
     
     

    
      
    

      
      
    

   

  }


};

