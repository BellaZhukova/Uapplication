import express from "express";
import { serviceChoose, getService } from "../controllers/serviceController.js";
import { createAccount } from "../controllers/accountController.js";
import { createSite } from "../controllers/siteController.js";

const router = express.Router();

router.get('/', getService);

router.post('/', serviceChoose);

router.post('/account', createAccount);

router.get('/sites')

router.post('/site', createSite);


export default router;