/*import express from "express";
import * as diaryServices from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntries());
});

//router.post('/', (_res, res) => {});

export default router;*/

import { Router } from "express";
const router = Router();

import { getDiariesController } from "../controllers/diaryControllers";

router.get('/diaries', getDiariesController);
router.post('/diaries');
router.put('/diaries/:id');
router.delete('/diaries/:id');
router.get('/diaries/:id');

export default router;