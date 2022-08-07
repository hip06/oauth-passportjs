const userService = require('../services/userService')
const getOne = async (req, res) => {
    const { currentUser } = req
    try {
        if (!currentUser?.id) res.status(400).json({
            err: 1,
            msg: 'Missing inputs'
        })
        let response = await userService.getOneService(currentUser?.id)
        res.status(200).json(response)

    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller ' + error
        })
    }
}

module.exports = {
    getOne
}