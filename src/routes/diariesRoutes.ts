import { Router } from "express";
import { getDiariesController, setDiariesController, updateDiariesController, deleteDiariesController, searchDiaryController } from "../controllers/diaryControllers";

const router = Router();

router.get('/diaries', getDiariesController);
router.post('/diary', setDiariesController);
router.put('/diary/:id', updateDiariesController);
router.delete('/diary/:id', deleteDiariesController);
router.get('/diary/:idDiary', searchDiaryController);

export default router;