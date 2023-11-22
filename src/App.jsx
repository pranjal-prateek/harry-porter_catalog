import { BrowserRouter as Router,Routes,Route  } from "react-router-dom"
import { Navbar,Home } from "./components"

function App() {


  return (
      <div className='m-0 p-0 text-white'>
        <Router>
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/spell:id' element={<h1>Hello2</h1>}></Route>
            <Route path='/*' element={<h1>error</h1>}></Route>
          </Routes>
        </Router>
      </div>
  )
}

export default App
