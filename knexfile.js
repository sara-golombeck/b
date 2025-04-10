// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:postgres@db:5432/zelda_cookbook',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'postgresql',
    connection: 'postgres://postgres:postgres@db:5432/zelda_cookbook',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    // connection: process.env.DATABASE_URL + `?ssl=true`,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
