const express = require('express');
const router = express.Router();


let todos=[]

router.get('/', (req, res) => {
  res.json({todos});
});

router.post('/add',)

module.exports = router;