let users = [
    {
        id: 1,
        name: "Mihai",
        email: "mihai.gheorghe@csie.ase.ro",
        password: "Mihai1!"
    },
    {
        id: 2,
        name: "Elena",
        email: "elena@gmail.com",
        password: "Elena1!"
    },
]

//server app
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const port = 3000;

const fs = require('fs')

const bcrypt = require('bcrypt');
const saltRounds = 10;

let jwt = require('jsonwebtoken');

const privateKey = fs.readFileSync('private.key');
const publicKey = fs.readFileSync('public.key');

app.use(logger('dev'));
app.use(cors()) //see more at https://www.npmjs.com/package/cors
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) //we expect JSON data to be sent as payloads

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/register', (req, res) => {
  let user = req.body
  console.log('trying to post the following data: ', user)

  const filteredUsers = users.filter(function(dbUser) {
    return dbUser.email === user.email
  })

  if (filteredUsers.length) {
    res.send('This user already exits')
  } else {
    
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        user.password = hash
        user.id = users[users.length - 1].id + 1
        users.push(user)
        console.log('DB has been updated: ', users)
        res.send('The user has been successfully added')
    });
  }

});

app.post ('/login', (req, res) => {
    let user = req.body
    console.log('trying to login with: ', user)

    const filteredUsers = users.filter(function(dbUser) {
        return dbUser.email === user.email
      })

    if (filteredUsers.length) {
        let dbHash = filteredUsers[0].password

        bcrypt.compare(user.password, dbHash, function(err, result) {
            if (result) {
                let token = jwt.sign(user.email, privateKey, { 
                  algorithm: 'RS256',
                  // jwa: 'RSA-OAEP-256'
                })

                res.json({
                  token: token,
                  name: filteredUsers[0].name
                })
            } else {
                res.status(401).json({
                  error: 'Wrong password'
                })
            }
        });

    } else {
        res.status(401).json({
          error: 'The user doesn\'t exist'
        })
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});