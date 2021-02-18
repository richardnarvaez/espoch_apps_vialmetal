import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Nav />
         <main>
            <h1>VIALMETAL</h1>
            <p>Esto es un ejemplo de proyecto en la rama DEV</p>
            <p>PANTALLA INICIAL </p>

            <ul className="navigation">
               <li><strong>Lista de paginas</strong></li>
               <li className="navigationItem">
                  <Link href="/admin">
                     <a>Admin Vista protegida</a>
                  </Link>
               </li>
               <li className="navigationItem">
                  <a href="/api/data/users">Lista de usuarios API</a>
               </li>
               <li className="navigationItem">
                  <a href="/dashboard/newform">Fromulario</a>
               </li>
            </ul>
         </main>
         <Footer />
      </>
   )
}
