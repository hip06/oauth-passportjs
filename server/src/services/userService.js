const db = require('../models')

const getOneService = (id) => new Promise(async (resolve, reject) => {
    try {
        let response = await db.User.findOne({
            where: { id },
            raw: true
        })
        resolve({
            err: response ? 0 : 4,
            msg: response ? 'OK' : 'User not found!',
            response

        })

    } catch (error) {
        reject({
            err: 2,
            msg: 'Fail at auth server ' + error
        })
    }
})

module.exports = {
    getOneService
}