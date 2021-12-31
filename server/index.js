const keys = require("./keys");

// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const { response } = require("express");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", client => {
  client
    .query("CREATE TABLE IF NOT EXISTS bars (number INT)")
    .catch(err => console.log("PG ERROR", err));
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

// get the values
app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");

  res.send(values);
});

// now the post -> insert value
app.post("/values", async (req, res) => {
  if (!req.body.value) res.send({ working: false });

  pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value]);

  res.send({ working: true });
});

app.listen(5000, err => {
  console.log("Listening");
});

// // get the values
// app.get("/bars/all", async (req, res) => {
//   pgClient.query('SELECT * FROM bars ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// });

app.get("/bars/all", async (req, res) => {
  pgClient.query('SELECT * FROM chocolate_insights_schema.bars;',
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
})