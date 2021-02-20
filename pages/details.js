import Nav from '../components/nav'

export default function EndWork() {
   return (
      <>
         <Nav />
         <h1>DETAILS</h1>

         <div className="container">
            <div className="card" style={{ flexDirection: 'column' }}>
               <h3>Listado</h3>
               <div style={{ display: 'flex' }}>
                  <div class="card-imagen">
                     <p>
                        <strong>A</strong>
                     </p>
                  </div>
                  <div class="card-body-right">
                     <h5 class="card-title">FECHA</h5>
                     <h5 class="card-title">DETALLES</h5>
                     <p>Concepto</p>
                     <p>DOC</p>
                     <h5 class="card-title">ENTRADA</h5>
                     <p class="card-text">CANTIDAD/ PRECIO UITARIIO/ PRECIO TOTAL</p>
                     <h5 class="card-title">SALIDA</h5>
                     <p class="card-text">CANTIDAD/ PRECIO UITARIIO/ PRECIO TOTAL</p>
                     <h5 class="card-title">SALDO</h5>
                     <p class="card-text">CANTIDAD/ PRECIO UITARIIO/ PRECIO TOTAL</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
