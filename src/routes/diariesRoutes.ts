import { Router } from "express";
import { getDiariesController, setDiariesController } from "../controllers/diaryControllers";

const router = Router();

router.get('/diaries', getDiariesController);
router.post('/diary', setDiariesController);
router.put('/diaries/:id');
router.delete('/diaries/:id');
router.get('/diaries/:id');

export default router;