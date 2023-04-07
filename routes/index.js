var express = require('express');
var router = express.Router();




router.get('/year', function(req, res, next) {
  const newDate = new Date().getFullYear()
  res.json({ year: newDate.toString() })
});



// router.post('./year', (req, res) => {
//   document.querySelector('#year')
//   fetch(`http://localhost:3000/year`)
//   res.json({ now: newDate })
// })

module.exports = router;
