import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Toolbar from './Components/Toolbar/Toolbar';

function App() {
  return (
    <div >
      <Toolbar/>
        <div className='container'>
         
            <Sidebar/>

         
           <div className='other'>
            
            other
          </div> 
        </div>
    </div>
  );
}

export default App;
