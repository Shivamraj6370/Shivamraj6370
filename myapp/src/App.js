
import './App.css';
import Book from './Component/Book';
import Dasboard from './Component/Dasboard';
import EditBook from './Component/Editbook';
import Login from './Component/Login';
import Deletebook from './Component/Deletebook';
import { Route, Routes } from 'react-router';
import Image from './Component/Image';
function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="Dasboard" element={<Dasboard/>} />
        <Route path="Book" element={<Book/>} />
        <Route path="Image" element={<Image/>} />
        <Route path="EditBook/:id" element={<EditBook/>} />
        <Route path="Deletebook/:id" element={<Deletebook/>} />
      </Routes>
   
    </div>
  );
}

export default App;
