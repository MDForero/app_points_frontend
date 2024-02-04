import ButtonPrint from "@/app/components/ButtonPrint"
import useBills from "@/app/hooks/bills"

export default async function page({ params }) {
    const { showBill } = useBills()
    const bill = await showBill(params.id)
    const time = (data) => new Date(data).toLocaleTimeString()
    const date = (data) => new Date(data).toLocaleDateString()
    return <div>
        <div id='imprimir-div'>
            <h1>Detalle de la venta</h1>
            <p>{bill?.bill?.id}</p>
            <p>{bill?.client.name}</p>
            <p>{bill?.bill?.total}</p>
            <p>{date(bill?.bill?.created_at)}</p>
            <p>{time(bill?.bill?.created_at)}</p>
        </div>
            <ButtonPrint data={bill?.bill} />
    </div>
}