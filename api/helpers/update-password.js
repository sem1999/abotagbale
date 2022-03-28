


module.exports = {


  friendlyName: 'Update password',


  description: '',


  inputs: {

    id:{
      type : 'string',
      required: true,

    },

    omdp:{
      type : 'string',

      required: false,
    },

    nmdp:{
      type : 'string',
      required: true,
    },

    type:{
      type : 'string',
      required: true,
    }



  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {

    try {
      
      if(inputs.type = "admin"){

        data = await Admin.findOne({ id : inputs.id });
        if(!data){



        }else{

         compare =  bycrypt.compare(inputs.omdp, data.password );

         if(compare == 0){

          exits.success({status : 'ko', name:"passwordError", description : 'Mot de passe invalide  '})

         }else{

          data =   await Admin.update( inputs.id,
       
            { password:inputs.nmdp,  },
           
          );
      
          return  exits.success({status : 'ok', description : 'Mot de passe modifier  '}); 


         }

         
        }

      }

      if(inputs.type = "medecin"){

        data = await Medecin.findOne({ id : inputs.id });
        if(!data){



        }else{

         compare =  bycrypt.compare(inputs.omdp, data.password );

         if(compare == 0){

          exits.success({status : 'ko', name:"passwordError", description : 'Mot de passe invalide  '})

         }else{

          data =   await Admin.update( inputs.id,
       
            { password:inputs.nmdp,  },
           
          );
      
          return  exits.success({status : 'ok', description : 'Mot de passe modifier  '}); 


         }

         
        }

      }
      if(inputs.type = "admedecin"){

        data = await Medecin_admin.findOne({ id : inputs.id });
        if(!data){



        }else{

         compare =  bycrypt.compare(inputs.omdp, data.password );

         if(compare == 0){

          exits.success({status : 'ko', name:"passwordError", description : 'Mot de passe invalide  '})

         }else{

          data =   await Admin.update( inputs.id,
       
            { password:inputs.nmdp,  },
           
          );
      
          return  exits.success({status : 'ok', description : 'Mot de passe modifier  '}); 


         }

         
        }

      } if(inputs.type = "patient"){


        data = await Patient.findOne({ id : inputs.id });
        if(!data){

         exits.success({status : 'ko', name:"notFound", description : 'le patient est introuvable   '})

        }else{

         compare =  bycrypt.compare(inputs.omdp, data.password );

         if(compare == 0){

          exits.success({status : 'ko', name:"passwordError", description : 'Mot de passe invalide  '})

         }else{

          data = await Admin.update( inputs.id,
       
            { password:inputs.nmdp,  },
           
          );
      
          return  exits.success({status : 'ok', description : 'Mot de passe modifier  '}); 


         }

         
        }

      }
     
      
    } catch (error) {
      
    }
    
  }


};

