import Card from '../components/card'
import Footer from '../components/footer'

export default function Admin() {
   const datos = [
      {
         title: 'Aqui va el titulo',
         description: 'Una breve descripcion',
         price: '$00',
      },
   ]

   return (
      <div class="container">
         <div class="main"></div>
         {/* BOOSTRAP */}
         <br />
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
         <div class="tab-content" id="myTabContent">
            <div
               class="tab-pane fade show active"
               id="home"
               role="tabpanel"
               aria-labelledby="home-tab"
            >
               {/* BOSTRAP */}
               <div class="dropdown show combobox">
                  <a
                     class="btn btn-secondary dropdown-toggle"
                     href="#"
                     role="button"
                     id="dropdownMenuLink"
                     data-toggle="dropdown"
                     aria-haspopup="true"
                     aria-expanded="false"
                  >
                     Ordenar
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                     <a class="dropdown-item" href="#">
                        A-Z
                     </a>
                     <a class="dropdown-item" href="#">
                        Z-A
                     </a>
                     <a class="dropdown-item" href="#">
                        Actual-Antiguo
                     </a>
                     <a class="dropdown-item" href="#">
                        Antiguo-Actual
                     </a>
                  </div>
               </div>
               <h1>Obras</h1>
               <div class="div" class="row">
                  {datos.map((item, i) => {
                     return (
                        <>
                           <Card data={item} />
                        </>
                     )
                  })}
               </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
               <h1>Inventario</h1>
               {/* PRUEBA */}
               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                     <a
                        class="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                     >
                        Materiales
                     </a>
                  </li>
                  <li class="nav-item">
                     <a
                        class="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                     >
                        Herramientas
                     </a>
                  </li>
                  <li class="nav-item">
                     <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                     >
                        Vehiculos
                     </a>
                  </li>
               </ul>
               <div class="tab-content" id="pills-tabContent">
                  <div
                     class="tab-pane fade show active"
                     id="pills-home"
                     role="tabpanel"
                     aria-labelledby="pills-home-tab"
                  >
                     <div class="div" class="row">
                        {datos.map((item, i) => {
                           return (
                              <>
                                 <Card data={item} />
                              </>
                           )
                        })}
                     </div>
                  </div>
                  <div
                     class="tab-pane fade"
                     id="pills-profile"
                     role="tabpanel"
                     aria-labelledby="pills-profile-tab"
                  >
                     <div class="div" class="row">
                        {datos.map((item, i) => {
                           return (
                              <>
                                 <Card data={item} />
                              </>
                           )
                        })}
                     </div>
                  </div>
                  <div
                     class="tab-pane fade"
                     id="pills-contact"
                     role="tabpanel"
                     aria-labelledby="pills-contact-tab"
                  >
                     <div class="div" class="row">
                        {datos.map((item, i) => {
                           return (
                              <>
                                 <Card data={item} />
                              </>
                           )
                        })}
                     </div>
                  </div>
               </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
               <h1>Contratistas</h1>
               <div class="div" class="row">
                  {datos.map((item, i) => {
                     return (
                        <>
                           <Card data={item} />
                        </>
                     )
                  })}
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}
