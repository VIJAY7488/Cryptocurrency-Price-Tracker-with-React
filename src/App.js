import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import './Scrollbar.css'; 
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="w-full min-h-screen h-full bg-gray-900 text-white">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
       
       
     
    </div>
  );
}

export default App;
