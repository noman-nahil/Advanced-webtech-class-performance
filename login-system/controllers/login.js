const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	//console.log(req.body.username);
	//console.log(req.body.password);

	if((req.body.username == req.body.password) && req.body.username!="" ) {

		//var user = ([req.body.username],[req.body.username])
		res.cookie('uname', req.body.username);
		req.session.studentlist = [];
		res.redirect('/home');

	}else{
		res.redirect('/login');
	}
}); 


module.exports = router;



