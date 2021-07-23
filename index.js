process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1840698273:AAFZcoOhDbwhzUParZLIv6JO52GLwwB-XLA'

const bot = new TelegramBot(TOKEN, {
    polling: true
})
bot.on("polling_error", console.log);

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from Heroku, ${msg.from.first_name}`)
})