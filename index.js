
const path = require('path');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

/*Get all cities*/
app.get('/cities', db.getCities)

/*API CRUD ITEM*/
app.get('/items', db.getItems)
app.get('/items/:id', db.getItemById)
app.post('/items', db.createItem)
app.put('/items/:id', db.updateItem)
app.delete('/items/:id', db.deleteItem)



// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
