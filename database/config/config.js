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
    username: "sinrxanwetrdpy",
    password: "8b0a6c6c91c64e2fa06d6bc6ba22809d4e2890bf6f0089b42df6a43faec54d00",
    database: "d3egonipj2lf12",
    host: "ec2-52-208-221-89.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",
    "operatorsAliases": false,
    "use_env_variable": "DATABASE_URL"
  }
}
