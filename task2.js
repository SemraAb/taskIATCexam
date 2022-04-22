function task2() {
    let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
    letterArray = [];
    numberArray = [];
    for (var i = 0; i < arr.length + 1; i++) {
        if (typeof (arr[i]) === "number") {
            numberArray.push(arr[i])
        }
        else if (typeof (arr[i]) === "string") {
            letterArray.push(arr[i])
        }

    }
    console.log(letterArray)
    console.log(numberArray)
    let newArr = numberArray.concat(letterArray);
    console.log(newArr)
}
task2();