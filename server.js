const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

const db = require('./queries')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


  app.get('/users', db.getUsers)
  app.get('/users/:id', db.getUserById)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })



