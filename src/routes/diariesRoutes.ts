import { Router } from "express";
import { getDiariesController } from "../controllers/diaryControllers";

const router = Router();

router.get('/diaries', getDiariesController);
router.post('/diaries');
router.put('/diaries/:id');
router.delete('/diaries/:id');
router.get('/diaries/:id');

export default router;