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
import Register from './components/06-03/Register';
import UseReducer from './components/09-03/UseReducer';
import PropsDrilling from './components/09-03/PropsDrilling';
import { useState } from 'react';
import AllProducts from './components/10-03/AllProducts';
import FakeStoreAllProducts from './components/10-03/FakeStoreAllProducts';
import Todo from './components/115-03/Todo';

function App() {
  const [students, setStudents] = useState(["a", 'b', 'c', 'd'])
  const [counter, setCounter] = useState(1234)
  const [products, setProducts] = useState([
    { name: "Tshirt", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg", },
    { name: "Jeans", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg" },
    { name: " cap", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg" },
    { name: "Tshirt", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg", },
    { name: "Jeans", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg" },
    { name: " cap", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg" },
    { name: "Tshirt", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg", },
    { name: "Jeans", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg" },
    { name: " cap", image: "https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg" },
  ])
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
        <Route path='/register' element={<Register />} />
        <Route path='/use-reducer' element={<UseReducer />} />
        <Route path='/props-drilling' element={<PropsDrilling counter={counter} students={students} />} />
        <Route path='/all-products' element={<AllProducts awdiz={products} />} />
        <Route path='/fake-all-products' element={<FakeStoreAllProducts />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
