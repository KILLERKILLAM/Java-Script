
function Pymarid(rows)
{
    str="";
    for(i=rows; i>=1; --i)
    {
        for(j=1; j<=i; ++j)
        {
            str=str+i;
        }
        str=str+"\n";
    }
    console.log(str);
    return str;
}


function main() {
    const testSuite = [
    {
        input1: 5,
        result: "55555\n4444\n333\n22\n1\n"
    },
    ]
    
    return testSuite.every(testSet => testSet.result === Pymarid(testSet.input1))
    }
    
    const testsPassed = main()
    console.log(testsPassed)
