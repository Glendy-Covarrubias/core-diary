import { Request, Response } from "express";
import { getDiariesServices, setDiariesServices, deleteDiariesServices, updateDiariesServices, searchDiariesServices } from "../services/diaryServices";

export async function getDiariesController(req: Request, res: Response) {
    try {
        const result = await getDiariesServices();
        console.log("ConsoleLog: ", req, result);
        //res.json(diaries);
        res.status(200).json({ status: 200, message: "success", data: result });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

export async function setDiariesController(req: Request, res: Response) {
    try {
        const result = await setDiariesServices(req.body);
        res.status(200).json({ status: 200, message: "success", data: result });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

export async function updateDiariesController(req: Request, res: Response) {
    try {
        const idDiary = req.params.id;
        const updateDiary = req.body;
        const result = await updateDiariesServices(idDiary, updateDiary);
        res.status(200).json({ status: 200, message: "success", data: result });
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
        const idDiary = parseInt(req.params.idDiary);
        const result = await searchDiariesServices(idDiary);
        res.status(200).json({ status: 200, message: "success", data: result });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}