function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; ++i) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let str1 = "madam";
let str2 = "daad";
let str3 = "Adhish";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));