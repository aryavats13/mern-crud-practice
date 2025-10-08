const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Message fetched');
  res.json({ text: "Hello from Express!" });
});

router.post('/click', (req, res) => {
  console.log('Button clicked:', req.body);
  res.json({ text: "You clicked the button!" });
});

module.exports = router;