const Diary = require('../models/Diary');

export async function getDiariesServices() {
  try {
    const options = {
      order: [['id', 'ASC']]
    };
    return await Diary.findAll(options);
  } catch (error: any) {
    throw Error(error);
  }
}

export async function setDiariesServices(data: any) {
  try {
    return await Diary.create(data);
  } catch (error: any) {
    throw Error(error);
  }
}

export async function updateDiariesServices(idDiary: any, data: any) {
  try {
    const diary = await Diary.findByPk(idDiary);
    diary.name = data.name;
    diary.priority = data.priority;
    diary.status = data.status;
    diary.description = data.description;
    return await diary.save();
  } catch (error: any) {
    throw Error(error);
  }
}

export async function deleteDiariesServices(idDiary: any) {
  try {
    return await Diary.destroy({ where: { id: idDiary } });
  } catch (error: any) {
    throw Error(error);
  }
}

export async function searchDiariesServices(idDiary: any) {
  try {
    return await Diary.findByPk(idDiary);
  } catch (error: any) {
    throw Error(error);
  }
}