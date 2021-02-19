export default function Card({ data, onClick }) {
   let i = 0
   return (
      <>
         <div
            class="col-sm-4 item-work"
            onClick={() => {
               console.log(i)
               i++
               onClick('Naaaada')
            }}
         >
            <h5 class="card-title">{data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{data.email}</h6>
            <img src={data.image} />
         </div>
      </>
   )
}
