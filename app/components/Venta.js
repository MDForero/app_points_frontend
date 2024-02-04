'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import printJS from "print-js-plus"
import useBills from "../hooks/bills"

export default function Ventas() {

    const router = useRouter()

    const { registerBill } = useBills()

    const [total, setTotal] = useState('')
    const [nit, setNit] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = async (e) => {
        e.preventDefault()
        
        registerBill({ total, nit, setErrors })


    }

    return <>
            <form onSubmit={submitForm} id="print" >
                <fieldset className="flex md:flex-wrap  lg:flex-row flex-col  justify-center items-center max-w-6xl mx-auto w-full gap-3 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <legend className="text-center font-bold text-xl">Registro de ventas</legend>
                    <div >
                        <label className="block text-sm font-medium text-gray-700" htmlFor="nit">
                            Nit
                        </label>
                        <div className="mt-1">
                            <input onChange={e => setNit(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required type="text" name="nit" id="nit" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Total
                        </label>
                        <div className="mt-1">
                            <input onChange={e => setTotal(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required type="number" min={0} step={1000} name="total" id="total" />
                        </div>
                    </div>


                    {/* <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="dob">
                            Date of Birth
                            </label>
                            <div className="mt-1">
                            <input onChange={e=>setName(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" type="date" name="dob" id="dob" />
                            </div>
                        </div> */}



                    <div className="mt-6">
                        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
                            Registrar
                        </button>
                    </div>
                </fieldset>
            </form>

    </>
}