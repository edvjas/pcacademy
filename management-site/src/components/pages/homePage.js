import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../layout/navBar';

const HomePage = () => (
  <div>
    <NavBar/>
    <h1>Home page</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default HomePage;
