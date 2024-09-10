import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth,  } from '../Auth-config-fire/Auth-fire';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

  const navigate = useNavigate()
  const  [UserSignup, setUserSignup]  = useState({
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !UserSignup.Email || !UserSignup.Password) {
      alert('Please fill in all fields');
      return;
    }

    signInWithEmailAndPassword(Auth, UserSignup.Email, UserSignup.Password)
      .then (async(res) => {
      navigate('/')
        alert('Login successful');
      })
      .catch((error) => {
        console.error('Signup error:', error);
        alert('Signup failed: ' + error.message);
      });
  };

  return (
    <>
 <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className=" bg-white flex flex-col md:mx-auto  md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-4xl mb-1 font-medium title-font">Log in</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
     
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Email</label>
        <input
                autoComplete='off'
                  type="email"
                  id="Email"
                  name="Email"
                  value={UserSignup.Email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
      </div>
      <div className="relative mb-4">
                <label htmlFor="Password" className="leading-7 text-sm text-gray-600">Password</label>
                <input
                autoComplete='off'
                  type="password"
                  id="Password"
                  name="Password"
                  value={UserSignup.Password}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Login</button>
      <div className="flex">
      <p className='text-blue-500'>Dont have an Account ? </p><Link to='/signup'>Signup</Link>   
      </div>
    </div>
  </div>
</section>

      
    </>
  )
}

export default Login
