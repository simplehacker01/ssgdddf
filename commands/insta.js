/*CMD
  command: insta
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

if (!message.startsWith("https://www.instagram.com/")) {
  Bot.sendMessage("Please enter a valid Instagram URL!");
  return;
}
