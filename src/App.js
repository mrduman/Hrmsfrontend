
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './layouts/Footer';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      
  


      <Navi />
      <Dashboard/>
      <Footer/>

      

    </div>
  );
}

export default App;
