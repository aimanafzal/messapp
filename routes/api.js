const express = require('express');
const router = express.Router();


// // Load environment variables from .env file
// dotenv.config();


// Define routes
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

router.get('/get', (req, res)=>{
  res.json({message: 'GET call'})
})


router.post('/post', (req, res)=>{
  res.json({message: 'POST call'})
})



router.delete('/delete', (req, res)=>{
  res.json({message: 'POST call'})
})



module.exports = router;

