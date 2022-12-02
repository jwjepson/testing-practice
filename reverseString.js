function reverseString(string) {
    if (!string) {
        return "No argument provided";
    }
    else {
        let stringSplit = string.split("");
        let reverseArray = stringSplit.reverse();
        let reversedString = reverseArray.join("");
        return reversedString;
    }
}

export {reverseString};