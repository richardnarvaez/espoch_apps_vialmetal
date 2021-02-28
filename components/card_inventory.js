export default function CardInventory({ data, onClick, href }) {
   let i = 0

   let status = data.status

   if (status == 'T') {
      status = 'Disponible'
   }
   if (status == 'O') {
      status = 'Ocupado'
   }

   return (
      <>
         <a
            class="col-6 col-sm-4 col-md-3"
            href={href ? href : '/admin'}
            
         >
            <div className="item-work">
               <div className="img-transport">
                  <img src={data.image} />
               </div>

               <div className="details-transport">
                  <h5 className="trasnport-name">{data.name}</h5>
                  <h5 className="trasnport-status">{status}</h5>
                  <h5 className="trasnport-status">{data.quantity}</h5>
                  <h5 className="trasnport-status">{data.mileage}</h5>
               </div>
            </div>
         </a>
      </>
   )
}
