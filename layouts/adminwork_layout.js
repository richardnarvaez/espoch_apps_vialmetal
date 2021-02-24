import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

import AdminWorkTransport from '../layouts/adminwork_transport'
import AdminWorkTool from '../layouts/adminwork_tools'
import AdminWorkDetails from '../layouts/adminwork_details'
import AdminWorkMaterial from '../layouts/adminwork_material'

// STEPPER
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'

function getSteps() {
   return ['Detalles', 'Material', 'Herramientas', 'Transporte']
}
let id = ''
export default function Admin() {
   const { query } = useRouter()
   id = query.id

   const [list, setList] = useState([])
   const [dataDetalles, setDataDetalles] = useState()
   const [errorDetalles, seterrorDetalles] = useState(false)

   const [activeStep, setActiveStep] = useState(0)
   const [skipped, setSkipped] = useState(new Set())
   const steps = getSteps()

   function getStepContent(step) {
      switch (step) {
         case 0:
            return <AdminWorkDetails />
         case 1:
            return <AdminWorkMaterial setListado={setListado} />
         case 2:
            return <AdminWorkTool setListado={setListado} />
         case 3:
            return <AdminWorkTransport setListado={setListado} />

         default:
            return 'Unknown step'
      }
   }

   // VARIABLES "ESTADO"
   const [list_materiales, setListMateriales] = useState()
   const [list_herramientas, setListHerramientas] = useState()
   const [list_vehiculos, setListVehuiculos] = useState()

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      if (id)
         fetch('/api/data/work_material/' + id)
            .then((res) => res.json())
            .then((result) => {
               setListMateriales(result)
            })
            .catch((e) => {
               console.log('ERRPR: >>>>', e)
            })
   }, [id])

   const isStepOptional = (step) => {
      return step === 1
   }

   const isStepSkipped = (step) => {
      return skipped.has(step)
   }

   const handleNext = () => {
      let newSkipped = skipped
      if (isStepSkipped(activeStep)) {
         newSkipped = new Set(newSkipped.values())
         newSkipped.delete(activeStep)
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setSkipped(newSkipped)
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
   }

   //OTRO PROYECTO
   const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
         // You probably want to guard against something like this,
         // it should never occur unless someone's actively trying to break something.
         throw new Error("You can't skip a step that isn't optional.")
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setSkipped((prevSkipped) => {
         const newSkipped = new Set(prevSkipped.values())
         newSkipped.add(activeStep)
         return newSkipped
      })
   }

   const handleReset = () => {
      setActiveStep(0)
   }

   const setListado = (a) => {
      setList((old) => [...old, a])
   }

   const createWorkBase = (data) => {
      console.log('ENVIADO AL SERVIDOR', data)
   }

   return (
      <>
         <div className="body-adminwork">
            <div className="content-newwork">
               <div className="new-work">
                  <h2>Material de trabajo</h2>

                  <div className="work-options">
                     {/*DE AQUI VA FUNCION STEP */}
                     <div>
                        <Stepper activeStep={activeStep}>
                           {steps.map((label, index) => {
                              const stepProps = {}
                              const labelProps = {}

                              if (index == 0 && errorDetalles) {
                                 labelProps.error = true
                              } else {
                                 labelProps.error = false
                              }

                              if (isStepSkipped(index)) {
                                 stepProps.completed = false
                              }
                              return (
                                 <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                 </Step>
                              )
                           })}
                        </Stepper>
                        <div>
                           {activeStep === steps.length ? (
                              <div>
                                 <p>Has completado todo el formulario</p>
                                 <Button onClick={handleReset}>Llenar de nuevo</Button>
                              </div>
                           ) : (
                              <div>
                                 {getStepContent(activeStep)}
                                 <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack}>
                                       Atras
                                    </Button>

                                    <Button
                                       variant="contained"
                                       color="primary"
                                       onClick={handleNext}
                                    >
                                       {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                                    </Button>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>

               {/*LISTA DE RESUMEN*/}
               <div className="list-work">
                  <h2>Resumen</h2>
                  <div className="content-list">
                     <div className="item-list">
                        <h5>Material</h5>

                        {console.log('ads', list_materiales)}
                        {!list_materiales ? (
                           <>No hay elementos</>
                        ) : (
                           list_materiales.map((item, i) => {
                              
                              const pf = (item.quantity * item.price_liter).toFixed(2)

                              return (
                                 <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                                    <p>
                                       <span>
                                          <strong>{item.name}</strong>
                                       </span>
                                    </p>
                                    <p>Cantidad: {item.quantity} </p>
                                    <p>Precio p/l :{item.price_liter}</p>
                                    <p>Precio estimado :{pf}</p>

                                    <button>
                                       <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                          <path
                                             fill="currentColor"
                                             d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                                          />
                                       </svg>
                                    </button>
                                    <button>
                                       <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                          <path
                                             fill="currentColor"
                                             d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                                          />
                                       </svg>
                                    </button>
                                 </div>
                              )
                           })
                        )}
                     </div>

                     <div className="item-list">
                        <h5>Herrameintas</h5>
                        {!list_herramientas ? (
                           <>No hay elementos</>
                        ) : (
                           list_herramientas.map((item, i) => {
                              return (
                                 <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                                    <p>
                                       <span>
                                          <strong>3</strong>
                                       </span>
                                       Texto de prueba
                                    </p>
                                    <p>12$</p>
                                 </div>
                              )
                           })
                        )}
                     </div>
                     <div className="item-list">
                        <h5>Transporte</h5>
                        {!list_vehiculos ? (
                           <>No hay elementos</>
                        ) : (
                           list_vehiculos.map((item, i) => {
                              return (
                                 <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                                    <p>
                                       <span>
                                          <strong>{item.name}</strong>
                                       </span>
                                       Texto de prueba
                                    </p>
                                    <p>12$</p>
                                 </div>
                              )
                           })
                        )}
                     </div>
                  </div>

                  <div className="btn-agregar">
                     <button className="" type="button">
                        Iniciar Obra
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div className="newwork-footer"></div>
      </>
   )
}
