/*
Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of 
nodes along the longest path from the root node down to the farthest leaf node.

*/
let maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);

};

/*
Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

var isSameTree = function(p, q) {
    if (p == null && q == null) return true;
   // one of p and q is null
   if (q == null || p == null) return false;
   if (p.val != q.val) return false;
   return isSameTree(p.right, q.right) &&
           isSameTree(p.left, q.left);
 
};

/*
Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.
*/
let invertTree = function(root) {
  
	if(root==null){
        return null
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
   root.left =  invertTree(root.left)
   root.right = invertTree(root.right)
    return root;

};
/*
 Sums the values of a balanced binary tree
*/
let sumUpAllValues = (node)=>{
    if(!node){
        return;
    }else{
        return sumUpAllValues(node.left) + node.val + sumUpAllValues(node.right);
    }
}
/*
Nth fibonacchi number
*/
let fib = (n) =>{
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return fib(n-1)+ fib(n-2)
    }
}
/*
What does O(log n) mean exactly?

The most common attributes of logarithmic running-time function are that:

the choice of the next element on which to perform some action is one of several possibilities, and
only one will need to be chosen.
or

the elements on which the action is performed are digits of n
This is why, for example, looking up people in a phone book is O(log n). 
You don't need to check every person in the phone book to find the right one; instead, 
you can simply divide-and-conquer by looking based on where their name is alphabetically, 
and in every section you only need to explore a subset of each section before you eventually find 
someone's phone number.

Of course, a bigger phone book will still take you a longer time, but it won't grow 
as quickly as the proportional increase in the additional size.

We can expand the phone book example to compare other kinds of operations 
and their running time. We will assume our phone book has businesses (the "Yellow Pages") which have unique names and people (the "White Pages") which may not have unique names. A phone number is assigned to at most one person or business. We will also assume that it takes constant time to flip to a specific page.

Here are the running times of some operations we might perform on the phone book, from fastest to slowest:

O(1) (in the worst case): Given the page that a business's name is on 
and the business name, find the phone number.

O(1) (in the average case): Given the page that a person's 
name is on and their name, find the phone number.

O(log n): Given a person's name, find the phone number 
by picking a random point about halfway through the part of the book you haven't searched yet, then checking to see whether the person's name is at that point. Then repeat the process about halfway through the part of the book where the person's name lies. (This is a binary search for a person's name.)

O(n): Find all people whose phone numbers contain the digit "5".

O(n): Given a phone number, find the person or business with that number.

O(n log n): There was a mix-up at the printer's office, 
and our phone book had all its pages inserted in a random order. 
Fix the ordering so that it's correct by looking at the first name on each page and then 
putting that page in the appropriate spot in a new, empty phone book.

For the below examples, we're now at the printer's office. Phone books are waiting 
to be mailed to each resident or business, and there's a sticker on each
 phone book identifying where it should be mailed to. Every person or business gets one phone book.

O(n log n): We want to personalize the phone book, so we're going to find each 
person or business's name in their designated copy, then circle their name in the 
book and write a short thank-you note for their patronage.

O(n2): A mistake occurred at the office, and every entry in each of the phone books 
has an extra "0" at the end of the phone number. Take some white-out and remove each zero.

O(n · n!): We're ready to load the phonebooks onto the shipping dock. Unfortunately, 
the robot that was supposed to load the books has gone haywire: it's putting the books onto the truck in a random order! Even worse, it loads all the books onto the truck, then checks to see if they're in the right order, and if not, it unloads them and starts over. (This is the dreaded bogo sort.)

O(nn): You fix the robot so that it's loading things correctly. The next day, 
one of your co-workers plays a prank on you and wires the loading dock robot 
to the automated printing systems. Every time the robot goes to load an original book, 
the factory printer makes a duplicate run of all the phonebooks! Fortunately, 
the robot's bug-detection systems are sophisticated enough that the robot doesn't try 
printing even more copies when it encounters a duplicate book for loading,
 but it still has to load every original and duplicate book that's been printed.
*/


/*
 Merge Sort

*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);

/*
Kth Smallest Element in a BST

Given the root of a binary search tree, and an integer k, 
return the kth smallest value
 (1-indexed) of all the values of the nodes in the tree.
*/

var kthSmallest = function (root, k) {
  const stack = [];
  let count = 1;
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    if (count === k) {
        return node.val;
    }
    else {
        count++;
    }
    node = node.right;
  }
};

// DFS solution of Kth smallest in a BST
var kthSmallest = function(root, k) {
  return traverse(root)[k-1]
};

const traverse = (node)=>{
  if(node == null) return[];
  return [...traverse(node.left),node.val,...traverse(node.right)]
}

/*
is valid binary search tree
*/

var isValidBST = function(root) {
  let prev = null;
  return validateUsingInorder(root);    // O(n)
  
  function validateUsingInorder(node) {
      if(!node) {
          return true;
      }
      if(!validateUsingInorder(node.left)) {     // L
          return false;
      }
      if(prev !== null && node.val <= prev) {    // N
          return false;
      }
      prev = node.val;
      return validateUsingInorder(node.right);  // R
  }
}

/*
Binary Tree Maximum Path Sum

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes
 in the sequence has an edge connecting them. A node can only appear in the sequence 
 at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

*/

var maxPathSum = function(root) {
  let max=-999999;
  helper(root)
  return max
  function helper(root){
      if(!root)return 0
      
      let leftMax = helper(root.left)
      let rightMax = helper(root.right)
       let sumAll  = Math.max(leftMax + root.val, rightMax + root.val,root.val)
       max = Math.max(leftMax + rightMax + root.val, max, sumAll)
      return max;
      }
  
};



