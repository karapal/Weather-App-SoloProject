import "./App.css";
import MainPage from "./components/MainPage";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <div
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
