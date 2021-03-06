import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
// import mapStyles from '../../mapStyles';
import useStyles from './Styles';
const Map=()=>{
    const classes = useStyles();
    const isMobile=useMediaQuery('(min-Width:600px)')
    const coordinates = { lat:0 , lng:0 };
    return(
        <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyCAtBLkhMusfujYoxZg4phjU6TSpuDS5zs'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChildClick={''}
          onChildClick={''}>
          </GoogleMapReact>
          </div>
    
    )

}
export default Map