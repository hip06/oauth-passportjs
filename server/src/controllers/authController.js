const authService = require('../services/authService')
const loginSuccess = async (req, res) => {
    const { id, tokenLogin } = req?.body
    try {
        if (!id || !tokenLogin) res.status(400).json({
            err: 1,
            msg: 'Missing inputs'
        })
        let response = await authService.loginSuccessService(id, tokenLogin)
        res.status(200).json(response)

    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller ' + error
        })
    }
}

module.exports = {
    loginSuccess
}