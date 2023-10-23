var express = require('express');
var router = express.Router();
const homeCtrl = require('../controllers/home')

router.get('/', homeCtrl.home);
router.get('/gallery', homeCtrl.gallery);


module.exports = router;