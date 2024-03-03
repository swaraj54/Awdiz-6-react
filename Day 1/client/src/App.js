import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Counter from './components/02-03/Counter';
import Welcome from './components/03-03/Welcome';
import EffectOne from './components/03-03/EffectOne';
import EffectTwo from './components/03-03/EffectTwo';
import EffectThree from './components/03-03/EffectThree';
import EffectFour from './components/03-03/EffectFour';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* Write a route for register */}
        <Route path='/counter' element={<Counter />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/effect-1' element={<EffectOne />} />
        <Route path='/effect-2' element={<EffectTwo />} />
        <Route path='/effect-3' element={<EffectThree />} />
        <Route path='/effect-4' element={<EffectFour />} />
      </Routes>
    </div>
  );
}

export default App;
