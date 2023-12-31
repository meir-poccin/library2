const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
const fetch = require('node-fetch')


app.use(cors())
app.use(express.json())

app.post('/todos', async(req,res)=>{
	try{
      const {description} = req.body
      const newTodo = await pool.query(
         'INSERT INTO todo (description) VALUES($1) RETURNING *',
         [description]
      	)
      res.json(newTodo.rows[0])
	}catch (err) {
      console.error(err.message)
	}
})

app.get('/todos', async(req,res)=>{
	try{
      
      const allTodos = await pool.query(
         'SELECT * FROM todo'
      	)
      res.json(allTodos.rows)
	}catch (err) {
      console.error(err.message)
	}
})


app.get('/todos/:id', async(req,res)=>{
   try{
      const {id} = req.params 
      const todo = await pool.query(
         "SELECT * FROM todo WHERE todo_id = $1 ",
          [id] 
         )
      res.json(todo.rows[0])
   }catch (err) {
      console.error(err.message)
   }
})

app.put('/todos/:id', async(req,res)=>{
   try{
      const {id} = req.params 
       const {description} = req.body 
      const updateTodo = await pool.query(
         "UPDATE todo SET description = $1 WHERE todo_id = $2 ", 
         [description, id] 
         )
      res.json('updated')
   }catch (err) {
      console.error(err.message)
   }
})

app.delete('/todos/:id', async(req,res)=>{
   try{
      const {id} = req.params 
      const deleteTodo = await pool.query(
         "DELETE FROM todo WHERE todo_id = $1 ", 
         [ id] 
         )
      res.json('deleted')
   }catch (err) {
      console.error(err.message)
   }
})

   function weather(){
      try{
      const apiKey ='19dd7ce9a1ef71da5a690e0ff39fb1e3'
   
     fetch('https://api.openweathermap.org/data/2.5/weather?q=brooklyn&units=imperial&APPID='+apiKey)
     .then((res)=>{
       res.json().then((data) =>{
         console.log(data)
       })
     }) 
  }catch(err){
   console.error(err.message)
  }

  }



app.get('/homes/editprofiles', async(req,res)=>{
   try{
     res.json('hello')
      
   }catch (err) {
      console.error(err.message)
   }
})

app.listen(5000, ()=>{
	console.log('server started')
   weather()
})

