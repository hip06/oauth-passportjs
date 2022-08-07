const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token = req?.headers?.authentication

    if (!token) {
        return res.status(200).json({
            err: 1,
            msg: 'Chưa đăng nhập'
        })
    }
    jwt.verify(token, 'hip06', (err, decode) => {
        if (err) {
            return res.status(200).json({
                err: 2,
                msg: 'Token không hợp lệ'
            })
        }
        req.currentUser = decode
        next()
    })
}
//dsdsd
module.exports = verifyToken