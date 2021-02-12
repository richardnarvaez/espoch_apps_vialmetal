import Link from 'next/link'

const Footer = () => (
   <div className="footer">
      <hr />
      <ul className="navigation">
         <li>Todos los derechos reservados</li>
         <li className="navigationItem">
            <Link href="/admin">
               <a>Admin Vista protegida</a>
            </Link>
         </li>
         <li className="navigationItem">
            <a href="/api/users">Lista de usuarios API</a>
         </li>
      </ul>
   </div>
)

export default Footer
