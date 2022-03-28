const uuidAPIKey = require('uuid-apikey');

module.exports ={

    'checkapi':function(api){
        return uuidAPIKey.isAPIKey(api);
    },

    'getApikey':function(uuid){
      return  uuidAPIKey.toAPIKey(uuid, { 'noDashes': true });
    },

    'getUuid':function(api){
        return uuidAPIKey.toUUID(api);
    },


    'verify':function(api,uuid){

        return uuidAPIKey.check(api, uuid);
    },

    'create':function(){
        return uuidAPIKey.create({ 'noDashes': true });
    }



}