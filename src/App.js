import logo from './logo.svg';
import './App.css';

function App() {
  const listaDatos = [
    { id:"1", nombre: "Sistema de Control de Reservas", fecha: "11/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022" },
    { id:"2", nombre: "Sistema de Control de Inventarios", fecha: "11/12/2021", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022" },
    { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fecha: "11/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022" },
    { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022" },
    { id:"5", nombre: "Sistema de Control de Temperatura", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022" }
  ];

  return (
    <div>
    
      <div className="container">
        <div className="card mt-lg-5">
            <div className="card-body">
                <button className="btn btn-success float-sm-end">Registrar Novedad</button>
                <h3>Dashboard</h3>
                <h5 className="text-muted">Bienvenido al sistema</h5>
            </div>
        </div>
        <div className="list-group mt-lg-5">
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
                <button className="btn btn-sm btn-danger float-sm-end mx-lg-1">Borrar</button>
                <button className="btn btn-sm btn-success float-sm-end">Editar</button>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-muted">And some muted small print.</small>
                <button className="btn btn-sm btn-danger float-sm-end mx-lg-1">Borrar</button>
                <button className="btn btn-sm btn-success float-sm-end">Editar</button>              
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-muted">And some muted small print.</small>
                <button className="btn btn-sm btn-danger float-sm-end mx-lg-1">Borrar</button>
                <button className="btn btn-sm btn-success float-sm-end">Editar</button>    
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-muted">And some muted small print.</small>
                <button className="btn btn-sm btn-danger float-sm-end mx-lg-1">Borrar</button>
                <button className="btn btn-sm btn-success float-sm-end">Editar</button>                    
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-muted">And some muted small print.</small>
                <button className="btn btn-sm btn-danger float-sm-end mx-lg-1">Borrar</button>
                <button className="btn btn-sm btn-success float-sm-end">Editar</button>                
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-muted">And some muted small print.</small>
                <button className="btn btn-sm btn-danger float-sm-end mx-lg-1">Borrar</button>
                <button className="btn btn-sm btn-success float-sm-end">Editar</button>    
            </a>                                        
          </div>
          <div className="row">
              <div className="col-12 text-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
              </div>
          </div>       
    </div>
      <footer className="bg-dark text-white mt-5">
          <div className="container">
              <div className="card bg-dark">
                  <div className="card-body">
                      <h2>Republica de Colombia</h2>
                      <h4>Ministerio de las TIC</h4>
                      <p className="mb-1">Dirección: Av 000 No. 000 - 000</p>
                      <p className="mb-1">Teléfono: 000 - 0000</p>
                      <p className="mb-1">Bogotá - Colombia</p>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
