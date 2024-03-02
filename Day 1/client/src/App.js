import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Counter from './components/02-03/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* Write a route for register */}
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
