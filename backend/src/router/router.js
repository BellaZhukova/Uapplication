const express = require('express');
const { serviceChoose, getService } = require('../controllers/serviceController.js');
const { createAccount, getDataAccount, updateAccount, getDataAccountById } = require('../controllers/accountController.js');
const { getSiteInfo, getSiteId, createSite } = require('../controllers/siteController.js');
const { getApi } = require('../controllers/apiCallController.js');
const { checkAccountExists } = require('../middlewares/accountMiddleware.js');
const { checkSiteExists } = require('../middlewares/siteMiddleware.js');

const router = express.Router();

router.get('/', getService);

router.post('/', serviceChoose);

router.post('/account', checkAccountExists, createAccount);

router.put('/account', updateAccount);

router.post('/accounts', getDataAccountById);

router.get('/accounts', getDataAccount);

router.get('/sites', getSiteInfo);

router.get('/site/:id', getSiteId);

router.post('/site', checkSiteExists, createSite);


router.get('/api_call', getApi);


module.exports = router;