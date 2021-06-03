/* Start with an infinite two dimensional grid filled with zeros, indexed from (1,1) 
at bottom left corner with coordinates increasing towards the top and right. Given a 
series of coordinate (r,c) where r is the ending row and c is the ending column, add 
1 to each element in the range from (1,1) to (r,c) inclusive. Once all coordinates 
are processed, determine how many cells contain the maximal value in the grid.
*/


function countMax(upRight) {

  const max = upRight.length;
  let rows = []
  let columns = []

  const arrUpRight = upRight.map(e => {
    const arr = e.split(" ")
    rows.push(parseInt(arr[0]))
    columns.push(parseInt(arr[1]))

    return arr
  });

  rows = Math.max(...rows)
  columns = Math.max(...columns)

  const grid = new Array(rows);
  for (let i=0; i<grid.length; i++) {
    grid[i] = new Array(columns).fill(0);
  }
  
  function addRC(r,c) {
    for(let i = 0; i<r; i++) {
      for(let j=0; j<c; j++) {
        grid[i][j]++
      }
    }
  }

  for(let i=0; i<max; i++) {
    addRC(...arrUpRight[i])
  } 

  let counter = 0;
  for(let i = 0; i<grid.length; i++) {
    for(let j=0; j<grid[i].length; j++) {
      if(grid[i][j] === max) {
        counter++
      }
    }
  }

  return counter

}

console.log(countMax(['2 3', '3 7', '4 1']))

