import Card from '../components/card'

export default function AdminF2() {
   const datos = [
      {
         title: 'Esto es un dato de ADmin2 ',
         description: 'Una breve descripcion',
         price: '$00',
      },   {
         title: 'Esto es un dato de ADmin2 ',
         description: 'Una breve descripcion',
         price: '$00',
      },   {
         title: 'Esto es un dato de ADmin2 ',
         description: 'Una breve descripcion',
         price: '$00',
      }
   ]

   return (
      <>
         
         <h1>Inventario</h1>
         {/* PRUEBA */}
         <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
               <a
                  className="nav-link active"
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
            <li className="nav-item">
               <a
                  className="nav-link"
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
            <li className="nav-item">
               <a
                  className="nav-link"
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
         <div className="tab-content" id="pills-tabContent">
            <div
               className="tab-pane fade show active"
               id="pills-home"
               role="tabpanel"
               aria-labelledby="pills-home-tab"
            >
            <a className="bt-new-work" href="/adminwork">
            <h5>Nueva material</h5> 
         </a>
               <div className="div" className="row">
                  {datos.map((item, i) => {
                     return (
                        <>
                           <Card key={i} data={item} />
                        </>
                     )
                  })}
               </div>
            </div>
            <div
               className="tab-pane fade"
               id="pills-profile"
               role="tabpanel"
               aria-labelledby="pills-profile-tab"
            >
            <a className="bt-new-work" href="/adminwork">
            <h5>Nuevaheerramienta</h5> 
         </a>
               <div className="div" className="row">
                  {datos.map((item, i) => {
                     return (
                        <>
                           <Card key={i} data={item} />
                        </>
                     )
                  })}
               </div>
            </div>
            <div
               className="tab-pane fade"
               id="pills-contact"
               role="tabpanel"
               aria-labelledby="pills-contact-tab"
            >
            <a className="bt-new-work" href="/adminwork">
            <h5>Nuevo veihiuuclo</h5> 
         </a>
               <div className="div" className="row">
                  {datos.map((item, i) => {
                     return (
                        <>
                           <Card  key={i} data={item} />
                        </>
                     )
                  })}
               </div>
            </div>
         </div>
      </>
   )
}
