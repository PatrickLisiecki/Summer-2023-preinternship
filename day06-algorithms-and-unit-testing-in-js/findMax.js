function findMax(arr) {
    if (arr.length === 0) {
        return null;
    } 
    
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

module.exports = findMax;
