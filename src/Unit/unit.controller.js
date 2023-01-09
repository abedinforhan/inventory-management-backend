const { getUnitsService ,createUnitService } = require('./unit.service')

exports.getUnits = async (req, res) => {
  try {
    const units = await getUnitsService()
    return res.status(200).json({
      status: 'success',
      data: units
    })
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: "Couldn't get the data "

    })
  }
}

exports.createUnit = async (req, res) => {
  try {
    const unit = await createUnitService(req.body)
    return res.status(200).json({
      status: 'success',
      data: unit
    })
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error.message
    })
  }
}