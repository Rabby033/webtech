import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Shop } from './pages/shop/Shop'
import { Cart } from './pages/Cart/Cart'
import { Shopstate } from './context/Shopcontext'
import Payment from './pages/payment/Payment'
import {Bank} from './pages/Bank/bank'
import {Admin} from './pages/ShopAdmin/Admin'

function App () {
  return (
    <div>
      <Shopstate>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/payment' element={<Payment/>}></Route>
            <Route path='/bank' element={<Bank/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
          </Routes>
        </Router>
      </Shopstate>
    </div>
  )
}

export default App