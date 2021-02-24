import { useRouter } from 'next/router'

import Nav from "../../components/nav";
<<<<<<< HEAD
import AdminDetails from "../../layouts/admin_details";
=======
import AdminEndWork from "../../layouts/admin_endwork";

>>>>>>> d448667a8c20a1d900d008029dbd90c07c89d359
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