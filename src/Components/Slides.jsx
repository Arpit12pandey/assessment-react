import { Box, Slider } from '@mui/material'
import React from 'react'

export default function Slides(props) {
  return (
    <Box sx={{backgroundColor:'#FFF'}}>
  <Slider
  aria-label="Custom marks"
  defaultValue={props.defaultValue}
  step={10}
  valueLabelDisplay="auto"
  onChange={props.handlesliderchange}
  
/>
   </Box>
  )
}
