import { useState, useEffect } from "react";
import CardW from "../components/card_work";
import Nav from "../components/nav"

export default function Admin() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data/user/all");
      const result = await res.json();
      setUsers(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <div class="row">
        {users &&
          users.map((item, i) => {
            return (
              <>
                <CardW data={item} />
              </>
            );
          })}
      </div>
      <div className="body-adminwork">
        <Nav />

        <div className="content-newwork">
          <div className="new-work">
            <h2>Nueva Obra</h2>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Transporte
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Material
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Detalles
                </a>
              </li>
            </ul>
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
            <h2>Lista</h2>
            <div className="content-list">
              <div className="item-list">
                <h5>Transporte</h5>
                <p>x2</p>
              </div>
              <div className="item-list">
                <h5>Material</h5>
                <p>x2</p>
              </div>
              <div className="item-list">
                <h5>Pintura</h5>
                <p>3 litros</p>
              </div>
              <div className="item-list">
                <h5>Tiñer</h5>
                <p>1000 litros</p>
              </div>
            </div>
            <div className="btn-agregar">
              <button class="btn btn-primary" type="button">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
 <div className="body-adminwork">

            <Nav />

            <div className="content-newwork">
                <div className="new-work">
                    <h2>Nueva Obra</h2>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="false">
                            Transporte
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="false">
                            Material
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="false">
                            Detalles
                        </a>
                    </li>

                </ul>
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
                    <h2>Lista</h2>
                    <div className="content-list">
                        <div className="item-list">
                            <h5>Transporte</h5>
                            <p>x2</p>
                        </div>
                        <div className="item-list">
                            <h5>Material</h5>
                            <p>x2</p>
                        </div>
                        <div className="item-list">
                            <h5>Pintura</h5>
                            <p>3 litros</p>
                        </div>
                        <div className="item-list">
                            <h5>Tiñer</h5>
                            <p>1000 litros</p>
                        </div>
                    </div>
                    <div className="btn-agregar">
                        <button class="btn btn-primary" type="button">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
     */
