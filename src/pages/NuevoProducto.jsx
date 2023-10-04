import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { crearNuevoProductoAction } from "../actions/productoActions"
import { mostrarAlertaAction, ocultarAlertaAction } from "../actions/alertaActions"

const NuevoProducto = ({history}) => {

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)

  const dispatch = useDispatch()
 
  const alerta = useSelector(state => state.alerta.alerta)

  const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

  const submitNuevoProducto = e => {
    e.preventDefault()

    if(nombre.trim() === '' || precio <= 0){

      const alerta = {
          msg: "ambos campos son obligatorios",
          clases: "alert alert-danger fw-bold text-center text-uppercase p3"
      }  

      dispatch(mostrarAlertaAction(alerta))
      return
    }    

    dispatch( ocultarAlertaAction() )

    agregarProducto({
      nombre,
      precio
    })

    history.push('/')
  }

  return (
    <>

      <div className="row justify-content-center my-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold text-uppercase">
                Nuevo Producto
              </h2>
              
              {alerta 
              ? <p className={alerta.clases}>{alerta.msg}</p>
              : null
              }

              <form
                onSubmit={submitNuevoProducto}
              >

                <div className="form-group my-5">

                  <label 
                    htmlFor="nombre" 
                    className="fw-bold">
                    Nombre Producto
                  </label>

                  <input 
                    className="form-control"
                    type="text" 
                    name="nombre" 
                    placeholder="Ingrese Nombre Producto"
                    id="nombre" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />

                </div>

                <div className="form-group my-5">

                  <label 
                    htmlFor="precio" 
                    className="fw-bold">
                    Precio Producto
                  </label>

                  <input 
                    className="form-control" 
                    type="number" 
                    name="precio" 
                    placeholder="Ingrese Precio Producto"
                    id="precio" 
                    value={precio}
                    onChange={e => setPrecio(Number(e.target.value))}
                  />
                </div>

                <button 
                  type="submit"  
                  className="btn btn-primary fw-bold text-uppercase d-block w-100">
                  Agregar
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default NuevoProducto
