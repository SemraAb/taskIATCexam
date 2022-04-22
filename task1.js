function task1(input) {
    var unical = '';
    for (var i = 0; i < input.length; i++) {
        if (unical.indexOf(input[i]) == -1) {
            unical += input[i];
        }
    }

    var result = unical.length;
    return result;
}
console.log(task1('abbbcabcdefef'));