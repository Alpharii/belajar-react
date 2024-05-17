import './App.css'
import Button from './components/Elements/Button/Button.jsx'

function App() {
  return(
    <div className='flex gap-x-3 justify-center'>
      <Button variant='blue'>Login</Button>
      <Button variant='slate'>Register</Button>
      <Button variant='red'>Log Out</Button>
    </div>
  )
}

export default App
