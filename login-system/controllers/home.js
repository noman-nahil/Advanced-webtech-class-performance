const express 	= require('express');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	/*if(req.session.uname != ""){
		res.render('home/index', {name: 'noman', id:'123'});		
	}else{
		res.redirect('/login');
	}*/

	if(req.cookies['uname'] != null){
		res.render('home/index', {name: 'noman', id:'123'});		
	}else{
		res.redirect('/login');
	}
});


router.get('/userlist', (req, res)=>{

	if(req.cookies['uname'] != ""){
		/*var students = [
			['1', 'noman', 'abc@gmail.com', '1243'],
			['2', 'pqr', 'pqr@gmail.com', '1243'],
			['3', 'xyz', 'xyz@gmail.com', '1243']
		];*/
		//cconsole.log(req.session.studentlist);	

		//students.push(li);
		/*var userinfo = [];
		userinfo.push(newuser);*/
		res.render('home/userlist', {users:req.session.studentlist});		
	}else{
		res.redirect('/login');
	}
})

module.exports = router;
