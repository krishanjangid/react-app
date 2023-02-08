import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
var ar = [
    {
        name: 'krishan',
        college: 'Subodh college',
        course: 'Mca'
    },
    {
        name: 'Prashant',
        college: 'Subodh college',
        course: 'Mca'
    },
    {
        name: 'Nishant',
        college: 'JECRC University',
        course: 'Btech'
    }
]
function App(){
    return <div>
        <Header />
        <Note name = {ar[0].name} college = {ar[0].college} course= {ar[0].course}/>
        <Note name = {ar[1].name} college = {ar[1].college} course= {ar[1].course}/>
        <Note name = {ar[2].name} college = {ar[2].college} course= {ar[2].course}/>

        <Footer />
    </div>
}
export default App;