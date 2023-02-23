import './App.css';
import {Route} from "react-router-dom";
import Navbar from './components/home/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Route path="/nav" exact component={Navbar}/>
    </div>
  );
}

export default App;
