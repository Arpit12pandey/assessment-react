import React from 'react';
import './App.css';
import {Box} from '@mui/material';
import Titlebox from './Components/Titlebox';
import Mainelement from './Components/Mainelement';
function App() {
  return (
    <>
    <Box className='container'>
   <Titlebox/>
   <Mainelement/>
    </Box>
    </>
  );
}

export default App;
