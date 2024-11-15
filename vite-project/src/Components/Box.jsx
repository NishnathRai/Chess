
import {getCoinLink} from "../assets/Coins.jsx";
import tappend from "../functions/tappend.js";
import move from "../Context/move.js";
import data from "../Context/data.js";
import {useContext} from "react";
import turnC from "../Context/turnC.js";

// eslint-disable-next-line react/prop-types
function Box({ black , val , x ,y ,setWin }) {

    let {fromTo , setFromTo} = useContext(move);
    let { arr, setArr } = useContext(data);
    let { turn , setTurn } = useContext(turnC);

    return (
        <div  style={ (fromTo.from.x===x && fromTo.from.y===y )?  {background:"#96e8e8"} : {} }  onClick={()=>{tappend(x,y,val,fromTo,setFromTo,arr,setArr,turn,setTurn,setWin)}} className={(black) ? "box-White" : "box-Black"}>
            { getCoinLink(val)!=null && <>{getCoinLink(val)}</> }
        </div>
    );
}

export default Box;