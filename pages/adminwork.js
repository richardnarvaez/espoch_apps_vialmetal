import Nav from '../components/nav'

export default function AdminWork() {
    return (
        <div className="body-adminwork">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>

            <div className="content-newwork">
                <div className="new-work">
                    <h1>Nueva Obra</h1>
                    <div className="content-work">
                        <div className="item-work"></div>
                        <div className="item-work"></div>
                        <div className="item-work"></div>
                        <div className="item-work"></div>
                        <div className="item-work"></div>
                        <div className="item-work"></div>
                    </div>
                </div>
                <div className="list-work">
                    <h1>Lista</h1>
                    <div className="content-list">
                        <div className="item-list">
                            <h5>Tsdfsdf</h5>
                        </div>
                        <div className="item-list">
                            <h5>Tsdfsdf</h5>
                        </div>
                        <div className="item-list">
                            <h5>Tsdfsdf</h5>
                        </div>
                        <div className="item-list">
                            <h5>Tsdfsdf</h5>
                        </div>
                    </div>
                    <div className="btn-agregar">
                        <button class="btn btn-primary" type="button">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}