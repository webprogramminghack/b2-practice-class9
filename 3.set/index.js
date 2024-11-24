'use strict';

const uniqueList = [1, 2, 3, 4, 5];

function addItem(item) {
  if (uniqueList.includes(item)) return;
  uniqueList.push(item);
}

addItem(6);
addItem(5);
addItem(5);
addItem(5);
addItem(5);
addItem(5);
addItem(5);
// console.log('uniqueList :>> ', uniqueList);

const set = new Set([1, 2, 3, 4, 5]);
set.add(6);
set.add(5);
set.add(5);
set.add(5);

// console.log(set.has(2));

set.delete(6);
// console.log('set :>> ', set);

// set.clear();
// console.log('set :>> ', set);

for (const value of set) {
  // console.log(value);
}

set.forEach((value) => {
  // console.log(value);
});

const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// wrong approach
function wrongRemoveDups(arr) {
  arr.forEach((item, index) => {
    if (arr.indexOf(item) !== index) {
      arr.splice(index, 1);
    }
  });

  return arr;
}

// console.log('arr :>> ', wrongRemoveDups(arr));

// correct approach
function removeDups(arr) {
  return [...new Set(arr)];
}

console.log('arr :>> ', removeDups(arr));
