// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "blpm3lx569skj4lwunok-mysql.services.clever-cloud.com",
      user: "u7nhnrabacwxicx6",
      password: "LZLXR5TdFklkXHXHIh74",
      database: "blpm3lx569skj4lwunok"
    },
    useNullAsDefault: true
  },
  // development: {
  //   client: "mysql",
  //   connection: {
  //     host: "192.168.10.100",
  //     user: "root",
  //     password: "",
  //     database: "test"
  //   },
  //   useNullAsDefault: true
  // },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
