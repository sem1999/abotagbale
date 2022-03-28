var CryptoJS = require("crypto-js");

module.exports ={


'crypt':function(text){
    return CryptoJS.AES.encrypt(text, process.env.JW_SECRET_VARIABLE).toString();
},
'decrypt':function(hash){
    return  CryptoJS.AES.decrypt(hash, process.env.JW_SECRET_VARIABLE);
},

'original':function(decrypt){
    return decrypt.toString(CryptoJS.enc.Utf8);
}

}