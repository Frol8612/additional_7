module.exports = function solveSudoku(matrix) {
  // your solution
  let run = 0;

  function canNumber(fields, num, x, y) {
      if (fields[x][y] === run) {
          for (let i = 0; i < 9; i++) {
              if (fields[x][i] === num) {
                  return false;
              }
          }
  
          for (let j = 0; j < 9; j++) {
              if(fields[j][y] === num) {
                  return false;
              }
          }
  
          var boxX = Math.floor(x/3) * 3;
          var boxY = Math.floor(y/3) * 3;

          for (let k = 0; k < 3; ++k) {
              for (let m = 0; m < 3; m++) {
                  if (num === fields[boxX + k][boxY + m]) {
                      return false;
                  }
              }
          }
          return true;
      }
      return false;
  };
  
  function decision(fields, x, y){
  
      if (x === 9){
          x = 0;
          y++;
          if (y === 9){
              return true;
          }
      }

      if (fields[x][y] !== run){
          return decision(fields, x + 1, y);
      }

      for (let num = 1; num <= 9; num++ ){
  
          if (canNumber(fields, num, x, y)){
  
              fields[x][y] = num;
              
              if (decision(fields, x + 1, y)){
                  return true;
              }
              fields[x][y] = run;
          }
      }
  
      return false;
  
  };
  
  
  
  decision(matrix, 0, 0);
  return matrix;
}


