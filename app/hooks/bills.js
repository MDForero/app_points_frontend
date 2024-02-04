import axios from "@/lib/axios";
import { ZCOOL_KuaiLe } from "next/font/google";

export default function useBills() {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const registerBill = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios.post('/api/bills', props)
            .then((response) => {
                window.location.assign(`ventas/${response.data.bill.id}`)
            })
            .catch(error => {
                alert(error.response.data.message)

                setErrors(error.response)
            })
    }

    const showBill = async (id) => {
        const data = await axios.get(`/api/bills/${id}`).then(res => res.data).catch(err => console.log(err))
        return data 
    }

    return { registerBill, showBill }
}