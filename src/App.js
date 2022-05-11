
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header'
import ManageAllProducts from './Pages/ManageAllProducts/ManageAllProducts'
import AllProdictsmanage from './Pages/AllProdictsManage/AllProdictsmanage'
import Footer from './Pages/Footer/Footer'

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/inventory" element={<M} /> */}
        <Route path="/manageAllProducts" element={<ManageAllProducts />} />
        <Route path="/inventory" element={<AllProdictsmanage />} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
