export default function Card({ data }) {
   return (
      <>
         <div class="col-sm-6 tarjeta">
            <div class="card">
               <div class="card-body">
                  <div class="message">
                     <h5 class="card-title">{data.title}</h5>
                     <h6 class="card-subtitle mb-2 text-muted">{data.price}</h6> 
                     <p class="card-text">{data.description}</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
