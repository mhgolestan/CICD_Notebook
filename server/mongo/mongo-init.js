// eslint-disable-next-line no-undef
db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
})

// eslint-disable-next-line no-undef
db.createCollection('notes')

// eslint-disable-next-line no-undef
db.notes.insert({ content: 'HTML is easy', important: false })
// eslint-disable-next-line no-undef
db.notes.insert({ content: 'Browser can execute only JavaScript', important: true })
