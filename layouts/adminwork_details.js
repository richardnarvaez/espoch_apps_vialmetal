export default function AdminWorkDetails() {
    return (

        <div>
            <div className="form-group">
                <label for="exampleInputEmail1">Contratista</label>
                <div> <p >Esperando contratista</p>
                <span><button>Buscar</button></span></div>
               
                <small id="emailHelp" className="form-text text-muted">Elija Contratista</small>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Descripcion</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Fecha de inicio</label>
                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Fecha Tentativa Fin</label>
                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
        </div>

    )
}
