"use client"
import { useState } from "react"
import { useAuth } from "../hooks/auth"

export default function registro() {
    const { register } = useAuth({ middleware: 'guest', redirectIfAuthenticated: '/' })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        register({ name, email, password, password_confirmation, setErrors })

    }

    return <div className="w-full h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit}>
            <fieldset className="border-2 w-fit mx-auto p-2">
                <legend className="text-base font-medium text-gray-900 text-center">Registro</legend>

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 max-w-sm">
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nombre completo
                        </label>
                        <input placeholder="JohnDoe" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Email
                        </label>
                        <input placeholder="JohnDoe@xxxx.com" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Contraseña
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password" />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Confirmar contraseña
                        </label>
                        <input onChange={(e) => setPasswordConfirmation(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" />
                    </div>
                    

                    <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                    Crear cuenta
                    </button>
                </div>
            </fieldset>
        </form >

    </div >

}