/*CMD
  command: STATISTICS📊
  help: hlo
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: HELLO ENEMIES
  keyboard: STATISTICS📊
  aliases: hlu
  group: hii
CMD*/

var status = Libs.ResourcesLib.anotherChatRes("status", "global")

Bot.sendMessage(
  "*📊 Live Statistics\n\n👤 Total Members: " +
    status.value() +
    "*"
)
