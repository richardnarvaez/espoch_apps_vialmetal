export default function Card({ data, onClick }) {
   let i = 0
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
                  <h5 className="trasnport-status" >{data.name}</h5>
               </div>
               
            </div>
            
         </div>
      </>
   )
}
