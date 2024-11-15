let arr=[
    {
        key:"E",
        noOfMoves:10,
        dir:[[1,0],[-1,0],[0,1],[0,-1]]
    },
    {
        key:"C",
        noOfMoves:10,
        dir:[[1,1],[-1,-1],[1,-1],[-1,1]]
    },
    {
        key:"B",
        noOfMoves:1,
        dir:[[1,0]]
    },
    {
        key:"W",
        noOfMoves:1,
        dir:[[-1,0]]
    }
    ,{
        key:"H",
        noOfMoves:1,
        dir:[[2,1],[1,2],[-1,2],[-2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]
    },
    {
        key:"K",
        noOfMoves:1,
        dir:[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]]
    }
];

function keyFunction(key){
    for(let i=0;i<arr.length;i++){
        if(arr[i].key===key) {
            return arr[i];
        }
    }
    return null;
}
export default  keyFunction;