import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Componenets/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then(response => response.json())
      .then(data => setWatches(data));
  }, [])
  // locally array of object create kore loop thriugh kore data display or "in memory object"

  // const watches = [
  //   {id:1, name:"casio",price:500},
  //   {id:2, name:"guess",price:5000},
  //   {id:3, name:"bvlgari",price:1500},
  //   {id:4, name:"fossil",price:550},
  //   {id:5, name:"timex",price:700},
  //   {id:6, name:"cartier",price:1300},
  // ]

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 9",
  //     brand: "Apple",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     name: "Galaxy Watch 6",
  //     brand: "Samsung",
  //     price: 349
  //   },
  //   {
  //     id: 3,
  //     name: "Forerunner 965",
  //     brand: "Garmin",
  //     price: 599
  //   },
  //   {
  //     id: 4,
  //     name: "Fitbit Sense 2",
  //     brand: "Fitbit",
  //     price: 299
  //   },
  //   {
  //     id: 5,
  //     name: "GTS 4 Mini",
  //     brand: "Amazfit",
  //     price: 99
  //   }
  // ];


  return (
    <>
      <h1>React Core Concept-3</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
