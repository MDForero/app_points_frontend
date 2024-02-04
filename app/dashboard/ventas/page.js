import Ventas from "@/app/components/Venta";

export default async function ventas() {
    const ventas = await fetch('http://127.0.0.1:8000/api/bills', { method: 'GET', headers: { 'Content-Type': 'application/json' }, cache: "no-cache" }).then(res => res.json()).catch(err => console.log(err))
    const date = (data) => new Date(data).toLocaleDateString()

    return <div className="flex flex-col justify-center items-center space-y-4 mt-10">
        <Ventas />
        <table className=" border-separate border-spacing-4 border" >
            <thead >
                <tr className="border-b-2">
                    <th className="">Fecha</th>
                    <th>Nombre</th>
                    <th className="">Total</th>
                </tr>
            </thead>
            <tbody>
                {ventas?.bills?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((venta) => {
                    return <tr>
                        <tr>{venta.id}</tr>
                        <td>{date(venta.created_at)}</td>
                        <td>{venta.client_name}</td>
                        <td>{venta.total}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}