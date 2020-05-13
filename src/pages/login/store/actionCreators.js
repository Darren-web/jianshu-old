import axios from 'axios'
import * as constants from './constants'

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value:true
})
export const logout = ()=> ({
    type:constants.LOGOUT,
    value:false
})

export const login = (userName,pwd) => {
    return (dispatch) => {
        axios.get('/api/login.json?userName='+userName+ '&pwd='+pwd).then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('login error')
            }
        })
    }
}

