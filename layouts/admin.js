import Card from '../components/card'

export default function Admin() {
   const datos = [
      {
         title: 'Hola',
         description: 'Descripcion 3',
         price: '$21',
      },
      {
         title: 'Hola22312',
         description: 'Descripcion 3',
         price: '$21',
      },
      {
         title: 'Hola',
         description: 'da;;sdlfgk; 3',
         price: '$21',
      },
   ]

   return (
      <div class="container">
           <div class="main">
      
  </div>
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
               <div class="dropdown show">
                  <a
                     class="btn btn-secondary dropdown-toggle"
                     href="#"
                     role="button"
                     id="dropdownMenuLink"
                     data-toggle="dropdown"
                     aria-haspopup="true"
                     aria-expanded="false"
                  >
                     Dropdown link
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                     <a class="dropdown-item" href="#">
                        Action
                     </a>
                     <a class="dropdown-item" href="#">
                        Another action
                     </a>
                     <a class="dropdown-item" href="#">
                        Something else here
                     </a>
                  </div>
               </div>
               <h1>PANTALLA 1</h1>
               <div class="row">
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
                     ...
                  </div>
                  <div
                     class="tab-pane fade"
                     id="pills-profile"
                     role="tabpanel"
                     aria-labelledby="pills-profile-tab"
                  >
                     ...
                  </div>
                  <div
                     class="tab-pane fade"
                     id="pills-contact"
                     role="tabpanel"
                     aria-labelledby="pills-contact-tab"
                  >
                     ...
                  </div>
               </div>
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
               COMO ESTANS
            </div>
         </div>
      </div>
   )
}
