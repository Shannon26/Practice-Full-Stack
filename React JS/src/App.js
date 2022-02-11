import { Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Nav from './component/Nav'
import Create from './component/Create'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
