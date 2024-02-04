import Link from "next/link";

export default function rootLayout({ children }) {
    return <>
        <div className="mx-auto flex ">
            <section className="bg-orange-300 h-screen px-3 w-72 ">
                <ul className="space-y-2 text-white font-bold tracking-widest">
                    <li><Link href='/dashboard/ventas'>Ventas</Link></li>
                    <li><Link href='/dashboard/clientes'>Clientes</Link></li>
                </ul>

            </section>
            <div className="w-full">
                {children}
            </div>
        </div>
    </>
}