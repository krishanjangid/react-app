import React from "react";
import Images from "./Images";
import Info from "./Info";
function Cards(props){
    return (<div className='card'>
      
    <div className='top'>
    {props.id}
    <h2 className='name'>{props.name}</h2>
    <Images
    img = {props.imgsrc}
    />
    </div>
    <div className='bottom'>
    <Info
    phone = {props.phone}
    email = {props.email}
    />
    </div>
    </div>)
}
export default Cards;