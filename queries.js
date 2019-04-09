const Pool = require('pg').Pool

const pool = new Pool({
  user: 'feethrrkotchci',
  host: 'ec2-46-137-113-157.eu-west-1.compute.amazonaws.com',
  database: 'dbqkhnth0bg98n',
  password: '25c4a56b3ddd89d9de17e5225400d03f498b88161dc730c4413b77048c313003',
  port: 5432,
  "ssl":true,
})

/*
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'hamaoui10',
  port: 5432,
})*/



const getCities = (request, response) => {
    pool.query('SELECT * FROM cities ORDER BY country ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


const getItems = (request, response) => {
    pool.query('SELECT * FROM items ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const getItemById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM items WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createItem = (request, response) => {
    const { title, city, imgurl } = request.body

    pool.query('INSERT INTO items (title, city, imgurl) VALUES ($1, $2, $3)', [title, city, imgurl], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Item added with ID: ${results.insertId}`)
    })
  }

  const updateItem = (request, response) => {
    const id = parseInt(request.params.id)
    const { title, city, imgurl } = request.body

    pool.query(
      'UPDATE items SET title = $1, city = $2, imgurl = $3 WHERE id = $4',
      [title, city, imgurl, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Item modified with ID: ${id}`)
      }
    )
  }

  const deleteItem = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM items WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Item deleted with ID: ${id}`)
    })
  }



  module.exports = {
    getItems,
    getCities,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
  }
