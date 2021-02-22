import Link from 'next/link'

export default function Card({ data, href }) {
   return (
      <Link href={href ? href : "/"}>
         <div class="col-sm-6 tarjeta">
            <div class="card">
               <div class="card-imagen">
                  <p>
                     <strong>A</strong>
                  </p>
               </div>
               <div class="card-body-right">
                  <h5 class="card-title">{data.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{data.price}</h6>
                  <p class="card-text">{data.id_work}</p>
                  <p class="card-text">{data.id_user}</p>
                  <p class="card-text">{data.description}</p>
                  <p class="card-text">{data.status}</p>
               </div>
            </div>
         </div>
      </Link>
   )
}
