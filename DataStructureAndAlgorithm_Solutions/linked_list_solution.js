 ////   Merge 2 sorted list
 var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2){
     return l1 || l2;
   }
   if(l1.val < l2.val){
     l1.next = mergeTwoLists(l1.next,l2)
     return l1;
   }else {
     l2.next = mergeTwoLists(l1,l2.next)
     return l2
   }
 };

 ///  reverse a sorted list 
var reverseList = function(head, prev=null) {
    if(!head) return prev;
    let temp = head.next;
    head.next = prev;
    return reverseList(temp, head);
};


// Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
//Merge all the linked-lists into one sorted linked-list and return it.

var mergeKLists = function(lists) {
    if (lists.length === 0) {
      return null;
    }
    
   while(lists.length > 1) {
       let a = lists.shift()
       let b = lists.shift()
       let merged = mergeTwoLists(a, b)
       lists.push(merged)   
   }
      
      return lists[0]
  }
  
  var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l1 || l2;
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};


// Remove Nth Node From End of List

const removeNthFromEnd = (head, n) => {
  const map = [];
  
  while (head) {
    map.push(head);
    head = head.next;
  }
    
 let nthNode = map[map.length-n-1];
  nthNode.next = nthNode.next.next;
  return map[0]
}
