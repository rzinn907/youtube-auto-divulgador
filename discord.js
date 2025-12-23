const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login("TOKEN_DISCORD");

async function sendDiscord(link, text) {
  const channel = await client.channels.fetch("ID_CANAL");
  channel.send(text.replace("{link}", link));
}

module.exports = { sendDiscord };