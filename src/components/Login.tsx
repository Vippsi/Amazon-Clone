import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/login.css';
import { fireAuth } from '../firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const register = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(fireAuth)
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth: any) => {
  //       console.log(auth);
  //     })
  //     .catch((error: any) => alert(error.message));
  };

  return (
    <div className='login'>
      {/* <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
          alt=''
        />
      </Link> */}
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE's Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button> */}
      </div>
    </div>
  );
};

export default Login;
