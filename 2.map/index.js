'use strict';

{
  let map = new Map();

  map.set('1', 'str1');
  map.set(1, 'num1');
  map.set(true, 'bool1');

  // console.log(map.get(1));
  // console.log(map.get('1'));

  // console.log(map.size);

  let john = { name: 'John' };

  let visitsCountMap = new Map();

  visitsCountMap.set(john, 123);
  // console.log('visitsCountMap :>> ', visitsCountMap);

  // console.log(map.has('1'));

  map.delete('1');
  // console.log('map :>> ', map);

  map.clear();
  // console.log('map :>> ', map);
}

{
  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
  ]);

  // console.log(recipeMap.keys());

  for (let vegetable of recipeMap.keys()) {
    // console.log(vegetable);
  }

  for (let amount of recipeMap.values()) {
    // console.log(amount);
  }

  for (let entry of recipeMap) {
    // console.log(entry);
  }
}

{
  const map = new Map();
  map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');
}

{
  let obj = {
    name: 'John',
    age: 30,
  };
  // console.log('arr :>> ', arr);

  const map = new Map(Object.entries(obj));

  // console.log('map :>> ', map);
}

{
  const arr = [
    ['name', 'John'],
    ['age', 30],
  ];

  // let objFromArray = Object.fromEntries(arr);
  // console.log('objFromArray :>> ', objFromArray);

  let map = new Map();
  map.set('banana', 1);
  map.set('orange', 2);
  map.set('meat', 3);

  let objFromMap = Object.fromEntries(map);
  // console.log('objFromMap :>> ', objFromMap);
}

{
  // const items = [
  //   {
  //     id: 1,
  //     name: 'Test 1',
  //     description: 'Desc 1',
  //   },
  //   {
  //     id: 2,
  //     name: 'Test 2',
  //     description: 'Desc 2',
  //   },
  //   {
  //     id: 3,
  //     name: 'Test 3',
  //     description: 'Desc 3',
  //   },
  // ];

  const items = new Map([
    [1, { name: 'Test 1', description: 'Desc 1' }],
    [2, { name: 'Test 2', description: 'Desc 2' }],
    [3, { name: 'Test 3', description: 'Desc 3' }],
  ]);

  function getItem(id) {
    // return items.find((item) => item.id === id);
    return items.get(id);
  }

  console.log(getItem(2));
}

{
  let user1 = { name: 'Alice' };
  let user2 = { name: 'Bob' };

  let userSettings = new Map();

  userSettings.set(user1, { theme: 'dark', language: 'en' });
  userSettings.set(user2, { theme: 'light', language: 'fr' });

  console.log(userSettings.get(user1).theme);
  console.log(userSettings.get(user2).language);
}
