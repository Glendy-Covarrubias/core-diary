import { DiaryEntry } from "../models/diary.d";

const diaryData = [{
    id: 1,
    date: '02/07/2022',
    weather: 'sunny',
    visibility: 'great',
    comment: 'Esto es una prueba'
},
{
    id: 2,
    date: '09/07/2022',
    weather: 'sunny',
    visibility: 'great',
    comment: 'Esto es una prueba 2'
}];

//const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

//export const getEntries = (): DiaryEntry[] => diaries;

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];
export const getEntries = (): DiaryEntry[] => diaries;