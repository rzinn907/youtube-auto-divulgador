const TelegramBot = require('node-telegram-bot-api');


const token = process.env.TELEGRAM_TOKEN || 'tokeyn';
const bot = new TelegramBot(token, { polling: true });

function sendTelegram(link, texto) {
    const message = texto.replace('{link}', link);
    
    return bot.sendMessage('seucanal', message);
}

module.exports = { sendTelegram };
    