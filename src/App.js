import './App.css';
import NavBar from './components/NavBar';
import TextModifyFrom from './components/TextModifyForm';
import About from './components/About';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar title='Text Modifier' />
      <Routes>
        <Route exact path="/" element={<TextModifyFrom />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
