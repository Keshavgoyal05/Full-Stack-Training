var array = [3, 5, 2, 7, 1, 5, 9, 6, 20];
console.log("Unsorted array is : " + array);
for (var i = 0; i < array.length; i++) {
    var mini = i;
    for (var j = i + 1; j < array.length - 1; j++) {
        if (array[j] < array[mini]) {
            mini = j;
        }
    }
    var t = array[i];
    array[i] = array[mini];
    array[mini] = t;
}
console.log("Sorted array is : " + array);
