import './App.css'
import Loop from '../components/loop'
import Logo from '../components/logo'

function App() {
  return (
    <div className='App'>
      <div className="Navbar">
        <Loop />
        <p id="navlocation">you are here...</p>
        <a href='/'>
          <h4 className='selected'>Home</h4>
        </a>
        <h3 id="title">varrora's web</h3>
      </div>
      <Logo />
    </div>
  )
}

export default App
