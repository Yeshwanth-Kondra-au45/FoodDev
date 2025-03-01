import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home from './pages/Home/Home'
import Layout from "./components/Layout/Layout"
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path='/order' element={<PlaceOrder />} />
  </Route>
))
const App = () => {
  return (
    <>
     
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App