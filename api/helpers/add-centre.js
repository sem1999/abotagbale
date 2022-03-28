module.exports = {


  friendlyName: 'Add centre',


  description: 'helper to add center in the systems ',


  inputs: {

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

    url = uuidToken.create();

    try {


    data =   await Centre.createEach([
     
      { nom: inputs.nom, lat: inputs.lat , long: inputs.long , admin:parseInt(inputs.adminId), url:''+url.uuid},
     
    ])
    .fetch()

    return  exits.success(data);  
      
    } catch (error) {

      return exits.internalError({ status:'ko',
      name:'internalError',
      message:'Une erreur interne est survenue  ',
      trace:error,
      description:'Veuillez vérifier vos informations  '});
      
    }

      
      

      
     
     

    
      
    

      
      
    

   

  }


};

