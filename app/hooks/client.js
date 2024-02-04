import axios from "@/lib/axios"


export default function useClient() {
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const registerClients = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios.post('/api/clients', props)
            .then((response) => {
                alert(response.data.message)
                window.location.reload()
            })
            .catch(error => {
                console.log(error)

                setErrors(error.response)
            })
    }


    



    return { registerClients }
}