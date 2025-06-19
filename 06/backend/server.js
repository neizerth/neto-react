const express = require("express");
const { v4 } = require("uuid");
const { range } = require("ramda");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

const app = express();
app.use(cors());
const port = 3333;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getFakeNewsUpdate = () => {
  const count = Math.round(Math.random() * 10);

  return range(0, count + 1)
    .map(() => ({
      id: v4(),
      text: faker.lorem.paragraph(),
      date: faker.date.recent(),
    }))
    .sort((i1, i2) => (i1.date > i2.date ? 1 : 0));
};

let delayResponse = false;
app.get("/news", async (req, res) => {
  if (delayResponse) {
    await delay(7000);
  }

  delayResponse = !delayResponse;
  res.send(getFakeNewsUpdate());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
