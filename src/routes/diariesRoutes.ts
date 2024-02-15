import { Router } from "express";
import { createUserController, loginController } from "../controllers/userControllers";
import { getDiariesController, setDiariesController, updateDiariesController, deleteDiariesController, searchDiaryController } from "../controllers/diaryControllers";
import validateToken from "./validateTokens";

const router = Router();

router.post('/signup', createUserController);
router.get('/login', loginController);

router.get('/diaries', validateToken, getDiariesController);
router.post('/diary', setDiariesController);
router.put('/diary/:id', updateDiariesController);
router.delete('/diary/:id', deleteDiariesController);
router.get('/diary/:idDiary', searchDiaryController);

export default router;