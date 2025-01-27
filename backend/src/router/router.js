import express from "express";
import { serviceChoose, getService } from "../controllers/serviceController.js";
import { createAccount } from "../controllers/accountController.js";
import { getSiteInfo, createSite } from "../controllers/siteController.js";
import { getApi } from "../controllers/apiCallController.js";

const router = express.Router();

router.get('/', getService);

router.post('/', serviceChoose);

router.post('/account', createAccount);

router.get('/site', getSiteInfo);

router.post('/site', createSite);

router.get('/api_call', getApi);


export default router;