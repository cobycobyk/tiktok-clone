const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/api/videos');

router.get('/', videosCtrl.getAll);
router.post('/new', videosCtrl.create);

module.exports = router;