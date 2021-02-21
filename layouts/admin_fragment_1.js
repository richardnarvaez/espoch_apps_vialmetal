import Card from '../components/card'

export default function AdminF1() {
   const datos = [
      {
         title: 'Aqui va el titulo',
         description: 'Una breve descripcion',
         price: '$00',
      }   
   ]

   return (
      <>
         <a class="bt-new-work" href="/adminwork">
            <h5>Nueva Obra</h5> 
         </a>
         
         <div class="list-combo">
            <div class="dropdown show combobox">
               <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
               >
                  Ordenar
               </a>

               <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                     A-Z
                  </a>
                  <a class="dropdown-item" href="#">
                     Z-A
                  </a>
                  <a class="dropdown-item" href="#">
                     Actual-Antiguo
                  </a>
                  <a class="dropdown-item" href="#">
                     Antiguo-Actual
                  </a>
               </div>
            </div>
            <div class="dropdown show combobox">
               <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
               >
                  Ordenar
               </a>

               <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                     A-Z
                  </a>
                  <a class="dropdown-item" href="#">
                     Z-A
                  </a>
                  <a class="dropdown-item" href="#">
                     Actual-Antiguo
                  </a>
                  <a class="dropdown-item" href="#">
                     Antiguo-Actual
                  </a>
               </div>
            </div>
         </div>

         <div class="div" class="row">
            {datos.map((item, i) => {
               return (
                  <>
                     <Card data={item} />
                  </>
               )
            })}
         </div>
      
      </>
   )
}
