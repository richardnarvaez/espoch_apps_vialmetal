

export default function RowDetails({ key, data }) {
   
   return (
      <>
            
            <div className="new-row-tools">
                  <div className="first-column"><strong>{data.name}</strong></div>
                  <div className="second-column"> <input placeholder="Ingrese la cantidad"></input> </div>
                  <div className="third-column">{data.quantity}</div>
            </div>
      </>
   )
}
