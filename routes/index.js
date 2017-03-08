var express = require('express');
var router = express.Router();
var dbCollection = require('../include/initDB');
var helper = require('../include/helper');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});



/* API */
router.get('/login', function(req, res) {

    if(req.query.Name == 'Krishna' 
        && req.query.Password == 'Kumar') {
            req.session.auth = 1;
            result = {
                error: false,
                message: 'Welcome to restricted area'
            }
    }else{
        result = {
            error: true,
            message: 'Wrong user name or password'
         }
    }
        
        
    res.end(JSON.stringify(result));
    
});


router.get('/list', function(req, res) {
    console.log('auth',req.session.auth);
    var check = helper.isAuthorised(req);
    if(check.error){
        res.end(JSON.stringify(check));
        return;
    }
    result = {
        error : false,
        message : 'Task added',
        res : dbCollection.find()
    }
    

    res.end(JSON.stringify(result));

});

router.post('/new', function(req, res) {

    var check = helper.isAuthorised(req);
    if(check.error){
        res.end(JSON.stringify(check));
        return;
    }

    result = {
        error : false,
        message : 'Task added',
        res : dbCollection.insert({ name : req.body.name })
    }
    res.end(JSON.stringify(result));
});

router.delete('/remove', function(req, res) {

    var check = helper.isAuthorised(req);
    if(check.error){
        res.end(JSON.stringify(check));
        return;
    }


    dbCollection.removeWhere({$loki:req.query.id});

    result = {
        error : false,
        message: 'Task removed'
    }
    res.end(JSON.stringify(result));

});



router.put('/update', function(req, res) {

    var check = helper.isAuthorised(req);
    if(check.error){
        res.end(JSON.stringify(check));
        return;
    }


    dbCollection.updateWhere(
    function(obj) {
        return obj.$loki === req.query.id;
    },
    function(obj) {
        obj.name = req.query.name
        return  obj;
    });

    result = {
        error : false,
        message: 'Task updated'
    }
    res.end(JSON.stringify(result));

});








module.exports = router;
