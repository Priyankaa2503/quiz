import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Result from './components/Result';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
        <Route path = "/" element = {<Home/>}></Route>  
        <Route path = "/quiz" element = {<Quiz/>}></Route>  
        <Route path = "/result" element = {<Result/>}></Route>  

         </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
