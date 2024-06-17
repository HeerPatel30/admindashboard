import './App.css';
import Home from './Components/Page/Home/Home';
import Userlist from './Components/Page/Userlist/Userlist';
import Sidebar from './Components/Sidebar/Sidebar';
import Toolbar from './Components/Toolbar/Toolbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toolbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userlist" element={<Userlist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
