import './App.css';
// import Chart from './Components/Chart/Chart';
import Home from './Components/Page/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import Toolbar from './Components/Toolbar/Toolbar';

function App() {
  return (
    <div >
      <Toolbar/>
        <div className='container'>
            <Sidebar/>
            <Home/>
        
        </div>
    </div>
  );
}

export default App;
