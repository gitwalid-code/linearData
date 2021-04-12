let set1 = [1, 2, 3, 7];
let set2 = [10, 2, 30, 7];
let sumcommon = 0;
let sumoverlapping = 0;
let totalsum = 0;
let totalset1 = 0;
let totalset2 = 0;
function set(set1, set2) {
  let arr = [];
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] == set2[j]) {
        sumcommon = sumcommon + (set1[i] + set2[j]);
      }
      if (i == 0) {
        totalset2 = totalset2 + set2[j];
      }
    }
    totalset1 = totalset1 + set1[i];
  }
  totalsum = totalset1 + totalset2;
  sumoverlapping = totalsum - sumcommon;
  arr = [sumcommon, sumoverlapping];
  return arr;
}
console.log(set(set1, set2));
