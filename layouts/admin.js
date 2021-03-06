import Footer from '../components/footer'
import AdminF1 from '../layouts/admin_fragment_1'
import AdminF2 from '../layouts/admin_fragment_2'
import AdminF3 from '../layouts/admin_fragment_3'

export default function Admin() {
  
   return (
      <div className="container">
         <div className="main noprint"></div>

         <br />

         {/* MENU NAV */}
         <ul className="nav nav-tabs noprint" id="myTab" role="tablist">
            <li className="nav-item">
               <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
               >
                  Contratistas
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
               >
                  Inventario
               </a>
            </li>
            <li className="nav-item">
               <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
               >
                 Obras
               </a>
            </li>
         </ul>

         {/* FRAGMENTOS CADA VISTA */}
         <div className="tab-content" id="myTabContent">
            {/* FRAGEMNTO 1 */}
            <div
               className="tab-pane fade show active"
               id="home"
               role="tabpanel"
               aria-labelledby="home-tab"
            >
               <AdminF3 />
            </div>

            {/* FRAGEMNTO 2 */}
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
               <AdminF2 />
            </div>

            {/* FRAGEMNTO 3 */}
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
               <AdminF1 />
               <a className="noprint" onClick={() => window.print()}>
               Imprimir Reporte
               </a>
            </div>
         </div>
         <Footer />
      </div>
   )
}
