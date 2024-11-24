'use strict';

// const names = ['Bilbo', 'Gandalf', 'Nazgul'];

// const callback = (item, index, array) => {
//   console.log(`${index}: ${item} dalam array ${array}`);
// };

// names.forEach(callback);

// const names = {
//   arr: ['Bilbo', 'Gandalf', 'Nazgul'],
//   forEach: function (callback) {
//     for (let i = 0; i < this.arr.length; i++) {
//       callback(this.arr[i], i, this.arr);
//     }
//   },
// };

// const callback = (item, index, array) => {
//   console.log(`${index}: ${item} dalam array ${array}`);
// };

// names.forEach(callback);

let arr = [1, 0, false, 'hello'];

// console.log(arr.indexOf('hello'));
// console.log(arr.indexOf('doesntexist'));
// console.log(arr.includes('hello'));

{
  let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'John' },
  ];

  // console.log(users.findIndex((item) => item.name === 'John'));

  // console.log(users.findLastIndex((item) => item.name === 'John'));
}

{
  let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'John' },
  ];

  let user = users.find((item) => item.id === 1);
  // console.log('user :>> ', user);
}

// const users = {
//   arr: [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Pete' },
//     { id: 3, name: 'Mary' },
//     { id: 4, name: 'John' },
//   ],
//   find: function (callback) {
//     for (let i = 0; i < this.arr.length; i++) {
//       if (callback(this.arr[i], i, this.arr)) {
//         return this.arr[i];
//       }
//     }
//   },
// };

// console.log(users.find((item) => item.id === 3));

const friends = ['Bilbo', 'Gandalf', 'Nazgul'];

let updateFriends = friends.map(
  (item, index) => `Teman ke-${index + 1} adalah ${item}`
);

// console.log('updateFriends :>> ', updateFriends);

const values = [1, 2, 3];

const doubleValues = values.map((item) => item * 2);
// console.log('doubleValues :>> ', doubleValues);

let arr1 = [2, 1, 15];

arr1.sort((a, b) => b - a);
// console.log(arr1);

let arr3 = ['Gandalf', 'Bilbo', 'Nazgul'];
arr3.sort((a, b) => a.localeCompare(b));
// console.log('arr3 :>> ', arr3);

let arr4 = ['Gandalf', 'Bilbo', 'Nazgul'];
arr4.sort((a, b) => b.localeCompare(a));
// console.log('arr4 :>> ', arr4);

const users = [
  {
    nama: 'John',
    saldo: 3.5,
  },
  {
    nama: 'Pete',
    saldo: 4,
  },
  {
    nama: 'Mary',
    saldo: 1,
  },
];

// users.sort((a, b) => a.saldo - b.saldo);

{
  let arr = ['I', 'am', 'Tony', 'Stark'];
  arr.reverse();
  // console.log(arr);
}

{
  let arr = ['I', 'am', 'Tony', 'Stark'];
  let str = arr.join(' ');
  // console.log('str :>> ', str);
}

{
  let arr = 'I, am, Tony, Stark';
  let str = arr.split(', ');
  // console.log('str :>> ', str);
}

{
  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);
  console.log('result :>> ', result);

  // 1. sum = 0, current = 1, new sum = 0 + 1 = 1
  // 2. sum = 1, current = 2, new sum = 1 + 2 = 3
  // 3. sum = 3, current = 3, new sum = 3 + 3 = 6
  // 4. sum = 6, current = 4, new sum = 6 + 4 = 10
  // 5. sum = 10, current = 5, new sum = 10 + 5 = 15
}

{
  let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'Ann' },
  ];

  let someUsers = users.filter((user) => user.id <= 3);
  console.log('someUsers :>> ', someUsers);
}
