/*
Climbing Stairs
*/
const climbStairs = function(n) {
    if(n<0){
        return 0;
    }else if(n===0){
        return 1;
    }else{
        return climbStairs(n-1)+climbStairs(n-2)+climbStairs(n-3)
    }
};

/*
Find Missing number
*/
let missing_Number =(arr)=>{
    let sum =0;
    for(let i in arr){
        sum +=arr[i];
    }
    let len = arr.length + 1;
    let calSum = Math.floor((len*(len+1))/2);
    return calSum - sum;
   }
   
   missing_Number([2,4,1])


   /*
   coin change
You are given an integer array coins representing coins of different denominations 
and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
   */


function coinChange(coins,n){
   
    let array = Array(n+1).fill(Infinity);
    array[0]=0;
    coins.forEach(coin=>{
        for(let currentValue = coin; currentValue <=n ; currentValue++){
            array[currentValue] = Math.min(array[currentValue],array[currentValue-coin]+1)
        }
    });
   return array[n] === Infinity ? -1:array[n]
    
}




/*
Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be 
segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
*/

var wordBreak = function(s, wordDict) {
    
    let table = new Array(s.length + 1).fill(false);
    
    table[0] = true;
    
    for(let i = 0; i <= s.length; i++){
        if(table[i] === true){
			for(let word of wordDict){
				if(s.slice(i, i + word.length) === word){
					table[i + word.length] = true;
				}
			}
		}
    }
    return table[s.length]};


    /*
Word Break II
Given a string s and a dictionary of strings wordDict, add spaces in s to construct a 
sentence where each word is a valid dictionary word. Return all such possible sentences in any

    */

// this solution is half correct still need to work on 

function wordBreak (s, wordDict) {
   
    let start = 0;
    let output = '';
    while(start < s.length){
        for(let word of wordDict){
            if(s.slice(start, start + word.length)==word){
                output += word + ' ';
                s = s.slice(word.length);
                 
            }      
        }          
        start++;
    }
    return [output]

}

/*
Backspace String Compare

Given two strings s and t, return true if they are equal when both 
are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

var backspaceCompare = function(s, t) {
    s = buildString(s)
    t = buildString(t)
    if(s.length !== t.length){
        return false;
    }else{
        for(let i=0; i<s.length; i++){
            if(s[i] !== t[i]){
                return false;
            }
        }
        
    }
    
   return true;
    
};
    
var buildString = function(str){
     let array = [];
     let start = 0;
    while(start < str.length){
        if(str[start] !=='#'){
            array.push(str[start])
        }else{
            array.pop();
        }
        start++;
    }
    return array;
}



