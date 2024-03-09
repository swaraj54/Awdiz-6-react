const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const target = 8;
// output - 3
// for (var i = 0; i < array.length; i++) {
//     if (array[i] == target) {
//         return i;
//     }
// }
// Binary Search method
function BinarySearch(array, target) {
    let left = 0; // 5 7
    let right = array.length - 1; // 8

    while (left <= right) {
        const midIndex = Math.floor((left + right) / 2) // 4// 6  7
        const midValue = array[midIndex] // 5  7 8
        console.log(midIndex, midValue, "index, value")
        if (midValue === target) {
            console.log(midIndex, "got it")
            return midIndex
        } else if (midValue < target) {
            console.log("midvalue is lesser than target, left", left)
            left = midIndex + 1
            console.log("updated left", left)
        } else {
            console.log("midvalue is greater than target, right", right)
            right = midIndex - 1;
            console.log("updated right", right)
        }
    }
    return "Not found"
}

console.log(BinarySearch(array, target))
