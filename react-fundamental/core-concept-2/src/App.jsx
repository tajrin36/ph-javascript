import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import './index.css'
import Team from './Team';
import User from './User';


function App() {

  //!event handler using normal function 
  function handleClick() {
    alert("First button clicked");
  }

  //!event handler using arrow function
  const handleClick2 = () => {
    alert("Second button clicked");
  }

  //!jodi function er moddhe kono perameter thake taile onclick a arrow function use kore call korte hobe.
  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1 className='text-4xl font-semibold text-center mt-3'>React core concept-2</h1>

      <div className='flex flex-row gap-3 items-center justify-center mt-3'>
        <button onClick={handleClick} className="btn btn-accent">First</button>
        <button onClick={handleClick2} className="btn btn-primary">Second</button>
        {/* we can also set event handler in the element onclick */}
        <button onClick={() => { alert("Third button clicked!") }} className="btn btn-secondary">Third</button>
        <button onClick={() => { addToFive(10) }} className='btn btn-success'>Add 5</button>
      </div>

      <Counter></Counter>

      <Team></Team>

      <User></User>

      <Friends></Friends>


    </>
  )
}

export default App
