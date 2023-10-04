import Producto from "../components/Producto"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { obtenerProductosAction } from "../actions/productoActions"

const Productos = () => {

  const dispatch = useDispatch()

  useEffect( () => {

    const descargarProductos = () => dispatch( obtenerProductosAction() )
    descargarProductos()

  }, [])

  const productos = useSelector( state => state.productos.productos)
  const error = useSelector( state => state.productos.error)

  return (
    <>
      <h2 className='fw-bold text-uppercase text-center my-5'>Listado de Productos</h2>

      {error 
      ? <p className="p2 text-uppercase alert alert-danger text-center fw-bold"
          >hubo un error</p>        
      : null 
      }

      <table className='table table-striped'>
        <thead className='bg-primary table-primary'>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        
        <tbody>
          {productos.lenght === 0 
          ? <p>No hay productos cargados</p>
          : (productos.map( producto =>
              <Producto
                key={producto.id}
                producto={producto}
              />
            ))
          }
        </tbody>
            
      </table>
    </>
  )
}

export default Productos
