function task5(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j<i+1; j++) {
            if ( (arr[i] + arr[j]) == val){

                console.log("Integer cutleri "+ arr[i]+ "ve " + arr[j])
            }
        }

    }
}
task5([1 ,2 ,3 ,4 , 5] , 5);
