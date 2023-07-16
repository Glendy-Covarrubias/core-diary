import { Request, Response } from "express";
import { getDiariesServices, setDiariesServices } from "../services/diaryServices";

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
        console.log("ConsoleLogCreate: ", req, newDiary, res);
        res.status(200).json({ status: 200, message: "success", data: newDiary });
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}