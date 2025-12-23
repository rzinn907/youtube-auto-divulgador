const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on("qr", qr => qrcode.generate(qr, { small: true }));
client.on("ready", () => console.log("WhatsApp conectado"));

client.initialize();

async function sendWhats(link, text) {
  const msg = text.replace("{link}", link);
  await client.sendMessage("SEU_NUMERO@c.us", msg);
}

module.exports = { sendWhats };