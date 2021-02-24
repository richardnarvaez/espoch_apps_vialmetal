import Link from 'next/link'
import Logo from './logo'

const Footer = () => (
   <div className="footer">
     
      <hr />
      <Logo />
      <ul className="navigation">
         <li>©2021 Todos los derechos reservados | VialMelatal - ESPOCH</li>
         <li className="navigationItem">
            <Link href="/admin">
               <a>Admin</a>
            </Link>
         </li>
         <li className="navigationItem">
            <a href="">
               Ayuda
            </a>
         </li>
      </ul>
   </div>
)

export default Footer
                                         
                                            
                                            
                                                                                