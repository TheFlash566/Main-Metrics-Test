import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastThreeDays from './components/LastThreeDays'
import LastHour from './components/LastHour'
import Layout from './components/Layout' 
import Today from './components/Today'
import Yesterday from './components/Yesterday'
import Home from './components/Home';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path='home' element={<Home />} />
            <Route path="LastHour" element={<LastHour />} />
            <Route path="lastThreeDays" element={<LastThreeDays />} />
            <Route path='today' element={<Today />} />
            <Route path='yesterday' element={<Yesterday />} />
          </Route>
        </Routes> 
    </BrowserRouter>
  )
}

export default App
