import axios from "axios"
import { BASE_URL } from '../../constants/Urls'
import {goToHomePage} from '../../routes/Coordinator'


export const login = (body, navigate) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToHomePage(navigate)
        })
        .catch((err) => alert(err.response.data.message))
}