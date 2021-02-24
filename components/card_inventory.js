export default function CardInventory({ data, onClick }) {
   let i = 0

   let status = data.status

   if(status == 'T'){
      status = 'Disponible'
   }
   if(status == 'O'){
      status = 'Ocupado'
   }
   
   return (
      <>
         <div
            class="col-sm-3"
            onClick={() => {
               console.log(i)
               i++
               onClick('Naaaada')
            }}
         >
            <div className="item-work">
               <div className="img-transport">
                  <img src={data.image} />
               </div>

               <div className="details-transport">
                  <h5 className="trasnport-name">{data.name}</h5>
                  <h5 className="trasnport-status">{status}</h5>
                  <h5 className="trasnport-status">{data.quantity}</h5>
               </div>
            </div>
         </div>
      </>
   )
}
