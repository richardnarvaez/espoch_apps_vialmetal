import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
   return (
      <>
         <Head>
            <title>VialMetal</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Nav />
         <main id="hero" className="text-white tm-font-big tm-parallax">
            <div className="back-black"></div>
            <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">
               <div className="container">
                  <div className="tm-next">
                     <a href="/" className="navbar-brand">
                        <b>VIALMETAL</b>
                     </a>
                  </div>

                  <button
                     className="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <i className="fas fa-bars navbar-toggler-icon"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                           <a className="nav-link tm-nav-link" href="/admin">
                              <b>Admin</b>
                           </a>
                        </li>
                        {/* <li className="nav-item">
                           <a className="nav-link tm-nav-link" href="">
                              <b>Usuarios</b>
                           </a>
                        </li> */}
                        <li className="nav-item">
                           <a className="nav-link tm-nav-link" href="auth/login">
                              <b>Iniciar sesión</b>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>

            <div className="text-center tm-hero-text-container">
               <div className="tm-hero-text-container-inner">
                  <h2 className="tm-hero-title">VIALMETAL</h2>
                  <p className="tm-hero-subtitle">
                     SISTEMA DE GESTIÓN DE MATERIALES
                     <br />
                     Pantalla de Inicio
                  </p>
               </div>
            </div>

            <footer className="text-center small tm-footer">
               <p className="mb-0">Copyright &copy; 2021 VIALMETAL</p>
            </footer>
         </main>
      </>
   )
}
