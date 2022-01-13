
/*
 Transpose Matrix
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

*/
let transpose = function(A) {
    let output = [];
    for(let i=0; i<A[0].length;i++){
        let col = [];
        for(let j=0; j<A.length;j++){
            col.push(A[j][i])
        }
        output.push(col)
    }
     
 return output;
 };

 /*
Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 */

 var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return 0;
  let islandCount = true;

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === target) {
        matrix[row][col] = 0;
          return islandCount;;
      }
    }
  }
  return islandCount =false;
   
};


