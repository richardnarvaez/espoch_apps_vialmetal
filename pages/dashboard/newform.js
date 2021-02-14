import { Head } from 'next/document'

export default function NewForm() {
   return (
      <>
      <center>
         <header>
            <h1>Ingreso de datos</h1>
         </header>
         <div class="main"></div>
      </center>
         <center>
            <form name="Datos">
               <div class="datos">
                  <h2>Datos de ubicación</h2>
                  <form name="ubicacion">
                     <div class="datoUno">
                        <div class="label">
                           <label>Ubicación:</label>
                        </div>
                        <div class="ingreso-ubicacion">
                           <input
                              type="text"
                              placeholder="Dónde realizó el trabajo"
                              id="ubicacion"
                           />
                        </div>
                     </div>

                     <div class="datoDos">
                        <div class="label">
                           <label>Fecha:</label>
                        </div>
                        <div class="ingreso-fecha">
                           <input type="date" id="fecha" />
                        </div>
                     </div>

                     <div class="datoTres">
                        <div class="label">
                           <label>Hora:</label>
                        </div>
                        <div class="ingreso-hora">
                           <input type="time" id="hora" />
                        </div>
                     </div>

                     <div class="datoCuatro">
                        <div class="label">
                           <label>Distancia:</label>
                        </div>
                        <div class="ingreso-distancia" />
                        <input type="number" id="distancia" min="0" />
                        <select>
                           <option id="km2">Kilometros cuadrados</option>
                           <option id="m2">Metros cuadrados</option>
                        </select>
                     </div>
                  </form>

                  <h2>Datos de transporte</h2>
                  <form name="vehiculo">
                     <div class="datoCinco">
                        <div class="label">
                           <label>Transporte:</label>
                        </div>
                        <div class="ingreso-vehiculo">
                           <select name="transporte" id="transporte">
                              <option id="vehiculo-uno">Camioneta FORD N1</option>
                              <option id="vehiculo-dos">Camioneta DIM N3</option>
                              <option id="vehiculo-tres">Camion HINO N1</option>
                              <option id="vehiculo-cuatro">Camion HINO N2</option>
                              <option id="vehiculo-cinco">Furgoneta N1</option>
                              <option id="vehiculo-seis">Furgoneta N2</option>
                              <option id="vehiculo-siete">Furgoneta N3</option>
                           </select>
                        </div>
                     </div>

                     <div class="datoSeis">
                        <div class="label">
                           <label>KM antes de salir:</label>
                        </div>
                        <div class="ingreso-km-salida">
                           <input
                              type="number"
                              placeholder="KM antes de salir"
                              id="km-salida"
                              min="0"
                           />
                        </div>
                     </div>

                     <div class="datoSiete">
                        <div class="label">
                           <label>KM al retornar:</label>
                        </div>
                        <div class="ingreso-km-entrada">
                           <input
                              type="number"
                              placeholder="KM al retornar"
                              id="km-entrada"
                              min="0"
                           />
                        </div>
                     </div>
                  </form>

                  <h2>Datos de equipo</h2>
                  <form name="equipo">
                     <div class="datoOcho">
                        <div class="label">
                           <label>Pintura</label>
                        </div>
                        <div class="ingreso-pintura">
                           <input type="number" placeholder="Canecas" id="pintura" min="0" />
                        </div>
                     </div>

                     <div class="datoNueve">
                        <div class="label">
                           <label>Tiñer:</label>
                        </div>

                        <div class="ingreso-tinier">
                           <input type="number" placeholder="Litros" id="tinier" min="0" />
                        </div>
                     </div>

                     <div class="datoDiez">
                        <div class="label">
                           <label>Numero de sopladores</label>
                        </div>
                        <div class="ingreso-soplador">
                           <input type="number" id="soplador" min="0" placeholder="Sopladores" />
                        </div>
                     </div>
                  </form>
               </div>
            </form>
         </center>
      </>
   )
}
