const Unit= require('./unit.model')

exports.getUnitsService = async () => {
  const units= await Unit.find({})
  return units;
}

exports.createUnitService = async (data) => {
  const units= await Unit.create(data)
  return units;
}