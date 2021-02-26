import {useState,useEffect} from 'react'

export default function RowDetails({ key, idnum, data , tp}) {
      
      const [MaterialUsed, setMaterialUsed] = useState([])
      const [ToolUsed, setToolUsed] = useState([])
      const [kmUsed, setkmUsed] = useState([])
      const onChangeVehicle = (event) => {
            const kmAct = document.getElementById(`${idnum}`).value
            const resta = kmAct-data.km_begin
            if(resta<0 && kmAct.length == data.km_begin.length){
                  alert("El valor sobrante debe ser menor al utilizado.")
                  document.getElementById(`${idnum}`).value= 0
            }else if(kmAct<0){
                  alert("Solo valores positivos")
                  document.getElementById(`${idnum}`).value= 0
            }
            else{
                  setkmUsed(resta)
            }
      }
      const onChangeMaterial = (event) => {
            const used = document.getElementById(`${idnum}`).value
            const resta = data.material_begin - used
            if(resta<0){
                  alert("El valor sobrante debe ser menor al utilizado.")
                  document.getElementById(`${idnum}`).value= 0
            }else if(used<0){
                  alert("Solo valores positivos")
                  document.getElementById(`${idnum}`).value= 0
            }
            else{
                  setMaterialUsed(resta)
            }
      }
      
      const onChangeTool = (event) => {
            const used = document.getElementById(`${idnum}`).value
            const resta = data.tool_begin - used
            if(resta<0){
                  alert("El valor sobrante debe ser menor al utilizado.")
                  document.getElementById(`${idnum}`).value= 0
            }else if(used<0){
                  alert("Solo valores positivos")
                  document.getElementById(`${idnum}`).value= 0
            }
            else{
                  setToolUsed(resta)
            }
      }



      return (
            <>
            { tp == "m" ? (
                  <tr> 
                  <th scope="row"><strong>{data.name}</strong></th>
                  <td>Canecas<br/>{data.material_begin}</td>
                  <td scope="col-2"><input className="form-control" id={idnum} type="number" placeholder="Cantidad sobrante" onChange={onChangeMaterial} required></input></td>
                  <td scope="col-2">Canecas<br/>{MaterialUsed}</td>
                  </tr>
            ): (tp=="t") ?(
                  <tr> 
                  <th scope="row"><strong>{data.name}</strong></th>
                  <td>Cantidad<br/>{data.tool_begin}</td>
                  <td scope="col-2"><input className="form-control" id={idnum} type="number" placeholder="Cantidad devuelta" onChange={onChangeTool} required></input></td>
                  <td scope="col-2">Cantidad<br/>{ToolUsed}</td>
                  </tr> 
            ):(
                  <tr> 
                  <th scope="row"><strong>{data.name}</strong></th>
                  <td>Kilometraje al empezar obra<br/>{data.km_begin}</td>
                  <td scope="col-2"><input className="form-control" id={idnum} type="number" placeholder="Km al terminar" onChange={onChangeVehicle} required></input></td>
                  <td scope="col-2">Kilometraje usado<br/>{(kmUsed<0)?("..."):(kmUsed)}</td>
                  </tr>
            )
            }
            </>
      )
}
