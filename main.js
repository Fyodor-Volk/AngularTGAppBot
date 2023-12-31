import {Telegraf, Markup} from 'telegraf' //Импортируем телеграф и маркап для работы с клавиатурой 

//Токен телеграм бота
const token = ''

const webAppUrl = 'https://angulartgapp-44306.web.app'

const bot = new Telegraf(token) //Создаем бота


bot.command('start', (ctx)=>{
    ctx.reply(
        'Добро пожаловать! Нажмите кнопку для запуска приложения',
        Markup.keyboard([
            Markup.button.webApp('Отправить сообщение', webAppUrl)
        ])
    )
})


bot.launch()
