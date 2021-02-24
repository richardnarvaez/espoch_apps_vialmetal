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

   const isStepOptional = (step) => {
      return step === 1
   }

   const isStepSkipped = (step) => {
      return skipped.has(step)
   }

   const handleNext = () => {
      if (activeStep == 0) {
         const obra = {
            id_contractor: id,
            id_user: id_us,
            description: document.getElementById('descripcion').value,
            location: document.getElementById('location').value,
            created_at: document.getElementById('create_date').value,
            finished_at: document.getElementById('end_date').value,
         }

         console.log(obra)

         if (!obra.id_contractor || !obra.location || !create_date) {
            alert('Faltan datos, no podemos continuar,\nContratista y Location es OBLIGATORIO')
            seterrorDetalles(true)   
            return
         } else {
            seterrorDetalles(false)
            createWorkBase(obra)
         }
      }

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
                                       Back
                                    </Button>

                                    <Button
                                       variant="contained"
                                       color="primary"
                                       onClick={handleNext}
                                    >
                                       {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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
                        <h5>Detalles</h5>

                        {!list ? (
                           <>No hay elementos</>
                        ) : (
                           list.map((item, i) => {
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
                        <h5>Material</h5>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                     </div>

                     <div className="item-list">
                        <h5>Herrameintas</h5>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                     </div>
                     <div className="item-list">
                        <h5>Transporte</h5>
                        <div style={{ borderBottom: 'solid 0.5px #ececec', padding: 8 }}>
                           <p>
                              <span>
                                 <strong>3</strong>
                              </span>
                              Texto de prueba
                           </p>
                           <p>12$</p>
                        </div>
                     </div>
                  </div>

                  <div className="btn-agregar">
                     <button className="" type="button">
                        Crear Obra
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div className="newwork-footer"></div>
      </>
   )
}
