
const question = require('../models/question_models')
const Result = require('../models/result_model')

const data = require('../config/data')
const answer = require('../config/data')

// Question


const getQuestion = async (req, res) => {
    try {
        const questions = await question.find({});
        console.log(questions);
        return res.status(200).json(questions);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

const addQuestion=async(req,res)=>{
       try{
           const newQuestion =  await question.insertMany({questions:data})
           return res.status(200).json({ message: "Data saved successfully", data: newQuestion })
       }
       catch(error) {
            console.log(error)
             return res.status(404).json({message:error})
       }
}

const DeleteQuestion=async(req,res)=>{
    try{
         await question.deleteMany()
         return res.status(200).json({message:"Question Deleted successfuly!!!"})
    }
    catch(error) {
        return res.status(404).json({message:error})
    }
}


// result

const getAllresult = async(req,res)=>{
      try{
        const results = await Result.find({});
        return res.status(200).json(results);
      }
      catch(error) {
        return res.status(404).json({message:error})
      }
}

const DeleteAllresult = async(req,res)=>{
    try{
        await Result.deleteMany()
        return res.status(200).json({message:"Result Deleted successfuly!!!"})
    }
    catch(error) {
        return res.status(404).json({message:error})
    }
}



const AddAllresult = async (req, res) => {
    try {
        const { username, result, attempts, points, achieved } = req.body;

        if (!username || !result || !attempts || !points || !achieved) {
            return res.status(400).json({ message: "All fields are required" });
        } else {
            // Assuming 'Result' is the Mongoose model
            const addResult = new Result({
                username: username,
                result: result,
                attempts: attempts,
                points: points,
                achieved: achieved
            });

            await addResult.save()

            return res.status(200).json({ message: "Result saved successfully" });
        }
    } catch (error) {
        console.log(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Internal server error" });
    }
};



exports.AddAllresult = AddAllresult
exports.DeleteAllresult = DeleteAllresult
exports.getAllresult = getAllresult
exports.addQuestion = addQuestion
exports.getQuestion=getQuestion
exports.DeleteQuestion = DeleteQuestion