function analyzeArray(array) {
    if (validArray(array)) {
        return {
            average: Math.floor(array.reduce((a, b) => a + b) / array.length),
            min: Math.min(...array),
            max: Math.max(...array),
            length: array.length,
        }
    }
    else {
        return "Array must contain only numbers";
    }
}

function validArray(array) {
    for (let item of array) {
        if (typeof item != "number") {
            return false;
        }
    }
    return true;
}

export {analyzeArray};