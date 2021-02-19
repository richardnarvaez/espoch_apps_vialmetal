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
         <main id="hero" class="text-white tm-font-big tm-parallax">
            <div class="back-black"></div>
            <nav class="navbar navbar-expand-md tm-navbar" id="tmNav">
               <div class="container">
                  <div class="tm-next">
                     <a href="/" class="navbar-brand">
                        <b>VIALMETAL</b>
                     </a>
                  </div>

                  <button
                     class="navbar-toggler"
                     type="button"
                     data-toggle="collapse"
                     data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <i class="fas fa-bars navbar-toggler-icon"></i>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                           <a class="nav-link tm-nav-link" href="/admin">
                              <b>Admin</b>
                           </a>
                        </li>
                        {/* <li class="nav-item">
                           <a class="nav-link tm-nav-link" href="">
                              <b>Usuarios</b>
                           </a>
                        </li> */}
                        <li class="nav-item">
                           <a class="nav-link tm-nav-link" href="auth/login">
                              <b>Iniciar sesión</b>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>

            <div class="text-center tm-hero-text-container">
               <div class="tm-hero-text-container-inner">
                  <h2 class="tm-hero-title">VIALMETAL</h2>
                  <p class="tm-hero-subtitle">
                     SISTEMA DE GESTIÓN DE MATERIALES
                     <br />
                     Pantalla de Inicio
                  </p>
               </div>
            </div>

            <footer class="text-center small tm-footer">
               <p class="mb-0">Copyright &copy; 2021 VIALMETAL</p>
            </footer>
         </main>
      </>
   )
}
