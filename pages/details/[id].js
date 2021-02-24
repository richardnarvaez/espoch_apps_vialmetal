import { useRouter } from 'next/router'

import Nav from "../../components/nav";
import AdminDetails from "../../layouts/admin_details";
export default function EndWork (){
    const {query} = useRouter()
    const id = query.id
    console.log("ID", id)
    return (
    <>
        <Nav />
        <AdminDetails/>
    </>
    );
}