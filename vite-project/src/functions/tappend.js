import isValide from "./isValide.js";


function tappend(x, y, value , fromTo , setFromTo , arr, setArr , turn ,setTurn ,setWin ) {



    if(fromTo.from.x===-1 && fromTo.from.y===-1 && arr[x][y]!==""){
        if(turn===arr[x][y].charAt(1)) setFromTo({from:{x:x,y:y},to:{x:-1,y:-1}})
        console.log("tappend");
        return;
    }
    else if( fromTo.from.x!==-1 && fromTo.from.y!==-1 && fromTo.to.x===-1 && fromTo.to.y===-1 ){
        ////move  from -> to
        if(fromTo.from.x===x && fromTo.from.y===y){
            setFromTo({from:{x:-1,y:-1},to:{x:-1,y:-1}});
            return;
        }
        if(arr[x][y]!=="" && arr[x][y].charAt(1)===arr[fromTo.from.x][fromTo.from.y].charAt(1) ){
            setFromTo({from:{x:-1,y:-1},to:{x:-1,y:-1}});
            return;
        }
        if( isValide( arr[fromTo.from.x][fromTo.from.y] , fromTo.from.x,fromTo.from.y , x  , y ,arr)){
            if(arr[x][y].charAt(0)==="K") {
                setWin(""+ (turn==="W" ? "White" : "Black") );
                return;
            }
            console.log(arr[x][y]);
            setArr(setValue(arr,fromTo.from.x,fromTo.from.y,x,y));
            setFromTo({from:{x:-1,y:-1},to:{x:-1,y:-1}});
            setTurn ( turn==="W" ? "B" : "W"  );
        }
        else {
            setFromTo({from:{x:-1,y:-1},to:{x:-1,y:-1}});
        }
    }
}
export default tappend;


function setValue(arr,fromX,fromY,toX,toY){
    arr[toX][toY]=arr[fromX][fromY];
    arr[fromX][fromY]="";
    return arr;
}