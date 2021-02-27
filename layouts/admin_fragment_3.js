import { useState, useEffect } from 'react'

import CardW from '../components/card_c'


function validaRUC(ruc) {
   var lv_cedula
   var lv_vec3
   var lv_numruc
   var ll_rc
   var ll_fin
   //ruc=new String(ruc.value);
   ll_rc = false
   lv_numruc = ruc
   // Control de los 3 ?ltimos d?gitos
   ll_fin = ruc.substring(10, 13)
   if (ll_fin != '001') return false
   if (isNaN(Number(ruc))) return false
   lv_cedula = ruc.substring(0, 10)
   if (isNaN(Number(lv_cedula)) || lv_numruc.length != 13) return false
   lv_vec3 = Number(lv_numruc.substring(2, 3))
   if (lv_vec3 >= 0 && lv_vec3 <= 5) ll_rc = validaCedula(lv_cedula)
   else if (lv_vec3 == 6) ll_rc = validaTercero6(lv_cedula)
   else if (lv_vec3 == 9) ll_rc = validaTercero9(lv_cedula)
   return ll_rc
}

function validaCedula(cedula) {
   // Control de provincia entre 1 y 24
   let lv_prov = Number(cedula.substring(0, 2))
   if (lv_prov >= 1 && lv_prov <= 24) {
      let lv_numced = cedula
      let ll_TenDig = Number(cedula.substring(9, 10))
      let ll_sum = 0
      let ll_Cnt = 0
      let ll_CntPos = 0
      while (ll_CntPos < 9) {
         ll_CntPos = 2 * ll_Cnt + 1
         let lv_StrNum = lv_numced.substring(ll_CntPos - 1, ll_CntPos)
         let ll_multi = Number(lv_StrNum) * 2
         if (ll_multi >= 10) ll_multi = 1 + (ll_multi % 10)
         ll_sum += ll_multi
         ll_Cnt += 1
      }
      ll_Cnt = 1
      ll_CntPos = 1
      while (ll_CntPos < 8) {
         ll_CntPos = 2 * ll_Cnt
         let lv_StrNum = lv_numced.substring(ll_CntPos - 1, ll_CntPos)
         ll_sum += Number(lv_StrNum)
         ll_Cnt += 1
      }
      let ll_cociente = Math.floor(ll_sum / 10)
      let ll_decena = (ll_cociente + 1) * 10
      let ll_verificador = ll_decena - ll_sum
      if (ll_verificador == 10) ll_verificador = 0
      if (ll_verificador == ll_TenDig) return true
      else return false
   } else {
      return false
   }
}

export default function AdminF3() {
   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState()
   const [error, setError] = useState(false)

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/contractor/all')
         .then((res) => res.json())
         .then((result) => {
            setListObras(result)
         })
         .catch((e) => {
            console.log('ERRPR: >>>>', e)
         })
   }, [])

   const insertarContratista = () => {
      const contratista = {
         ruc: document.getElementById('ruc').value,
         description: document.getElementById('descripcion').value,
         business_name: document.getElementById('nombre').value,
      }

      if (!contratista.business_name.trim()) {
         alert('Datos incompletos... ')
         return
      }

      if (validaRUC(contratista.ruc)) {
         fetch('/api/data/contractor/null', {
            method: 'post',
            headers: {
               Accept: 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(contratista),
         })
            .then((response) => {
               if (response) {
                  console.log(response)
                  alert("Contratista: "+ contratista.business_name +" guardado Correctamente")
                  window.location.reload()
               }
            })
            .catch(function (error) {
               console.log('Request failed', error)
            })
      } else {
         alert('RUC-INVALIDO')
      }
   }

   return (
      <>
         <button className="bt-new-work" data-toggle="modal" data-target="#exampleModal4">
            <h5>+ Contratista</h5>
         </button>

         <h1>Lista de Contratistas</h1>
         {/*INICIA MODAL --CONTRATISTA--*/}
         <div
            class="modal fade"
            id="exampleModal4"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">
                        Nuevo Contratista
                     </h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <div class="form-group">
                        <label for="">
                           {' '}
                           <span style={{ color: 'red' }}>*</span>Nombre
                        </label>
                        <input className="form-control" id="nombre" />
                        <small id="emailHelp" className="form-text text-muted">
                           Nombre del contratista
                        </small>
                     </div>

                     <div class="form-group">
                        <label for="">
                           <span style={{ color: 'red' }}>*</span>RUC
                        </label>
                        <input className="form-control" id="ruc" />
                        <small id="emailHelp" className="form-text text-muted">
                           Ruc del contratista
                        </small>
                     </div>

                     <div class="form-group">
                        <label for="">Descripción</label>
                        <input className="form-control" id="descripcion" />
                        <small id="emailHelp" className="form-text text-muted">
                           Descripción de contratista
                        </small>
                     </div>
                  </div>

                  <div class="modal-footer">
                     <button onClick={insertarContratista} type="button" class="btn btn-primary">
                        Guardar Contratista
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/*TERMINA MODAL*/}

         {error ? (
            <>Error de conexion</>
         ) : (
            <div className="div" className="row">
               {!list_obras ? (
                  <>CARGANDO CONTRATISTAS...</>
               ) : (
                  list_obras.map((item, i) => {
                     return <CardW key={i} data={item} href={'/contractor/' + item.id_contractor} />
                  })
               )}
            </div>
         )}
      </>
   )
}


