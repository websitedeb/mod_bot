const express = require("express");
const app = express();

app.all("/", (req, res) => {
  res.send("Bot is running!");
});

function keepAlive() {
  app.listen(3000, () => {
    console.log("server is running");
    setInterval(() => {
      console.log(Date.now());
    }, 20000);
  });
}

module.exports = keepAlive;
