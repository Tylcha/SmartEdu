import express from 'express';
import * as pageControllers from '../controllers/pageControllers.js';
import redirectMiddlewares from '../middlewares/redirectMiddlewares.js';

const router = express.Router();

router.route('/').get(pageControllers.getIndexPage);
router.route('/about').get(pageControllers.getAboutPage);
router.route('/register').get(redirectMiddlewares, pageControllers.getRegisterPage);
router.route('/login').get(redirectMiddlewares, pageControllers.getLoginPage);

export default router;
