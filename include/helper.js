module.exports = {
    isAuthorised: function(req){

        result = {
            error: true,
            message: 'You are not authorised to see this resource'
        } 

        if(req.session.auth)
                    result = {
                        error: false,
                        message: ''
                    };
    
        return result;  
    }
}