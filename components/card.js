import Link from 'next/link'

export default function Card({ data, href }) {
   return (
      <Link href={href ? href : "/"}>
         <div className="col-sm-6 tarjeta">
            <div className="card">
               <div className="card-imagen">
                  <p>
                     <strong>A</strong>
                  </p>
               </div>
               <div className="card-body-right">
                  <h5 className="card-title">{data.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{data.price}</h6>
                  <p className="card-text">{data.id_work}</p>
                  <p className="card-text">{data.id_user}</p>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text">{data.status}</p>
               </div>
            </div>
         </div>
      </Link>
   )
}
