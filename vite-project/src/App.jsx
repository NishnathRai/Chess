// style={ (theme) ? {backgroundColor: "white" } : { backgroundColor: "#242424" } }
import "./App.css";
import {useState} from "react";
import Nav from "./Components/Nav.jsx";
import Board from "./Components/Board.jsx";
import data from "./Context/data.js";
import move from "./Context/move.js";
import  turnC from "./Context/turnC.js";

function App() {
    ////int vertical or horizontal
    let [vertical, setVertical] = useState(true);
    ///Foe theam
    var [theme, setTheme] = useState(false);
    /////for boards
    var [arr, setArr] = useState(initialPositions);
    ////from to points
    var [fromTo, setFromTo] = useState({from:{x:-1,y:-1},to:{x:-1,y:-1}});
   ////turnC
    let [turn, setTurn] = useState("W");
    ///Won
    let [win, setWin ] = useState("");

    return (

        <turnC.Provider value={{turn:turn,setTurn:setTurn} } >
        <data.Provider value={{arr:arr ,setArr:setArr }} >
        <move.Provider value={{ fromTo:fromTo , setFromTo:setFromTo } }>

        <div className="window"
             style={!theme ? {backgroundImage: "linear-gradient(#66594A,black)"} : {backgroundImage: "linear-gradient(#D8CAB7,white)"}}>


            <Nav theme={theme} setTheme={setTheme} vertical={vertical} setVertical={setVertical}/>


            { win.length===0 ? < Board setWin={setWin} theme={theme} vertical={vertical}  setArr={setArr} /> :
                <>{ (win==="White") ?
                        <svg className="ans" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path fill="#ffffff"
                                  d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/>
                        </svg>

                        :
                        <svg  className="ans" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 576 512">
                            <path fill="#000000"
                                  d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/>
                        </svg>
                }
                <h1 className="msg" style={ (win==="White") ? { color:"black" } : { color:"white" } }   >{win} Win 🗡️ </h1></>
            }


            <h1 className="bottom" style={(theme) ? {color: "black"} : {color: "white"}}>
                Brought to life by Nishnath Rai
            </h1>

            {(turn === "B") ? <svg className="left" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 448 512">
                <path fill="#000000"
                      d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0 28.9-159c2.1-11.3 3.1-22.8 3.1-34.3l0-14.7C416 86 330 0 224 0L83.8 0C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l370.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432 64 432 22.6 473.4z"/>
            </svg> : <svg className="left" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512">
                <path fill="#ffffff"
                      d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0 28.9-159c2.1-11.3 3.1-22.8 3.1-34.3l0-14.7C416 86 330 0 224 0L83.8 0C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l370.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432 64 432 22.6 473.4z"/>
            </svg>}

        </div>

        </move.Provider>
        </data.Provider>
        </turnC.Provider>
    )
}

export default App;


////////////
// Elephant - EB || EW
// Camel - CB || CW
// soldier SB || SW
// Horse - HB || HW
// King - KB || KW
// Queen - QB || QW

var initialPositions = [
    // Black side (top)
    ["EB", "HB", "CB", "QB", "KB", "CB", "HB", "EB"], // First row for Black pieces
    ["SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB"], // Second row for Black soldiers

    // Empty middle rows
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],

    // White side (bottom)
    ["SW", "SW", "SW", "SW", "SW", "SW", "SW", "SW"], // Second row for White soldiers
    ["EW", "HW", "CW", "QW", "KW", "CW", "HW", "EW"]  // First row for White pieces
];
