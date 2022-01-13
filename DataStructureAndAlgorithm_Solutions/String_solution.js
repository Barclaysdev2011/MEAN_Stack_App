/*
longest substring without repeat characters
Given a string s, find the length of the longest substring without repeating characters.
*/ 
let s = 'abccddw';

let longestSubtring =(s)=>{
    if(s.length <=1){
        return s.length;
    }
    const seen = {};
    let left = 0, longest = 0;
    
    for(let right = 0; right < s.length; right++) {
        const previouslySeenChar = seen[s[right]];
        
        if(previouslySeenChar >= left) {
          left = previouslySeenChar + 1;
        }
        
        seen[s[right]] = right;
        
        longest = Math.max(longest, right - left + 1);
    }
    
    return longest;
}

console.log(longestSubtring(string));

/*
Valid Palindrome
*/
const text = "A man, a plan, a canal: Panama";

let isValidPalinDrome = (text)=>{
    text = text.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    let rev = '';
    for(let i=0;i<text.length;i++){
        rev +=text[i];
    }
    return rev ===text;
}

/*
check all characters unique
*/

let isUnique = (str)=>{
    if(str.length > 128){
        return false;
    }
    let char = [];
    for(let i=0; i< str.length;i++){
        let val = str.charAt(i);
        if(char[val]){
            return false;
        }
        char[val]=true;
    }
    return true;
}   
/*
check whether one edit or zero edit away if both string same in length
*/

let oneEditAway = (str1,str2) =>{
 if(str1.length === str2.length){
     return this.oneEditReplace(str1,str2);
 }
}
let oneEditReplace = (str1,str2) => {
  foundDifrrence = false;
  for(let i=0;i<str1.length;i++){
      if(str1.charAt(i) !==str2.charAt(i)){
          if(foundDifrrence){
              return false;
          }
          foundDifrrence = true;
      }
  }
  return true;
}
/*
Group Anagram
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically 
using all the original letters exactly once.
*/
const groupAnagrams = function(strs) {
    const Hashmap = {}
    
    for(let i = 0; i < strs.length; i++) {
        let reArrage = strs[i].split('').sort().join('');
        if(!Hashmap[reArrage]){
            Hashmap[reArrage]=[strs[i]];
        }else{
            Hashmap[reArrage].push(strs[i])
        }
       
    }
     return Object.values(Hashmap)
};


/*
is valid anagram

*/

const isAnagram = function(s, t) {
    s = [...s];
    t = [...t];
    s = s.sort().join('')
    t = t.sort().join('')
    return s==t;
        
};