///Here iam using Bfs algoritham to
import keyFunction from "./keyFunction.js";

function isValide (coin , fromX , fromY , desX , desY , arr) {
    /////
    if(coin.charAt(0) ==="Q"){
        let ans=false;
        let dir=keyFunction( "C"  );
        ans=dfs(dir.noOfMoves, dir.dir, fromX, fromY, desX, desY, getVisitedArr(), arr)
        dir=keyFunction( "E"  );
        ans=ans || dfs(dir.noOfMoves, dir.dir, fromX, fromY, desX, desY, getVisitedArr(), arr);
        return ans;
    }
    let dir;
    if(coin.charAt(0) ==="S") {
        dir = keyFunction(coin.charAt(1));
        return dfsForS( dir.dir, fromX, fromY, desX, desY, arr  );
    }
    else  dir=keyFunction( coin.charAt(0)  );
    return dfs(dir.noOfMoves, dir.dir, fromX, fromY, desX, desY, getVisitedArr(), arr);
}

export default isValide;


function  dfsForS( dir, fromX, fromY, desX, desY, arr ){
    if(fromX+dir[0][0] === desX && fromY+dir[0][1]===desY  ){
        if(arr[desX][desY]==="") return true;
        return false;
    }
    ////
    if(fromX+dir[0][0]===desX ){
        if(fromY+dir[0][1]+1===desY){
            if(arr[desX][desY]==="") return false;
            return true;
        }
        else if(fromY+dir[0][1]-1===desY){
            if(arr[desX][desY]==="") return false;
            return true;
        }
    }
    if( fromX===1 || fromX===6 ){
        let tempdir=[ [ dir[0][0]*2 , 0 ] ];
        if(fromX+tempdir[0][0] === desX && fromY+tempdir[0][1]===desY  ){
            if(arr[desX][desY]==="") return true;
            return false;
        }
    }
    return false;
}



////////
function dfs ( c ,dir ,fromX , fromY , desX , desY ,arr ,dataArr ){
   if(fromX===desX && fromY===desY ){
       return true;
   }
   if(c===0) return false;
   let ans=false;
   for(let i=0;i<dir.length;i++){
       if( (fromX+dir[i][0]===desX && fromY+dir[i][1]===desY)  || ( fromX+dir[i][0]>=0 && fromX+dir[i][0]<8 && fromY+dir[i][1]>=0 && fromY+dir[i][1]<8 && dataArr[fromX+dir[i][0]][fromY+dir[i][1]]==="" && !arr[fromX+dir[i][0]][fromY+dir[i][1]] ) ) {
           arr[fromX+dir[i][0]][fromY+dir[i][1]]=true;
           ans = ans || dfs(c - 1, [[ dir[i][0] , dir[i][1] ]] , fromX + dir[i][0], fromY + dir[i][1], desX, desY,arr,dataArr);
       }
   }
   return ans;
}


function getVisitedArr(){
    let ans=[];
    for(let i=0;i<8;i++){
        let temp=[];
        for(let j=0;j<8;j++){ temp.push(false); }
        ans.push(temp);
    }
    return ans;
}

