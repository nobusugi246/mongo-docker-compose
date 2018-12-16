var users = [
  {
    user: 'user',
    pwd: 'userpass',
    roles: [
      {
        role: 'dbOwner',
        db: 'pomo'
      }
    ]
  }
];

for (var i = 0, length = users.length; i < length; ++i) {
  db.createUser(users[i]);
}

