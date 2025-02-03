const express = require('express');
const { serviceChoose, getService } = require('../controllers/serviceController.js');
const { createAccount } = require('../controllers/accountController.js');
const { getSiteInfo, getSiteId, createSite } = require('../controllers/siteController.js');
const { getApi } = require('../controllers/apiCallController.js');

const router = express.Router();

router.get('/', getService);

router.post('/', serviceChoose);

router.post('/account', createAccount);

router.get('/sites', getSiteInfo);

router.get('/site/:id', getSiteId)

router.post('/site', createSite);

router.get('/api_call', getApi);


module.exports = router;