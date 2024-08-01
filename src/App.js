import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import MainComponent from "./Components/LandingPage/MainComponent";
import './Scrollbar.css'; 


function App() {
  return (
    <div className="w-full h-screen bg-slate-900">
       <Header/>
       <MainComponent/>
       <Footer/>
    </div>
  );
}

export default App;
