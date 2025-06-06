import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contact, Blog, Garden, Talks } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Garden" element={<Garden />} />
        <Route path="/Talks" element={<Talks />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;