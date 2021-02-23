import { useState, useEffect } from 'react'


export default function Admin() {
    const [users, setUsers] = useState()
    const [list, setList] = useState([])

    const setListado = (a) => {
        setList((old) => [...old, a])
    }

    return(
        <>
        <div className="body-adminwork">
            <div className="btn-volver">
                <a href="admin">
                <button class="" type="button">
                    Volver
                </button>
                </a>
            </div>

            <h1>FINALIZAR TRABAJO</h1>
             
            <div className="table-section">
                <div className="titles-table">
                        <div className="first-column"> <strong>UTILIZADO</strong> </div>
                        <div className="second-column"> <strong>SOBRANTE</strong> </div>
                        <div className="third-column"> <strong>RESTANTE</strong> </div>
                </div>
                <div className="table-area">
                    <h3>MATERIALES</h3>
                    <div className="row-materials">
                        <div className="item-list">

                            {!list ? (
                            <>No hay elementos</>
                            ) : (
                            list.map((item, i) => {
                                return (
                                    <div className="new-row-materials">
                                        <div className="first-column">Detalle de lo que se usó en el trabajo</div>
                                        <div className="second-column"> <input placeholder="Ingrese la cantidad"></input> </div>
                                        <div className="third-column">Cálculo de lo que queda</div>
                                    </div>
                                )
                            })
                            )}
                        </div>
                    </div>
                    <h3>HERRAMIENTAS</h3>
                    <div className="row-tools">
                        <div className="new-row-tools">
                            <div className="first-column">Detalle de lo que se usó en el trabajo</div>
                            <div className="second-column"> <input placeholder="Ingrese la cantidad"></input> </div>
                            <div className="third-column">Cálculo de lo que queda</div>
                        </div>
                    </div>
                    <h3>VEHÍCULOS</h3>
                    <div className="row-vehicles">
                        <div className="new-row-vehicles">
                            <div className="first-column">Detalle de lo que se usó en el trabajo</div>
                            <div className="second-column"> <input placeholder="Ingrese la cantidad"></input> </div>
                            <div className="third-column">Cálculo de lo que queda</div>
                        </div>

                    </div>




                </div>
            </div>

            <div className="button-container">    
                <div className="btn btn-editar">
                    <button class="" type="button">
                        Editar Obra
                    </button>
                </div>
                <div className="btn btn-terminar">
                    <button class="" type="button">
                        Finalizar Obra
                    </button>
                </div>

            </div>


        </div>

        
        </>
    )
}