import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AllProduct from './Pages/AllProduct';
import Mens from './Pages/Mens';
import Kids from './Pages/Kids';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import { Auth } from './Auth-config-fire/Auth-fire';
import PrivateRoute from './Components/PrivateRoutes';
import Productdetails from './Components/Productdetails';

const App = () => {
  const [UserName, setUsername] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(() => {
    // Load cart from localStorage on initial render
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(selectedProduct));
  }, [selectedProduct]);

  const AddtoCart = (product) => {
    setSelectedProduct((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setSelectedProduct((prev) => prev.filter((item) => item.id !== id));
  };

  const totalQuantity = selectedProduct.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername('');
      }
    });
  }, []);

  // Handle Logout and clear cart
  const handleLogout = () => {
    Auth.signOut()
      .then(() => {
        setUsername('');
        setSelectedProduct([]); // Clear the cart when user logs out
        localStorage.removeItem('cart'); // Remove cart from localStorage
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartQuantity={totalQuantity} UserName={UserName} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <AllProduct AddtoCart={AddtoCart} />
              </PrivateRoute>
            }
          />
          <Route
            path="/mens"
            element={
              <PrivateRoute>
                <Mens />
              </PrivateRoute>
            }
          />
          <Route
            path="/kids"
            element={
              <PrivateRoute>
                <Kids />
              </PrivateRoute>
            }
          />
            <Route path="/product/:id" element={<PrivateRoute><Productdetails /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart product={selectedProduct} removeFromCart={removeFromCart} />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
