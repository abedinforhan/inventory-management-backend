const { createUserService, getUsersService } = require("../services/user.service")


exports.getUsers= async (req, res) => {
    try {
        
        const user = await getUsersService()

        res.status(200).json({
            status: "success",
            data: user
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        })
    }
}



exports.createUser = async (req, res) => {

    try {
        // save or create

        const user = await createUserService(req.body)

        res.status(200).json({
            status: 'success',
            messgae: 'Data inserted successfully!',
            data: user
        })
      
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: ' Data is not inserted ',
            error: error.message
        })
    }

}