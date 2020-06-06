const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config");

client.login(token);

client.on("ready", () => {
  console.log(`You are ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "gary") {
    msg.reply("baoo baoo");
  }
  console.log(`Message: ${msg.content}`, "\n", msg.author);
});
