import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Components/Login/HomePage/HomePage';
import LogInPage from './Components/Login/LogIn/LogInPage';
import ResumePage from './Components/Login/Resume/ResumePage';
import Card from './Components/Login/LogIn/Card';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LogInPage />} />
          <Route path="/login" element={<Card />} />
          <Route path='/home/' element={<HomePage />} />
          <Route path='/home/resume' element={<ResumePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
