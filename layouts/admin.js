import Footer from '../components/footer'
import AdminF1 from '../layouts/admin_fragment_1'
import AdminF2 from '../layouts/admin_fragment_2'
import AdminF3 from '../layouts/admin_fragment_3'

export default function Admin() {
  
   return (
      <div class="container">
         <div class="main"></div>

         <br />

         {/* MENU NAV */}
         <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
               <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
               >
                  Lista de obras
               </a>
            </li>
            <li class="nav-item">
               <a
                  class="nav-link"
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
            <li class="nav-item">
               <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
               >
                  Contratistas
               </a>
            </li>
         </ul>

         {/* FRAGMENTOS CADA VISTA */}
         <div class="tab-content" id="myTabContent">
            {/* FRAGEMNTO 1 */}
            <div
               class="tab-pane fade show active"
               id="home"
               role="tabpanel"
               aria-labelledby="home-tab"
            >
               <AdminF1 />
            </div>

            {/* FRAGEMNTO 2 */}
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
               <AdminF2 />
            </div>

            {/* FRAGEMNTO 3 */}
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
               <AdminF3 />
            </div>
         </div>
         <Footer />
      </div>
   )
}
