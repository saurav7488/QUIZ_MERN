const express = require('express') 
const router = express.Router() 
const getAllController = require('../controller/controller_question')

router.get('/questions',getAllController.getQuestion)
router.post('/questions',getAllController.addQuestion)
router.delete('/questions',getAllController.DeleteQuestion)


router.get('/result',getAllController.getAllresult) 
router.delete('/result',getAllController.DeleteAllresult)
router.post('/result',getAllController.AddAllresult)


module.exports = router