import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
