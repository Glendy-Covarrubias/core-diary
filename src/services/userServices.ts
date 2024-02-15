const User = require('../models/User');

export async function setUsersServices(data: any) {
    try {
        return await User.create(data);
    } catch (error: any) {
        throw Error(error);
    }
}

export async function searchUsersFieldServices(searchFields: any) {
    try {
        return await User.findOne({ where: searchFields });
    } catch (error: any) {
        throw Error(error);
    }
}