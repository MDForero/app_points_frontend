'use client'
import { useAuth } from "../hooks/auth"
import Link from "next/link"

const Nav = () => {
    const { user, logout } = useAuth({ middleware: 'guest' })
    return (
        <div className="w-full p-4 bg-orange-400">
            <nav className="max-w-screen-2xl w-full flex justify-between mx-auto text-gray-200 font-bold tracking-widest">
                <Link href='/'><h1>Inicio</h1></Link>
                <ul className=" list-none flex gap-3">
                    {user ? <>
                        <li><Link href='/dashboard'>Dashboard</Link></li>
                        <li><button onClick={logout}>Cerra sesión</button></li>
                    </> : <>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/singup">Registro</Link></li>
                    </>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Nav