import { useState, useEffect } from "react"
import { editarProductoAction } from "../actions/productoActions"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"

const EditarProducto = () => {

  const [producto, setProducto] = useState({
    nombre: '',
    precio: ''
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const productoEditar = useSelector( state => state.productos.productoEditar)
  
  useEffect( () => {
      setProducto(productoEditar)
  }, [productoEditar]) 

  const onChangeFormulario = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }
  
  const {nombre, precio} = producto

  const submitEditarProducto = e => {
    e.preventDefault()

    dispatch(editarProductoAction(producto))

    Swal.fire({      
      icon: 'success',
      title: "El Producto se ha editado correctamente",
      showConfirmButton: false,
      timer: 1500
    })

    history.push('/')
  }

  return (

    <>  

      <div className="row justify-content-center my-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold text-uppercase">
                Editar Producto
              </h2>

              <form
                onSubmit={submitEditarProducto}
              >

                <div className="form-group my-5">

                  <label 
                    htmlFor="nombre" 
                    className="fw-bold">
                    Ingrese Nombre Producto
                  </label>

                  <input 
                    className="form-control"
                    id="nombre" 
                    type="text" 
                    placeholder="Ingrese Nombre Producto"
                    name="nombre" 
                    value={nombre}
                    onChange={onChangeFormulario}
                  />

                </div>

                <div className="form-group my-5">

                  <label 
                    htmlFor="precio" 
                    className="fw-bold"
                    >                
                    Precio Producto
                  </label>

                  <input 
                    className="form-control" 
                    id="precio" 
                    type="number" 
                    placeholder="Ingrese Precio Producto"
                    name="precio" 
                    value={precio}
                    onChange={onChangeFormulario}
                  />
                </div>

                <button 
                  type="submit"  
                  className="btn btn-primary fw-bold text-uppercase d-block w-100">
                  guardar cambios
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EditarProducto
