module.exports = {
  // TODO: env vars for dev config
  development: {
    username: "postgres",
    password: "password",
    database: "twitter-clone-nest",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_PORT,
    dialect: "postgres",
    "operatorsAliases": false,
    "use_env_variable": "DATABASE_URL"
  }
}
