import Registro from "@/app/components/Registro";

export default async function clientes() {
    const clientes = await fetch('http://127.0.0.1:8000/api/clients', { method: 'GET', cache: 'no-cache', headers: { 'Content-Type': 'application/json' } }).then(res => res.json()).catch(err => console.log(err))
    return <>
        <div>
            <Registro />
        </div>
        <section className="w-full flex justify-center items-center">

            <table className=" border-separate border-spacing-4 ">
                <thead>
                    <tr>
                        <th>Nit</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes?.clients.map(cliente => <tr >
                        <td>{cliente.nit}</td>
                        <td>{cliente.name}</td>
                        <td>{cliente.telephone}</td>
                    </tr>)}
                </tbody>
            </table>
        </section>
    </>;
}