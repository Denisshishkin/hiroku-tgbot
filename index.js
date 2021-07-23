import TelegramBot = require('node-telegaram-bot-api')
const token = '1840698273:AAFZcoOhDbwhzUParZLIv6JO52GLwwB-XLA'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMeassage(msg.chat.id, `Hello from Heroku, ${msg.from.first_name}`)
})