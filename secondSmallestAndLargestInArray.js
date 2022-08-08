function secondSmallestAndLargest(myArr) {
    //sorting the array
    myArr = myArr.sort( (a,b) => a -b);
    //defining new array - result and adding only unique elements from myArr
    let result = [myArr[0]];
    for( let i = 1; i < myArr.length; i++) {
        if(myArr[i] !== result[result.length -1]) {
            result.push(myArr[i]);
        }
    }
    //result is now a unique sorted array
    console.log(`this is the sorted uniue array: ${result}`);
    //returning the second and the second-last values
    return `second smallest: ${result[1]}
second largest: ${result[result.length-2]}`;
}

//test
let arr = [54, 2, 1, 3, 1, 2, 1, 10, 10];
console.log(secondSmallestAndLargest(arr));