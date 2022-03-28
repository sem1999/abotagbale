module.exports = function(req, res, next) {

	var token;
	//Check if authorization header is present
	if(req.headers && req.headers.authorization) {
		//authorization header is present
		var parts = req.headers.authorization.split(' ');
		if(parts.length == 2) {
			var scheme = parts[0];
			var credentials = parts[1];
			
			if(/^Bearer$/i.test(scheme)) {
				token = credentials;
			}
		} else {
			

			res.status(401).json({
				status:'ko',
				name: 'AuthorizationFormat', 
				message: ' Format is Authorization: Bearer [token]'
			});
			return;
		}
	} else {
		
		//authorization header is not present

		res.status(401).json({
				 status:'ko',
				 name: 'AuthorizationHeader',
				 message: 'No Authorization header was found'	
					})
			
			return;
	}
	jwToken.verify(token, function(err, decoded) {
		if(err) {
			
			res.status(401).json({
				status:'ko',
				name: 'InvalidToken',
				message: 'Invalid token'
			})
			
			return;
			
		}
		//req.user = decoded;

        if(decoded.role == 'admedecin'){

            next();

        }else{

            res.status(401).json({
				status:'ko',
				name: 'NotAuthorised',
				message: 'You are not authorised to do this task '
			})
			
			return;
        }
		
	});
};