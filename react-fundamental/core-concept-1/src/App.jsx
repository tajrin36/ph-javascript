
import './App.css'
import Todo from './Todo'
import Actor from './actor'
import Singer from './singer';
import Bookstore from './Bookstore';


function App() {

  const actor = ['istiak','saad','husna'];
  const singers = [
    {id:1,name:'arjit singh',age:33},
    {id:2,name:'alif aslam',age:23},
    {id:3,name:'sreya ghoshal',age:30},
    {id:4,name:'niti mohan',age:23},
    {id:5,name:'kumar shah',age:43},
  ]
  const books = [
    {id:1,name:'CSE',price:200},
    {id:2,name:'Physics',price:100},
    {id:3,name:'EEE',price:200},
    {id:4,name:'Economics',price:300},
    {id:5,name:'Math',price:250},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <Todo
        task="learn react"
        isDone={true}>
      </Todo>
      <Todo 
        task="explore core concepts" isDone={false}>
      </Todo>
      <Todo 
        task="try jsx" 
        isDone={true}>
      </Todo>


      <Actor name="tajrin"></Actor>
      {/* uporer actor array k dynamic vabe execute korte hole ai way use korte hobe */}
      {
        // eslint-disable-next-line react/jsx-key
        actor.map(actor => <Actor name={actor}></Actor>)
      }

      {
        // eslint-disable-next-line react/jsx-key
        singers.map(singers => <Singer singers = {singers}></Singer>)
      }

      <Bookstore books={books}></Bookstore>
      {/* <Device name="laptop" price="32000"></Device>
      <Device></Device> */}


      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Person() {

  //!object theke kichu return korte hole {property.property_name}
  const person = { name: 'tajrin', age: 22, hobby: 'none' }
  return (
    <h2>
      i am {person.name} with age {person.age} and my hobby is {person.hobby}
    </h2>
  )
}

function Student() {
  const name = 'tajrin';
  const studentInfo = { age: 22, subject: 'CSE' }
  return (
    <div className='student'>
      <h2>I am a student!</h2>
      <p>name: {name}</p>
      <p>age: {studentInfo.age}</p>
      <p>subject: {studentInfo.subject}</p>
    </div>
  )

}

function Developer() {
  const developerStyle = {
    padding: '20px',
    margin: '20px',
    border: '2px solid purple',
    'border-radius': '10px',
  }
  return (
    <div style={developerStyle}>
      <h3>Developer</h3>
      <p>Coding:</p>
    </div>
  )
}

// const { name, price } = { name: "laptop", price: "32000" };
// function Device(name, price) {

//   console.log(name, price);
//   return (
//     <h2>This device :{name} price :{price}</h2>
//   )
// }

export default App
