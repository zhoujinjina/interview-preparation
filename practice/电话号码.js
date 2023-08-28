function group() {
  let a = [[0, 1], [2, 3], [4, 5], [6, 7]];
  let allGroups = [];
  for (let i of a) {
    allGroups = change(allGroups, i);
  }
  function change(allGroups, i) {
    let newGroups = [];
    if (allGroups.length == 0) {
      return i
    } else {
      for (let b of allGroups) {
        for(let c of i){
            newGroups.push(b+""+c)
        }

      }
    }
    return newGroups;
  }

  return allGroups
}
console.log(group())
