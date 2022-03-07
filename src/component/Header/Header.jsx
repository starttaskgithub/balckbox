import { AppBar, InputBase, Typography } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React from "react";
 import SerchIcon from '@material-ui/icons/Search'
import { Autocomplete } from '@react-google-maps/api';
import { Toolbar , Box } from "@material-ui/core";
 import useStyle from './Styles';
const Header=()=>{
      const classes=useStyle();
      return(
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Typography varian="h5" className={classes.title}>
        Travel Advisor
        </Typography>
        
        <div className={classes.serch}>
        <div className={classes.serchIcon}>
        <SerchIcon />
        <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
        </div>
        
        </div>
        </Toolbar>
        </AppBar>
    
        )

}
export default Header