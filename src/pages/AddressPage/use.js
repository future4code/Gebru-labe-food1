import { BASE_URL } from '../constants/urls'
import axios from "axios"
import {goToHomePage} from '../../routes/Coordinator'


export const addAdress = (body, navigate) => {
       headers= {
        auth: localStorage.getItem("token")
    }
        axios.get(`${BASE_URL}address`,body, headers)
          .then((res) => {
            localStorage.clear()
            localStorage.setItem("token", res.data.token)
            goToHomePage(navigate)
        })
        .catch((err) => alert(err.response.data.message))
    }

   


