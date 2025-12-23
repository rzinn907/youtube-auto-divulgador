const { checkNewVideo } = require("./services/youtube");
const { sendWhats } = require("./services/whatsapp");
const { sendDiscord } = require("./services/discord");
const { sendTelegram } = require("./services/telegram");
const config = require("./config.json");

async function loop() {
  try {
    const link = await checkNewVideo();
    if (link) {
      console.log("Novo vídeo detectado!");

      await sendWhats(link, config.mensagem.texto);
      await sendDiscord(link, config.mensagem.texto);
      await sendTelegram(link, config.mensagem.texto);
    }
  } catch (e) {
    console.log("Erro:", e.message);
  }
}

setInterval(loop, 60000); 