const express = require('express') 
const app = express() 
const PORT = 8000
const cors = require('cors') 
const router = require('./routes/routes')
const morgan = require('morgan')
const dbConnect = require('./config/db')

app.use(cors())
app.use(express.json()) 
app.use(morgan('tiny'))


app.use('/api',router)



dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`connect successfuly with server ${PORT}`)
   })
})