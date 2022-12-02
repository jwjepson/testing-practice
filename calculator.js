const calculator = {
    add(num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            return "Must provide two numbers";
        }
        return num1 + num2;
    },
    subtract(num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            return "Must provide two numbers";
        }
        return num1 - num2;
    },
    multiply(num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            return "Must provide two numbers";
        }
        return num1 * num2;
    },
    divide(num1, num2) {
        if (typeof num1 != "number" || typeof num2 != "number") {
            return "Must provide two numbers";
        }
        return num1 / num2;
    },
}

export {calculator};