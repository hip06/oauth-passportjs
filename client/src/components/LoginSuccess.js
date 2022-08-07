import React, { useEffect } from 'react'
import { loginSuccess } from '../store/actions/authAction'
import { useParams, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const LoginSuccess = () => {
    const { userId, tokenLogin } = useParams()
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(loginSuccess(userId, tokenLogin))
    }, [])
    return (
        <div>
            {isLoggedIn ? <Navigate to={'/'} replace={true} /> : <h3>Yêu cầu bạn hãy đăng nhập</h3>}
        </div>
    )
}

export default LoginSuccess