const { Client, IntentsBitField, GatewayIntentBits } = require("discord.js");
const slurs = require("expletives");
require("dotenv").config();
const keepAlive = require("./server.js");
const { getRandomElement } = require("./lines.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return; // Ignore messages from other bots

  // Check for slurs
  slurs.badWordsArray.push(
    "nigger",
    "nigga",
    "penis",
    "virgin",
    "pp",
    "heck",
    "acoustic",
    "ass"
  );

  const contentLower = message.content.toLowerCase();
  const containsSlur = slurs.badWordsArray.some((slur) =>
    contentLower.includes(slur),
  );

  if (containsSlur) {
    // Delete the message
    message
      .delete()
      .then(() => {
        // Send a response or perform additional actions
        message.channel.send(`${message.author}, ${getRandomElement()}`);
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
  }
});

keepAlive();
client.login(`${process.env["TOKEN"]}`);
