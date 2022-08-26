const Diary = require('../models/Diary');

export async function getDiariesServices() {
  try {
    return await Diary.findAll();
  } catch (error: any) {
    throw Error(error);
  }
}