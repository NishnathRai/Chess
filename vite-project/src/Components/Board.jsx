import Box from "./Box.jsx";
import {useContext} from "react";
import data from "../Context/data.js";

// eslint-disable-next-line react/prop-types
function Board({vertical,theme,setWin}) {
    var black = true;

    let { arr }=useContext(data);

    return (<>
        <div
            style={{
                transform: vertical ? "translate(-50%, -50%)" : "translate(-50%, -50%) rotate(-90deg)",
                borderColor: theme ? "#66594A" : "#D8CAB7"
            }}
            className="board"
        >
            {arr?.map((innerArr,x) => {
                var temp = black;
                var ans = innerArr.map((val, i) => {
                    black = !black;
                    return <  Box setWin={setWin} x={x} y={i} black={black} val={val} key={i}/>;
                })
                black = !temp;
                return ans;
            })}
        </div>
    </>)
}
export default Board;