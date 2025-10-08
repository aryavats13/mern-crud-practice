const express = require('express');
const router = express.Router();

let count = 0;

router.get('/', (req, res) => {
  console.log('Fetching count:', count);
  res.json({ count });
});

router.post('/increment', (req, res) => {
  count++;
  console.log('➕ Incremented to:', count);
  res.json({ count });
});

router.post('/decrement', (req, res) => {
  count--;
  console.log('➖ Decremented to:', count);
  res.json({ count });
});

module.exports = router;