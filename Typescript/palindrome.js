function isPalindrome(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var reverseString = reverseArray.join("");
    if (str == reverseString) {
        return true;
    }
    return false;
}
console.log("343 is palindrome ? - " + isPalindrome('343'));
