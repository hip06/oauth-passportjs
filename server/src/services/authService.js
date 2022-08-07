const db = require('../models')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');

const loginSuccessService = (id, tokenLogin) => new Promise(async (resolve, reject) => {
    try {
        const newTokenLogin = uuidv4()
        let response = await db.User.findOne({
            where: { id, tokenLogin },
            raw: true
        })
        const token = response && jwt.sign({ id: response.id, email: response.email, role: response.role }, 'hip06', { expiresIn: '5d' })
        resolve({
            err: token ? 0 : 3,
            msg: token ? 'OK' : 'User not found or fail to login !',
            token
        })
        if (response) {
            await db.User.update({
                tokenLogin: newTokenLogin
            }, {
                where: { id }
            })
        }

    } catch (error) {
        reject({
            err: 2,
            msg: 'Fail at auth server ' + error
        })
    }
})

module.exports = {
    loginSuccessService
}