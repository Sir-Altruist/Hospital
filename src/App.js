import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
