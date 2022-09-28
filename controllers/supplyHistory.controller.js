const {
  getSupplyHistoryService,
  createSupplyHistoryService,
  updateSupplyHistoryByIdService,
} = require("../services/supplyHistory.service");



exports.getSupplyHistory = async (req, res) => {
  try {
    const { suppliedBy } = req.query;
    let filters = {};

    if(suppliedBy){
      filters["suppliedBy.id"] = suppliedBy;
    }

    const supplyHistories = await getSupplyHistoryService(filters);

    res.status(200).json({
      status: "success",
      data: supplyHistories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

exports.createSupply = async (req, res) => {
  try {
    const result = await createSupplyHistoryService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "data inserted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not inserted ",
      error: error.message,
    });
  }
};


exports.updateSupplyHistoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateSupplyHistoryByIdService(id, req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully updated the history",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
