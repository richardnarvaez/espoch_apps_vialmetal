import {useState,useEffect} from 'react'

export default function RowDetails({ key, data , tp}) {
      
      const [kmUsed, setkmUsed] = useState([])
      const handleOnChange = (event) => {
            const kmAct = document.getElementById("kmAct").value 
            //const kmBef = document.getElementById("kmBef").innerHTML
            console.log("antes",kmUsed)
            setkmUsed(kmAct-data.mileage)
            
      }
      console.log("despues",kmUsed)

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
                        <div className="second-column"><input id="kmAct" type="number" placeholder="Ingresa el kilometraje actual" onChange={handleOnChange}></input></div>
                        <div id="kmBef" className="third-column">{kmUsed}</div>
                  </div>
            )
            }
            </>
      )
}
