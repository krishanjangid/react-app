import React from "react";
import Cards from "./Cards";
import Contacts from "./Contacts";
import Images from "./Images";


function App(){
    return <div>
        <div>
    <h1 className='heading'>My Contacts</h1>
    <Images img= {'https://content.presspage.com/uploads/1369/1920_boakye-3.jpg'}/>
    <Cards 
    name = {Contacts[0].name}
    imgsrc = {Contacts[0].imgsrc}
    phone = {Contacts[0].phone}
    email = {Contacts[0].email}
    />
     <Cards 
    name = {Contacts[1].name}
    imgsrc = {Contacts[1].imgsrc}
    phone = {Contacts[1].phone}
    email = {Contacts[1].email}
    />
     <Cards 
    name = {Contacts[2].name}
    imgsrc = {Contacts[2].imgsrc}
    phone = {Contacts[2].phone}
    email = {Contacts[2].email}
    />
    </div>
    </div>
}
export default App;