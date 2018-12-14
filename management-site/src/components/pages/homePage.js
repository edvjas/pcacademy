import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../layout/navBar';
import MainPage from '../pages/mainPage/mainPage';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const HomePage = (props) => (
  <div>
    <NavBar/>
    <h1>Home page</h1>
    <div >
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Button variant="contained" color="default">
            <Link to="/login">Login</Link>
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </Grid>
      </Grid>
    </div>

  </div>
);

export default HomePage;
