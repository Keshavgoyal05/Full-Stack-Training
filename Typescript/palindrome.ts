function isPalindrome(str:string):boolean{
    var splitString:string[]=str.split("");
    var reverseArray:string[]=splitString.reverse();
    var reverseString:string=reverseArray.join("");
    if(str==reverseString){
        return true
    }
    return false
}

console.log(`343 is palindrome ? - ${isPalindrome('343')}`);
