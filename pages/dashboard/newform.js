import { Head } from 'next/document'

export default function NewForm() {
   return (
      <>
         <div className="main">
            <h1 className="title">BIENBENIDO</h1>
         </div>
         <center>
            <form name="Datos">
               <div className="datos">
                  <h2>Datos de ubicación</h2>
                  <form name="ubicacion">
                     <div className="datoUno">
                        <div className="label">
                           <label>Ubicación:</label>
                        </div>
                        <div className="ingreso-ubicacion">
                           <input
                              type="text"
                              placeholder="Dónde realizó el trabajo"
                              id="ubicacion"
                           />
                        </div>
                     </div>

                     <div className="datoDos">
                        <div className="label">
                           <label>Fecha:</label>
                        </div>
                        <div className="ingreso-fecha">
                           <input type="date" id="fecha" />
                        </div>
                     </div>

                     <div className="datoTres">
                        <div className="label">
                           <label>Hora:</label>
                        </div>
                        <div className="ingreso-hora">
                           <input type="time" id="hora" />
                        </div>
                     </div>

                     <div className="datoCuatro">
                        <div className="label">
                           <label>Distancia:</label>
                        </div>
                        <div className="ingreso-distancia" />
                        <input type="number" id="distancia" min="0" />
                        <select>
                           <option id="km2">Kilometros cuadrados</option>
                           <option id="m2">Metros cuadrados</option>
                        </select>
                     </div>
                  </form>

                  <h2>Datos de transporte</h2>
                  <form name="vehiculo">
                     <div className="datoCinco">
                        <div className="label">
                           <label>Transporte:</label>
                        </div>
                        <div className="ingreso-vehiculo">
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

                     <div className="datoSeis">
                        <div className="label">
                           <label>KM antes de salir:</label>
                        </div>
                        <div className="ingreso-km-salida">
                           <input
                              type="number"
                              placeholder="KM antes de salir"
                              id="km-salida"
                              min="0"
                           />
                        </div>
                     </div>

                     <div className="datoSiete">
                        <div className="label">
                           <label>KM al retornar:</label>
                        </div>
                        <div className="ingreso-km-entrada">
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
                     <div className="datoOcho">
                        <div className="label">
                           <label>Pintura</label>
                        </div>
                        <div className="ingreso-pintura">
                           <input type="number" placeholder="Canecas" id="pintura" min="0" />
                        </div>
                     </div>

                     <div className="datoNueve">
                        <div className="label">
                           <label>Tiñer:</label>
                        </div>

                        <div className="ingreso-tinier">
                           <input type="number" placeholder="Litros" id="tinier" min="0" />
                        </div>
                     </div>

                     <div className="datoDiez">
                        <div className="label">
                           <label>Numero de sopladores</label>
                        </div>
                        <div className="ingreso-soplador">
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
