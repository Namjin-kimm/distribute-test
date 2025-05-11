import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';

function App() {

  return (
    <>
    
    <Link to={"/board"}>
      <Typography sx={{fontWeight: 500}}>
        게시판
      </Typography>
    </Link>

    <Router/>
    </>
  )
}

export default App
