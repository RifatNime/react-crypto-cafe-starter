import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import CoinDetails from './components/CoinDetails/CoinDetails'
import Coins from './components/Coins/Coins'
import BdAddress from './components/Contact/BdAddress'
import Contact from './components/Contact/Contact'
import UsAddress from './components/Contact/UsAddress'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
         <Route path='/' element={<Homepage />} />
        {/* <Route data={data} path="/coins" element={<Coins />} /> */}
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin-details/:id" element={<CoinDetails />} />
        <Route path="/contact" element={<Contact />}>

          <Route path="bd-address" element={<BdAddress></BdAddress>}></Route>
          <Route path="Us-address" element={<UsAddress></UsAddress>}></Route>

        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
