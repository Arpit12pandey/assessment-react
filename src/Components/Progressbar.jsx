import React from 'react' 
import {Line} from 'rc-progress';
import { Box, Stack } from '@mui/material';

export default function Progressbar(props) {
  return (
    <Box sx={{padding:'14px'}}>
    <Stack direction="row" spacing={3}>
  <Line percent={props.percent} strokeColor='blue' strokeWidth={5} trailWidth={5}/>
  <Line percent={0} strokeColor='blue' strokeWidth={5} trailWidth={5}/>      
</Stack>
<Stack direction="row" spacing={3} sx={{marginTop:'14px'}}>
  <Line percent={0} strokeColor='blue' strokeWidth={5} trailWidth={5}/>
  <Line percent={0} strokeColor='blue' strokeWidth={5} trailWidth={5}/>      
</Stack>
</Box>
       
    
  )
}
