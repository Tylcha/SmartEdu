import express from 'express';
import * as pageControllers from '../controllers/pageControllers.js';

const router = express.Router();

router.route('/').get(pageControllers.getIndexPage);
router.route('/about').get(pageControllers.getAboutPage);
router.route('/register').get(pageControllers.getRegisterPage);

export default router;
