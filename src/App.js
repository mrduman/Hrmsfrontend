
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './layouts/Footer';
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">

      <Navi />

      <Container className="main">

        <Dashboard />

      </Container>

      <Footer />

    </div>
  );
}

export default App;
