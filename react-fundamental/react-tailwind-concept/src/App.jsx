import './App.css'
import Chart from './components/Chart'
import Navbar from './components/Navbar'
import PriceOptions from './components/PriceOptions'
import SelfNavbar from './components/SelfNavbar'

function App() {


  return (
    <>
      <div className='md:mx-auto md:container'>
        {/* <Navbar></Navbar> */}
        <SelfNavbar></SelfNavbar>
      </div>

      <div className='md:container md:mx-auto'>
        <PriceOptions></PriceOptions>
      </div>

      <div className='md:container md:mx-auto'>
        <Chart></Chart>
      </div>
    </>
  )
}

export default App
