import axios from "@/lib/axios";

export default async function dashboard() {
    const clientes = await fetch('http://127.0.0.1:8000/api/clients', {method: 'GET', headers: {'Content-Type': 'application/json'}}).then(res => res.json()).catch(err => console.log(err))    
        console.log(clientes)
    return <div>
        
        <h1>Dashboard</h1>
        <p>Esta es la página de dashboard</p>
    </div>;
}