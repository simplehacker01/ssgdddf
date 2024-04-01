/*CMD
  command: hh
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var accessCode = Bot.getProperty("SCRIPTER__WARIS")
if (message.length < 10) {
  Bot.sendMessage("*❌ Access Code Incorrect. Please try again.*")
  return Bot.runCommand("😁😁❤️claimlifafa555")
} else if (!accessCode) {
  Bot.sendMessage("*Invalid*")
  return
} else if (message.length === accessCode) {
  Bot.sendMessage("*🤩 Access Code Is Correct\n\n✌️*")
  Bot.runCommand("😁😁❤️claimlifafa55")
}
