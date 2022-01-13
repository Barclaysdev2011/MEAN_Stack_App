/*
1)  Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

let nums = [1,3,7,9,2];
let target = 11;

let twoSum = (nums,target) =>{
    let hashMap = {};
    for(let i = 0; i<nums.length; i++){
        const checkHashMap = hashMap[nums[i]];

        if(checkHashMap>=0){
            return [checkHashMap,i]
        }
        else{
            const findNumber = target - nums[i];
            hashMap[findNumber] = i;
        }
    }
    return null;

}

console.log(twoSum(nums, target));


/*
Container With Most Water
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
Find two lines, which, together with the x-axis forms a container, 
such that the container contains the most water.
Notice that you may not slant the container.
*/
let waterHeights = [4,8,1,2,3,9];
let getWaterHeughts = (heights)=>{
    let p1=0;
    let p2=heights.length -1;
    let maxArea = 0;
    while(p1 < p2){
        const height = Math.min(heights[p1],heights[p2]);
        const width = p2-p1;
        const area = width * height;
        maxArea = Math.max(maxArea,area);
        if(heights[p1]<= heights[p2]){
            p1++
        }else{
            p--;
        }
    }
    return maxArea;

}

console.log(getWaterHeughts(waterHeights));


 /*
   Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy 
one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
   */
  let buyAndSell =(arr)=>{
    let low = arr[0];
    let profit = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<low){
            low = arr[i];
        }else if(arr[i]-low > profit){
            profit = arr[i]
        }
    }
    return profit;
  }
  buyAndSell([7,1,5,3,6,4])

  /*
  Contains Duplicate
Given an integer array nums, return true 
if any value appears at least twice in the array, 
and return false if every element is distinct.
  */

const containsDuplicate = (nums) => {
    let obj = {}
    
    for(let i = 0; i < nums.length; i++) {
        if ( !(obj.hasOwnProperty(nums[i]))) {
            obj[nums[i]] = 0
        } else {
            return true
        }
    }
    
    // when a value doesn't appear twice in array      
    return false
}
/*
Find Minimum in Rotated Sorted Array
*/
let findMin = function(nums) {
    let min = nums[0];
    for(let i = 1; i < nums.length ; i ++){
        min = Math.min(nums[i],min)
    }
    
    return min;
    
};
findMin([4,5,6,7,0,1,2])

/*
Search in Rotated Sorted Array
*/

let search = function(nums, target) {
    for(let i= 0; i <nums.length; i++){
        if(target ===nums[i]){
            return i;
        }
    }
    return -1;   
};

/*
 maximum subarray
 another word largest sum
*/

let maxSubArray = (nums) =>{
    let max = nums[0];
    let temp = nums[0];
    for(let i=1; i< nums.length; i++){
        max = Math.max(nums[i], max + nums[i]);

        if(max>temp){
            temp = max;
        }
    }
    return temp;
}

/*
maximum product subarray

*/

let maxSubArray = (nums) =>{
   let max = nums[0];
   let temp = nums[0];
   for(let i=1; i< nums.length; i++){
       max = Math.max(nums[i], max * nums[i]);

       if(max>temp){
           temp = max;
       }
   }
   return temp;
}


/*
Design Add and Search Words Data Structure

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in
 the data structure that matches word or false otherwise. word may
  contain dots '.' where dots can be matched with any letter.
*/

let addword = function(word) {
    let dict = {};
    let start = 0; let end = word.length-1;
    while(start<end){
        if(!(dict.hasOwnProperty(word))){
         dict[word] = word;
        }
        start++;
    }
   
   return dict;
};
let dict =  addword("WordDictionary")

let search= (word) =>{
 if(dict.hasOwnProperty(word)){
       return true;
     }
 return false
}

