import { useRouter } from 'next/router'

import Nav from "../../components/nav";
import AdminDetails from "../../layouts/admin_details";
export default function EndWork (){
    return (
    <>
        <Nav />
        <AdminDetails />
    </>
    );
}