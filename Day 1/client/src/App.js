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
import Navbar from './components/global/Navbar';
import NotFound from './components/global/NotFound';
import FakeStoreSingleProducts from './components/16-03/FakeStoreSingleProducts';
import Render from './components/16-03/Render';
import CurrencyConverter from './components/17-03/CurrencyConverter';
import CounterRedux from './components/20-03/CounterRedux';
import UseMemo from './components/22-03/UseMemo';

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
      {/* <Navbar /> */}
      <Routes>

        <Route path='*' element={<NotFound />} />
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
        <Route path='/fake-single-product/:id' element={<FakeStoreSingleProducts />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/render' element={<Render />} />
        <Route path='/converter' element={<CurrencyConverter />} />
        <Route path='/counter-redux' element={<CounterRedux />} />
        <Route path='/use-memo' element={<UseMemo />} />
      </Routes>

    </div>
  );
}

export default App;

// Params
// https://myntra.com/mens/12345/true/black/tshirt
// Query
// https://myntra.com/mens?color=red&material=cotton
