import { Suspense } from 'react'
import './App.css'
import Products from './components/Products'
import type { Types } from './types/types'
import Navbar from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'

const ProductIconsData = async ():Promise<Types[]> => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
  const data = await res.json()
  return data
}

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<li>loading...</li>}>
    <Products ProductIconsData={ProductIconsData()}></Products>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App