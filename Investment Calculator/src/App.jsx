
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Deck from './pages/Deck'
import Personal from './pages/Personal'
import Markets from './pages/Markets'
import Private from './pages/Private'
import Investments from "./pages/Investments"
import SendMoney from './components/SendMoney'
import Schedule from './components/Schedule'
import Assistance from './components/Assistance'



function App() {

  return (<>

<div className="phone-container">
    <div className="camera"></div>
    <div></div>
  <div className="phone-styling">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/private" element={<Private />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/international" element={<SendMoney />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/assistance" element={<Assistance />} />
      </Routes>
    </Router>
    </div>
  </div>

  </>)
}

export default App
