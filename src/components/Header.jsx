import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-contente-between px-3'>
        <div className='container'>
            <h1>
              <Link to="/" className="text-body-emphasis">
                CRUD - React, Redux, Rest API & Axios
              </Link>
            </h1>
        </div>

        <Link to="/productos/nuevo"
            className='btn btn-warning fw-bold nuevo-post d-block d-md-inline-block'
        >Agregar Producto &#43;</Link>
      
    </nav>    
  )
}

export default Header
