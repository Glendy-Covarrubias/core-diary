const Diary = require('../models/Diary');

export async function getDiariesServices() {
  try {
    return await Diary.findAll();
  } catch (error: any) {
    throw Error(error);
  }
}

export async function setDiariesServices(data : any) {
  try {
    return await Diary.create(data);
  } catch (error: any) {
    throw Error(error);
  }
}