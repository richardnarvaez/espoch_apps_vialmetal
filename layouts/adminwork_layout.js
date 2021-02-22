import { useState, useEffect } from 'react'
import CardW from '../components/card_work'

import AdminWorkTransport from '../layouts/adminwork_transport'
import AdminWorkTool from '../layouts/adminwork_tools'
import AdminWorkDetails from '../layouts/adminwork_details'
import AdminWorkMaterial from '../layouts/adminwork_material'


import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
   },
   button: {
      marginRight: theme.spacing(1),
   },
   instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
   },
}));

function getSteps() {
   return ['Detalles', 'Material', 'Herramientas', 'Transporte'];
}



export default function Admin() {

   
   const [users, setUsers] = useState()
   const [list, setList] = useState([])
   
   const classes = useStyles();
   const [activeStep, setActiveStep] = useState(0);
   const [skipped, setSkipped] = useState(new Set());
   const steps = getSteps();


   function getStepContent(step) {

   switch (step) {
      case 0:
         return <AdminWorkDetails setListado={setListado}/>;
      case 1:
         return <AdminWorkMaterial setListado={setListado} />;
      case 2:
         return <AdminWorkTool setListado={setListado} />;
      case 3:
         return <AdminWorkTransport setListado={setListado} />;

      default:
         return 'Unknown step';
   }
}

   const isStepOptional = (step) => {
      return step === 1;
   };

   const isStepSkipped = (step) => {
      return skipped.has(step);
   };

   const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
         newSkipped = new Set(newSkipped.values());
         newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
         // You probably want to guard against something like this,
         // it should never occur unless someone's actively trying to break something.
         throw new Error("You can't skip a step that isn't optional.");
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
         const newSkipped = new Set(prevSkipped.values());
         newSkipped.add(activeStep);
         return newSkipped;
      });
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   

   const setListado = (a) => {
      setList((old) => [...old, a])
   }




   return (
      <>

         <div className="body-adminwork">

            <h1 className="title-page">Nueva Obra</h1>

            <div className="content-newwork">

               <div className="new-work">
                  <h2>Material de trabajo</h2>

                  <div className="work-options">
                     
                     {/*DE AQUI VA FUNCION STEP */}

                     <div className={classes.root}>
                        <Stepper activeStep={activeStep}>
                           {steps.map((label, index) => {
                              const stepProps = {};
                              const labelProps = {};
                              if (isStepOptional(index)) {
                                 labelProps.optional = <Typography variant="caption">Optional</Typography>;
                              }
                              if (isStepSkipped(index)) {
                                 stepProps.completed = false;
                              }
                              return (
                                 <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                    HOL
                                 </Step>
                              );
                           })}
                        </Stepper>
                        <div>
                           {activeStep === steps.length ? (
                              <div>
                                 <Typography className={classes.instructions}>
                                    Has completado todo el formulario
                                 </Typography>
                                 <Button onClick={handleReset} className={classes.button}>
                                    Reset
                                 </Button>
                              </div>
                           ) : (
                                 <div>
                                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                    <div>
                                       <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                          Back
                                           </Button>
                                       {isStepOptional(activeStep) && (
                                          <Button
                                             variant="contained"
                                             color="primary"
                                             onClick={handleSkip}
                                             className={classes.button}
                                          >
                                             Skip
                                          </Button>
                                       )}

                                       <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleNext}
                                          className={classes.button}
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

         <div className="newwork-footer">

         </div>
      </>
   )
}
