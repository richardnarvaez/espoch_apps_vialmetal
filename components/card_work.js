export default function Card({ data, onClick }) {
   
   return (
      <>
         <div
            className={
               'col-6 col-sm-4 col-md-3 ' + (data.status && data.status == 'O' ? ' opacity-1' : '')
            }
            //style={ && {  }}
            onClick={onClick}
         >
            <div className="item-work">
               <div className="img-transport">
                  <img src={data.image} />
               </div>

               <div className="details-transport">
                  <h5 className="trasnport-name">{data.name}</h5>
                  {/* <h5 className="trasnport-status">{data.status}</h5> */}
                  <h5 className="trasnport-status">
                     {data.quantity ? 'Cantidad: ' + data.quantity : 'Km:' + data.mileage}
                  </h5>
               </div>
            </div>
         </div>
      </>
   )
}
