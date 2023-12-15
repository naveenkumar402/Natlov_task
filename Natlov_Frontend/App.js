import './App.css';
import Delete from './Components/Delete';
import HomePage from './Components/Home';
import Register from './Components/Register';
import Update from './Components/Update';
import ViewDetails from './Components/ViewDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update/>} />
          <Route path="/delete" element={<Delete/>} />
          <Route path='/view' element={<ViewDetails/>}/>
      </Routes>
      </div>
    </Router>  
  );
}

export default App;
