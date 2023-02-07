import React from "react";
const date = new Date();
const year = date.getFullYear();

function Footer(){
    return <div>
        <p>Copyrights &Copyrights; {year}</p>
    </div>
}
export default Footer;