'use client'
import { useEffect, useState } from "react"
import { useAuth } from "../hooks/auth"
import { useRouter } from "next/navigation"

export default function login() {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const handleSubmit = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }
    return <div className="flex w-full h-screen justify-center items-center">
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white border-2">
            <p className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Bienvenido a puntos El rey del <span className="text-[#7747ff]">Pollo</span></p>
            <p className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Inicio de sesión</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="block relative">
                    <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                    <input onChange={event => setEmail(event.target.value)} type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                </div>
                <div className="block relative">
                    <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                    <input onChange={event => setPassword(event.target.value)} type="text" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />

                </div>
                <div>
                    <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
                    </a></div>
                <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

            </form>
            <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div>
        </div>
    </div>
}