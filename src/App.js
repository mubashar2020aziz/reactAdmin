import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/Single/Single';
import New from './pages/new/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/single" element={<Single />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
