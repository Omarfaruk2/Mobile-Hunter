
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Pages/Header/Header'
import ManageAllProducts from './Pages/ManageAllProducts/ManageAllProducts'
import AllProdictsmanage from './Pages/AllProdictsManage/AllProdictsmanage'
import Footer from './Pages/Footer/Footer'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import ProdictsDetails from './Pages/ProductsDetails/ProdictsDetails'
import AddItems from './Pages/AddItems/AddItems'
import MyItems from './Pages/MYItems/MyItems'
import Notfound from './Pages/NOtFound/Notfound'
import Blogs from './Pages/Blogs/Blogs'
import Myitem from './Pages/Myitem/Myitem'

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageAllProducts" element={
          <RequireAuth>
            <ManageAllProducts />
          </RequireAuth>
        } />
        <Route path="/inventory" element={
          // <RequireAuth>
          <AllProdictsmanage />
          // </RequireAuth>
        } />
        <Route path="/inventory/:id" element={
          // <RequireAuth>
          <ProdictsDetails />
          // </RequireAuth>
        } />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/myitem" element={<Myitem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/additems" element={<AddItems />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
