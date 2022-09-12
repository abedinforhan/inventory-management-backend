const User = require('../models/User')

exports.getUsersService = async () => {
    const users = await User.find({})
    return users;
}

exports.createUserService = async (data) => {
    const newUser = await User.create(data);
    return newUser;
}

