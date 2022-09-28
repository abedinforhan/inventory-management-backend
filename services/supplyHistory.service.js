const SupplyHistory = require('../models/SupplyHistory')


exports.getSupplyHistoryService = async (filters) => {
  const supplyHistories = await SupplyHistory.find(filters);
  return supplyHistories;
};

exports.createSupplyHistoryService = async (data) => {
    const result = await SupplyHistory.create(data);
    return result;
}

exports.updateSupplyHistoryByIdService= async (id, data) =>{
    const result = await SupplyHistory.updateOne({ _id: id }, data, {
        runValidators: true
    })
    return result;
}
