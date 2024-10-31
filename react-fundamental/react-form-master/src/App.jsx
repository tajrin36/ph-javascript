import './App.css'
import Grandpa from './components/Grandpa'
// import ReuseableForm from './components/ReuseableForm'
// import HookForm from './components/HookForm'
// import RefForm from './components/RefForm'
// import SimpleForm from './components/SimpleForm'
// import StatefulForm from './components/StatefulForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('sign up data',data);
  // }

  // const handleUpdateProfileSubmit = data =>  {
  //   console.log('update data',data);
  // }


  return (
    <>
      <div className='md:mx-auto md:container text-center'>

        <Grandpa></Grandpa>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StatefulForm></StatefulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        {/* <ReuseableForm
          formTitle={'Sign Up'}
          handleSubmit={handleSignUpSubmit}
        >
          <div className="text-pink-800 text-2xl font-bold">
            <p>Sign Up</p>
            <p>Please sign up!</p>
          </div>
        </ReuseableForm> */ }
        {/* <ReuseableForm
          formTitle={'Profile Update'}
          submitBtnText='Update'
          handleSubmit={handleUpdateProfileSubmit}
        >
          <div className="text-pink-800 text-2xl font-bold">
            <p>Update Profile</p>
            <p>Always keep your profile updated!</p>
          </div>
        </ReuseableForm> */}
      </div>
    </>
  )
}

export default App
