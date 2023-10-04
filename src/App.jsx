import Header from "./components/Header"
import Productos from "./pages/Productos"
import NuevoProducto from "./pages/NuevoProducto"
import EditarProducto from "./pages/EditarProducto"
import Error from "./pages/Error"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Provider } from "react-redux"
import store from "./store"

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <div className="container">      
          <Switch>
            <Route exact path="/" component={Productos}></Route>
            <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>
            <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
            <Route exact path="*" component={Error}></Route>
          </Switch>

        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
