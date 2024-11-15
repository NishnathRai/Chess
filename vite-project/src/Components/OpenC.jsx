import {useState} from "react";


// eslint-disable-next-line react/prop-types
function OpenC( { ans , que }) {
    let [ open, setOpen ] = useState(false);
    return (<>
        <div onClick={()=>{setOpen(!open)}} className="hedd">
            <span style={{paddingRight:"5px"}}  > {que}</span> <span> { open ? "⬆" : "⬇" } </span>
        </div>
    {
        open ? <div className="hedd op" >{ans}</div> : <></>
    }
        </>);
}

export default OpenC;