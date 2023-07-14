var express = require('express');
var router = express.Router();
const db = require('../bin/db')
/* GET users listing. */
router.get('/usersData', (req, res) => {
  const command = `select * from registration_users`;
  db.query(command, (err, results) => {
    if (err) {
      console.log(err);

    } else {
      res.json(results)
    }
  })
})


router.post('/updateUser', (req, res) => {
  var checkbox = req.body.checkbox
  var email = req.body.email
  var fullName = req.body.fullName
  var password = req.body.password
  var repeatPassword = req.body.repeatPassword
  var userName = req.body.userName
var id =req.body.id
  const command = `UPDATE registration_users SET fullName = '${fullName}', email= '${email}', checkbox= '${checkbox}', password= '${password}', repeatPassword= '${repeatPassword}', userName= '${userName}' WHERE id = '${id}'`;
  db.query(command, (err, results) => {
    if (err) {
      console.log(err);

    } else {
      res.json('results')
    }
  })
})

  router.post('/deleteUser',(req,res)=>{
    var id =req.body.id
    const command=`DELETE FROM registration_users WHERE id= '${id}'`;
    console.log(command);
    db.query(command,(err,results)=>{
      if(err){
        console.log(err);

      }else{
        res.json('delete')
      }
    })
    })

router.post('/registrationform', (req, res) => {
  console.log(req.body)
  console.log('aman');
  var checkbox = req.body.checkbox
  var email = req.body.email
  var fullName = req.body.fullName
  var password = req.body.password
  var repeatPassword = req.body.repeatPassword
  var userName = req.body.userName
  var command = `Insert into registration_users(fullName, password, repeatPassword, email, checkbox, userName) value('${fullName}','${password}','${repeatPassword}','${email}','${checkbox}','${userName}');`
  console.log(command);
  db.query(command, (err, results) => {

    if (err) {
      console.log(err);

    } else {
      res.json('results')
    }
  })
})


router.post('/loginform', (req, res) => {
  console.log(req.body)


  var email = req.body.email

  var password = req.body.password

  var command = `select * from registration_users where email='${email}' and password='${password}';`

  console.log(command);
  db.query(command, (err, results) => {

    if (err) {
      console.log(err);

    } else {
      res.json(results)
    }
  })
})



module.exports = router;
