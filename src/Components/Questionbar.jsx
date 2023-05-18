import { Box, Typography } from '@mui/material';
import React from 'react';
import question from './Questiondata';

export default function Questionbar(props) {
  return (
  <>
   <Typography variant='h3'>
<Box sx={{backgroundColor:'#FFF'}}>
       {` This is question number ${props.score} `}  
       <Box sx={{backgroundColor:'#FFF'}}>{question[props.score]}</Box>  
</Box>
</Typography>

  </>
  )
}
