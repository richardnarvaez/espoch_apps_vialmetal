export default function Card({ data, onClick }) {

   return (
      <>
         <div
            class="col-sm-3"
            onClick={onClick}
         >

            <div className="item-work">

               <div className="img-transport">
                  <img src={data.image} />
               </div>
               
               <div className="details-transport">
                  <h5 className="trasnport-name">{data.name}</h5>
                  <h5 className="trasnport-status" >{data.status}</h5>
                  <h5 className="trasnport-status" >Cantidad: {data.quantity}</h5>

                  </div>
               
            </div>
            
         </div>
      </>
   )
}
