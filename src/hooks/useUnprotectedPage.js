import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToAdminHomePage(navigate)
        }
    }, [navigate])

}

export default useUnprotectedPage