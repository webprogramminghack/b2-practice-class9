'use strict';

function User(name) {
  this.name = name;
}

const processedUsers = new WeakSet();

function processUser(user) {
  if (processedUsers.has(user)) {
    console.log(`Pengguna ${user.name} sudah diproses sebelumnya`);
    return;
  }

  console.log(`Memproses pengguna ${user.name}...`);

  processedUsers.add(user);
}

let user1 = new User('Alice');
let user2 = new User('Bob');

processUser(user1);
processUser(user2);
processUser(user1);

user1 = null;
