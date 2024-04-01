/*CMD
  command: /broad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ✏️ Send The Message To Broadcast

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == "5802525423"){

  Bot.setProperty("adminBroadcast", message)
  Bot.runAll({
    command: "bro"
  })
  Bot.sendMessage("✅Message sent to all active members")
} else {
Bot.sendMessage("❌ You are not allowed to use this")
}
