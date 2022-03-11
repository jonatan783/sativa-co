// import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import axios from 'axios';
import Grid from './Grid';

import Navbar from './Navbar';
import { persistUser } from '../state/user';

import SingleProduct from '../commons/SingleProduct.jsx';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(persistUser());
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('/api/products')
      .then(res => res.data)
      .then(products => setProducts(products.items));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Grid />}></Route>
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
