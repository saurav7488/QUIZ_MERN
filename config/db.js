const mongoose = require('mongoose')


const MONGO_URL = "mongodb+srv://jitenderkumarmukul:iCYyj0PazxbuPYFV@cluster0.8iwkhdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// iCYyj0PazxbuPYFV
const dbConnect = async()=>{
      try{
         await mongoose.connect(MONGO_URL)
         console.log("Database connect successfuly")
      }
      catch(error) {
          console.error(error)
      }
}

module.exports = dbConnect