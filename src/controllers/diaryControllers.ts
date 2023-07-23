import { Request, Response } from "express";
import { getDiariesServices, setDiariesServices, deleteDiariesServices, updateDiariesServices, searchDiariesServices } from "../services/diaryServices";

export async function getDiariesController(req: Request, res: Response) {
    try {
        const diaries = await getDiariesServices();
        console.log("ConsoleLog: ", req, diaries);
        //res.json(diaries);
        res.status(200).json({ status: 200, message: "success", data: diaries });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

export async function setDiariesController(req: Request, res: Response) {
    try {
        const newDiary = await setDiariesServices(req.body);
        res.status(200).json({ status: 200, message: "success", data: newDiary });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

export async function updateDiariesController(req: Request, res: Response) {
    try {
        const idDiary = req.params.id;
        const updateDiary = req.body;
        await updateDiariesServices(idDiary, updateDiary);
        console.log(idDiary, updateDiary);
        res.status(200).json({ status: 200, message: "success", data: updateDiary });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

export async function deleteDiariesController(req: Request, res: Response) {
    try {
        const idDiary = req.params.id;
        await deleteDiariesServices(idDiary);
        res.status(200).json({ status: 200, message: "success", data: { id: idDiary } });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

export async function searchDiaryController(req: Request, res: Response) {
    try {
        const idDiary = parseInt(req.params.id);
        console.log(idDiary); /**Pendiente revisar */
        const result = await searchDiariesServices(1);
        console.log(result);
        res.status(200).json({ status: 200, message: "success", data: result });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}