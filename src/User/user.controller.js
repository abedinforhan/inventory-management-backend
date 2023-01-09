const {
  createUserService,
  getUsersService,
  getManagersService,
  makeSotreManagerService,
  getUserByIdService
} = require("./user.controller");

exports.getUsers = async (req, res) => {
  try {
    const user = await getUsersService();

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.getManagers = async (req, res) => {
  try {
    const managers = await getManagersService();

    res.status(200).json({
      status: "success",
      data: managers,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    // save or create
    const user = await createUserService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "User created successfully!",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't create user ! ",
      error: error.message,
    });
  }
};

exports.makeStoreManager = async (req, res) => {
  try {
    const user = req.body;

    const userFound = await getUserByIdService(user._id);

    if (!userFound) {
      return res.status(404).json({
        status: "fail",
        error: "No user found for this id",
      });
    }

    const result = await makeSotreManagerService(user._id);

    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Failed to make manager.",
      });
    }

    res.status(200).json({
      status: "success",
      messgae: "Successfully made store manager!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};
