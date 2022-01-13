/*
Number of 1 Bits
Write a function that takes an unsigned integer 
and returns the number of '1' bits it has 
(also known as the Hamming weight).
*/
var hammingWeight = function(n) {
    
    let num = n.toString(2).split('');
    let count = 0;
    let i = 0;
    while(i < num.length){
        console.log(num.length)
        if(num[i]==='1'){
            count++;
        }
        i++;
    }
    return count;
    
};

/*
Counting bits
Given an integer n, return an array ans of length n + 1
 such that for each i (0 <= i <= n), ans[i] 
 is the number of 1's in the binary representation of i.

 Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
*/
var countBits = function(n) {
    let countBit =[0]
    let i =0;
    while(i<=n){
    countBit[i] = countBit[Math.floor(i/2)] + Math.floor(i%2)
     i++;
          }
    return countBit;
    
};

