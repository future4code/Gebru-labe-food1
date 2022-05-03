import axios from "axios"
import { BASE_URL } from '../../constants/Urls'
import {goToAdressPage} from '../../routes/Coordinator'


export const signup = (body, navigate) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.clear()
            localStorage.setItem("token", res.data.token)
            const hasAddress = res.data.user.hasAddress
            if(res.data.user.hasAddress){
                localStorage.setItem('hasAddress', hasAddress)
            }
            goToAdressPage(navigate)
        })
        .catch((err) => alert(err.res.data.message))
    }




