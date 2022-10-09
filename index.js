const { development } = require("./knexfile");
const pg = {
  client: "pg",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "super",
    database: "knex",
  },
};
const knex = require("knex")(pg);

knex.select().from("cars").then(res=>{
    console.log(res)
})
// const res = knex.raw("select * from cars")

// console.log(res);
