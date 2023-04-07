import logo from './logo.svg';
import './App.css';
import CreateBook from './components/CreateBook';
import Frontpage from './components/Frontpage';
import{
  Routes,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import Showbooks from './components/Showbooks';
import Bookdetails from './components/Bookdetails';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Frontpage/>}></Route>
      <Route exact path="/create" element={<CreateBook/>}></Route>
      <Route exact path="/show" element={<Showbooks/>}></Route>
    <Route exact path="/show/:id" element={<Bookdetails/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
