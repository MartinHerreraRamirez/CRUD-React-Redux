import { useHistory } from "react-router-dom"
import { eliminarProductoAction, obtenerProductoEditarAction } from "../actions/productoActions"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"

const Producto = ({producto}) => {

  const { nombre, precio, id} = producto

  const dispatch = useDispatch()
  const history = useHistory()

  const confirmarEliminarProducto = (id) => {
       
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Los cambios no podran modificarse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'      
    }).then((result) => {

      if (result.isConfirmed) {             
        dispatch(eliminarProductoAction(id))        
      }
    })
  }

  const redireccionarEdicion = producto =>{
    dispatch(obtenerProductoEditarAction(producto))
    history.push(`/productos/editar/${producto.id}`)
  }

  return (
    <>
       <tr>
        <td>{nombre}</td>
        <td>$ {precio}</td>
        <td className="acciones">

          <button
            type="button" 
            onClick={() => redireccionarEdicion(producto)}
            className="btn btn-primary p2 mx-2"
          >Editar</button>

          <button
            className="btn btn-danger"
            onClick={() => confirmarEliminarProducto(id)}
          >Eliminar</button>

        </td>
       </tr> 
    </>
  )
}

export default Producto
