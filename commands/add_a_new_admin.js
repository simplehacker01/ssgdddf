/*CMD
  command: add|a|new|admin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💡 Send The User Id Of The User To Promote Him As Admin

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Command : if (user.telegramid == "5802525423") {
  Bot.setProperty("admin" + message + "", "ADMIN", "string")
  Bot.sendMessage(
    "*✅ Successfully Added " + message + " As Admin Of This* [Bot](https://t.me"+bot.name+")"
  )
  Bot.sendMessageToChatWithId(
    message,
    "✅ You Are Now An Admin Of This [Bot](https://t.me"+bot.name+") !\n\n💡 Get Acess To Admin Panel By Sending /panel"
  )
} else {
  Bot.sendMessage("⚠️*You are missing the following rights to use this command:\nCanPromoteMembers*")
}
