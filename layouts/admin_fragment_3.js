import Card from '../components/card'
export default function AdminF3 (){
    const datos = [
        {
           title: 'Aqui va el titulo',
           description: 'Una breve descripcion',
           price: '$00',
        },
     ]
    return (<> 
    <a className="bt-new-work" href="/adminwork">
            <h5>Nueva contra</h5> 
         </a>
    <h1>Contratistas</h1>
               <div className="div" className="row">
                  {datos.map((item, i) => {
                     return (
                        <>
                           <Card key={i} data={item} />
                        </>
                     )
                  })} 
               </div>
        
        </>)
}