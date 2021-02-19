export default function Card({ data }) {
   let i=0;
    return (
       <>
          <div class="col-sm-6 tarjeta" onClick={()=>{             
             console.log(i);
             i++;
          }}>
             <div class="card">
                <div class="card-body">
                   <div class="float-left rounded-circle" style={{ background: 'red' }}>
                      A
                   </div>
                   <div class="message">
                      <h5 class="card-title">{data.name}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{data.email}</h6>
                      <img src={data.image}/>
                   </div>
                </div>
             </div>
          </div>
       </>
    )
 }
 