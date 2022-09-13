const User = require('../models/User')

exports.getUsersService = async () => {
    const users = await User.find({})
    return users;
}

exports.getManagersService = async () => {
    // const managers = 
    // return users;
}

exports.createUserService = async (data) => {
    const newUser = await User.create(data);
    return newUser;
}

exports.getUserByIdService = async (userId) =>  {
    const user = await User.findOne({ _id: userId });
    return user;
}

exports.makeSotreManagerService = async (userId) =>  {
    const result = await User.updateOne({ _id: userId }, { role: "store-manager" });
    return result;
};

