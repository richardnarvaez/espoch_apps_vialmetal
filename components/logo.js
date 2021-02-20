import Link from 'next/link'

export default function Logo() {
   return (
      <Link href="/admin">
         <div class="logo">
            <p>
               <span class="color">VIAL</span>METAL
            </p>
            <small>SEÑALIZACIÓN VIAL</small>
         </div>
      </Link>
   )
}
