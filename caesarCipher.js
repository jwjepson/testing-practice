function caesarCipher(string) {
    if (typeof string != "string") {
        return "Must provide a string";
    }
    else {
        let cipher = "";
        for (let i = 0; i < string.length; i++) {
            // Wrap from z to a
            if (string.charAt(i) == "Z" || string.charAt(i) == "z") {
                cipher += String.fromCharCode(string.charCodeAt(i) - 25);
            }
            // Check whether character is a letter
            else if (string.charAt(i).match(/[a-zA-Z]/)) {
                cipher += String.fromCharCode(string.charCodeAt(i) + 1);
            }
            // Keep punctuation marks the same
            else {
                cipher += string.charAt(i);
            }
        }
        return cipher;
    }
}

export {caesarCipher};