/**
 * Service to generate JWT
 */
jwt = require('jsonwebtoken');

module.exports ={
	'sign': function(payload) {
		return jwt.sign({
			data: payload
		}, process.env.JW_SECRET_VARIABLE, {expiresIn: "30d" }) ;
	},
	'verify': function(token, callback) {
		jwt.verify(token,process.env.JW_SECRET_VARIABLE, callback);
	},

	'sign_api_key': function(payload) {
		return jwt.sign({
			data: payload
		}, process.env.JW_SECRET_VARIABLE) ;
	},

	'sign_hook_key': function(payload) {
		return jwt.sign({
			data: payload
		}, process.env.JW_SECRET_VARIABLE) ;
	},
};
