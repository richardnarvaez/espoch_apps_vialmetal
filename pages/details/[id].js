import { useRouter } from 'next/router'

import Nav from "../../components/nav";
import AdminEndWork from "../../layouts/admin_endwork";

export default function EndWork (){
    const {query} = useRouter()
    const id = query.id
    console.log("ID", id)
    return (
    <>
        <Nav />
        <AdminEndWork/>
    </>
    );
}