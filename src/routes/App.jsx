import './App.css'
import logo from '../assets/logo.png'

function App() {
  return (
    <div className='App'>
      <div className="Navbar">
        <svg className="loopWrapper" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 14 26">
          <g className="loop">
            <path stroke="#D9D9D9" strokeWidth="2" d="M2.5 13c-3.265 5.224.49 12 6.651 12H14" className='loopPart' id="loopBtm" />
            <path stroke="#D9D9D9" strokeWidth="2" d="M2.5 13C-.765 7.776 2.99 1 9.151 1H14M2.5 13c.131 2.758 2.242 4.869 5 5 2.9.138 5.5-2.097 5.5-5s-2.6-5.138-5.5-5c-2.758.131-4.869 2.242-5 5Z" className='loopPart' id="loopTop" />
          </g>
        </svg>
        <p id="navlocation">you are here...</p>
        <a href='/'>
          <h4 className='selected'>Home</h4>
        </a>
        <h3 id="title">varrora's web</h3>
      </div>
      <img draggable="false" id="logo" src={logo} />
    </div>
  )
}

export default App
