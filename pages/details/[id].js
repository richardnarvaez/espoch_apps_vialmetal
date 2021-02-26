import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Inicio from '../../components/Inicio'
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