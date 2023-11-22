import { BrowserRouter as Route, Router, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
      <div className=' m-0 p-0 bg-black text-white font-sans'>
        <Router>
          <Routes>
            <Route index element={<div>Hello World</div>}></Route>
            <Route path="spell/:name" element={<div>Hello World2</div>}></Route>
            <Route path="/*">{<div>Error</div>}</Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
