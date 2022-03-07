import react, {useState} from "react";import { Route, } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Button } from "../Button";

// import './Cards.css'
function LogIn(){

    return(
        <div>

<h1>
USERNAME
</h1>
<div className="bx-one">
<input type="text" placeHolder="email" />
</div>
<h1>
PASSWord
</h1>    
<div className="bx-two">
<input type="text" placeHolder="email" />
</div>  
<div className="lg-btn">
<Button className="border">LOGIN</Button>
</div>      
        </div>
    )
}export default LogIn