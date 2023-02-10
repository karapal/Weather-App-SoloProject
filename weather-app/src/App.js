import "./App.css";
import MainPage from "./components/MainPage";
import image from "./assets/background.jpg"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <div
        style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"  }}
      >
        
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage dispatch={dispatch} />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
  );
}

export default App;
