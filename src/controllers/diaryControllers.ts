
import { Request, Response } from "express";
import { getDiariesServices } from "../services/diaryServices";
//import { DiaryModel } from "../models/Diary.ts";

export async function getDiariesController(req: Request, res: Response) {
    try {
        const diaries = await getDiariesServices();
        console.log("ConsoleLog: ", req, diaries);
        res.json(diaries);
    } catch (error: any) {
        res.status(500).json({ status: 500, message: error.message });
    }
}