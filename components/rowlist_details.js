export default function RowDetails({ key, data , tp}) {
   
   return (
      <>
            { tp == "mt" ? (
                  <div className="new-row-tools">
                        <div className="first-column"><strong>{data.name}</strong></div>
                        <div className="second-column"> <input placeholder="Ingrese la cantidad"></input> </div>
                        <div className="third-column">{data.quantity}</div>
                  </div>
            ) : (
                  <div className="new-row-tools">
                        <div className="first-column"><strong>{data.name}</strong></div>
                        <div className="second-column"><input type="checkbox" value="status" checked disabled></input> </div>
                        <div className="third-column">{"Ocupado"}</div>
                  </div>
            )
            }
      </>
   )
}
