import Link from 'next/link'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

export default function Card({ data, href }) {
   dayjs.locale('es')

   const na = data.business_name
   var date = dayjs(data.created_at).format('D MMMM, YYYY')
   const leM = na ? na.substring(0, 1) : 'A'

   return (
      <Link href={href ? href : '/admin'}>
         {/* {href ? href : '/'}> */}
         <div className="col-sm-6 tarjeta">
            <div className={'card ' + (data.status == 'P' ? 'card-pendding' : '')}>
               <div className="card-imagen">
                  <p>
                     <strong>{leM}</strong>
                  </p>
               </div>

               <div className="card-body-right">
                  <p className="card-text">
                     <strong>{data.business_name}</strong>
                  </p>
                  <p className="card-text">{data.location}</p>
                  <p className="card-text">{data.description ? data.description : '-'}</p>
                  <p className="card-text">{data.responsable}</p>
                  <p className="card-text">{date}</p>
               </div>
            </div>
         </div>
      </Link>
   )
}
