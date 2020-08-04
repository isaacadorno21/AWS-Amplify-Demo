import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
  <div>
    <h1 style={{ textAlign: 'center' }}>Testing for AWS</h1>
    <Grid container justify="center">
      <Button variant="contained" color="secondary">
        This button doesn't do anything
      </Button>
    </Grid>
  </div>,
  document.getElementById('root')
);