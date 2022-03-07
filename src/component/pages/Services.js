import React from 'react';
import '../../App.css';
import Header from '../Header/Header';
import List from '../List/List';
import Map from '../Map/Map';
import { CssBaseline,Grid } from '@material-ui/core' 
import useStyle from '../Header/Styles';

 const Services=()=>{
  const classes=useStyle();

   const eventhandler=()=>{

   }
  return(
    <div>
    
    <h1 className='services'>SERVICES,,,,,,,,,,,</h1>;
    <div className={classes.height}>
    <CssBaseline />
    <Header />
<Grid container spacing={3} style={{width:'100%'}}>
<Grid item xs={12} md={4}>
<List />
</Grid>
<Grid item xs={12} md={4}>
<Map />
</Grid>
</Grid>
    </div>
    
    </div>
  
    )
    
  
  
  

  }
  export default Services
