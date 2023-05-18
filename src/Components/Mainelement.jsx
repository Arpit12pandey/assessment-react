import {Box} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Progressbar from './Progressbar'
import Questionbar from './Questionbar'
import Slides from './Slides'


export default function Mainelement() {
  const[score,setscore]=useState(0);
  const[percent,setpercent]=useState(20);
  const[def,setdef]=useState(20);
  const handlesliderchange=()=>{
    setpercent(percent+10);
    if(score<2){
setscore(score+1);
setpercent(percent+20);
setdef(0);
    }
    else{
      setscore(0);
      setpercent(20);
      
    }
  }
  return (      
    <Box sx={{backgroundColor:'#FFF',height:'15cm',width:'12cm',borderRadius:'22px',marginTop:'20px'}}>
<Progressbar percent={percent}/>
<Questionbar score={score}/>
<Slides defaultValue={def} handlesliderchange={handlesliderchange}/>  
  </Box> 
  )
}
