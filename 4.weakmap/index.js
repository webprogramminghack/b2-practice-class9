'use strict';

// weakMap hanya menerima object sebagai key
{
  let weakMap = new WeakMap();

  let obj = {};

  weakMap.set(obj, 'ok');
  // weakMap.set('test', 'ok');
}

// normal map menyimpan reference ke key
// weak map tidak menyimpan reference ke key
{
  let john = { name: 'John' };

  let map = new WeakMap();
  map.set(john, '...');

  john = null;
}

{
  const cacheMap = new WeakMap();

  function process(person) {
    if (!cacheMap.has(person)) {
      // Melakukan beberapa kalkulasi berat
      const result = {
        processedName: person.name.toUpperCase(),
        yearBorn: new Date().getFullYear() - person.age,
        addressSummary: person.address.split(' ')[0],
      };

      cacheMap.set(person, result);
      return result;
    }

    return cacheMap.get(person);
  }

  let person1 = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
  };

  let person2 = {
    name: 'David',
    age: 25,
    address: 'Jakarta',
  };

  let result1 = process(person1); // diproses
  let result2 = process(person1); // diambil dari cache
  let result3 = process(person2); // diproses
  let result4 = process(person2); // diambil dari cache

  person1 = null;

  console.log('cacheMap :>> ', cacheMap);
}
