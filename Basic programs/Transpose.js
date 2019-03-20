
function transposeOFMatrix(Arr)
{ 
    b=[];
    for (i = 0; i < Arr[0].length; i++) {
        b.push([0])
        for(j = 0; j < Arr.length; j++) {
            b[i][j] = Arr[j][i];
        }
}

return b;
}


function main() {
    const testSuite = [
    {
        input1: [ [ 1, 2, 3], [4 , 5, 6], [ 7, 8, 9 ] ],
        result: [ [ 1, 4, 7 ], [ 2, 5, 8], [ 3, 6 ,9 ] ]
    },
    {
        input1: [ [ 1, 2, 3], [4 , 5, 6] ],
        result: [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
    },
]
    
    return testSuite.every(testSet => testSet.result === transposeOFMatrix(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)