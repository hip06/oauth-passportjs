import aixos from 'axios'


export const apiLoginSuccess = (id, tokenLogin) => new Promise(async (resolve, reject) => {
    try {
        let response = await aixos({
            method: 'post',
            url: 'http://localhost:5000/api/auth/login-success',
            data: { id, tokenLogin }
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})