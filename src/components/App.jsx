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
        <Footer />
    </div>
}
export default App;