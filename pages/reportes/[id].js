import H1 from '../../components/Inicio'
export default function Reportes() {
   return (
      <>
         <div className="container">
            <H1></H1>
            <br />
            <table border="1" className="w-100">
               <tbody>
                  <tr>
                     <th>Responsable</th>
                     <th>Obra</th>
                     <th>Sector</th>
                  </tr>
                  <tr>
                     <td>Nombre</td>
                     <td>A1</td>
                     <td>B1</td>
                  </tr>
               </tbody>
            </table>
            <table border="1" className="w-100">
               <tbody>
                  <tr>
                     <th>Fecha</th>
                     <th>ID obra</th>
                  </tr>
                  <tr>
                     <td>2/12/2000</td>
                     <td>A1324fdsad</td>
                  </tr>
               </tbody>
            </table>
            <h1>Despacho</h1>
            <table border="1" className="w-100">
               <tbody>
                  <tr>
                     <td>Responsable</td>
                     <th>Obra</th>
                     <th>Sector</th>
                  </tr>
                  <tr>
                     <th>Nombre</th>
                     <td>A1</td>
                     <td>B1</td>
                  </tr>
               </tbody>
            </table>
            <h1>Sobrante</h1>
            <table border="1" className="w-100">
               <tbody>
                  <tr>
                     <td>Responsable</td>
                     <th>Obra</th>
                     <th>Sector</th>
                  </tr>
                  <tr>
                     <td>Nombre</td>
                     <td>A1</td>
                     <td>B1</td>
                  </tr>
               </tbody>
            </table>
            <br></br>
            <button onClick={() => window.print()}>Imprimir</button>
         </div>
      </>
   )
}
