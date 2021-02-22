export default function AdminWorkMaterial() {
    return (

        <div>
            <div class="form-group">
                <label for="exampleInputEmail1">Contratista</label>
                <div> <p >Esperando contratista</p>
                <span><button>Buscar</button></span></div>
               
                <small id="emailHelp" class="form-text text-muted">Elija Contratista</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Descripcion</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Fecha de inicio</label>
                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Fecha Tentativa Fin</label>
                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </div>

    )
}