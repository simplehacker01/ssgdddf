/*CMD
  command: /cloneradin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: /clone Bot
  answer: *Send Email*
  keyboard: 
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
