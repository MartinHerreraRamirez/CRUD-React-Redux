import Swal from "sweetalert2"

const Error = ({history}) => {

    const error = () => {        
      Swal.fire({
          icon: 'error',
          title: 'Error al cargar',
          text: 'Algo salio mal',  
          showConfirmButton: false,
          timer: 1500           
      })
      history.push('/') 
  }

  return (
    <>
        {error()}  
    </>
  )
}

export default Error
