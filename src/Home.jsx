import { useState } from 'react';
import './style.css';


function Home(props){
    let [color, setColor] = useState("#ffffff");
    let newColor = ()=> setColor('#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6));
    return(
        <div className="container">
            <h1>Random color generator</h1>
            <button onClick={newColor} >Generate</button>
            <div className="color-container">
                <div className="cards c1" style={{backgroundColor:color}} >
                </div>
                <div className="cards c2" style={{backgroundColor:color}} ></div>
                <div className="cards c3" style={{backgroundColor:color}}></div>
                <div className="cards c4" style={{backgroundColor:color}}></div>
                <div className="cards c5" style={{backgroundColor:color}}></div>
            </div>
        </div>
    )
}
export default Home;