import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth, signOut } from '../Auth-config-fire/Auth-fire';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = ({ cartQuantity, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserLogout = () => {
    signOut(Auth)
      .then(() => {
        handleLogout(); // Clear cart and log out the user
        alert('Logout successful');
        navigate('/login'); // Redirect to login page
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <header className="text-gray-600 body-font  bg-white w-full -mt-4 z-[999]">
      <div className="container mx-auto flex p-5 flex-row justify-between items-center">
        <Link className="flex title-font font-medium items-center text-gray-900" to='/'>
          <img
            src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/fashion-logo-design.jpg"
            alt="logo"
            className="w-24"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 focus:outline-none transition duration-300 ease-in-out"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav className="xs:hidden sm:hidden md:flex items-center space-x-5">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/about" className="hover:text-gray-900">All Product</Link>
          <Link to="/mens" className="hover:text-gray-900">Mens</Link>
          <Link to="/kids" className="hover:text-gray-900">Kids</Link>

          {user ? (
            <>
              <button className="px-2 py-2 bg-black text-yellow-500">{user.displayName || user.email}</button>
              <button
                onClick={handleUserLogout}
                className="hover:text-gray-900 bg-red-500 px-4 py-2 rounded text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-gray-900">
              <button>Login</button>
            </Link>
          )}

          <Link to="/cart" className="hover:text-gray-900 relative">
            <button>
              <i className="fa-solid fa-cart-shopping text-3xl"></i>
              {cartQuantity > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-red-500 rounded-full">
                  {cartQuantity}
                </span>
              )}
            </button>
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-3 mt-4">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/about" className="hover:text-gray-900">All Product</Link>
          <Link to="/mens" className="hover:text-gray-900">Mens</Link>
          <Link to="/kids" className="hover:text-gray-900">Kids</Link>

          {user ? (
            <>
              <button className="hover:text-gray-900 bg-red-500 px-4 py-2 rounded text-white" onClick={handleUserLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-gray-900">
              <button>Login</button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
