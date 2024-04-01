/*CMD
  command: *
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

if (!request.contact) {
  return
}
if (request.forward_from || request.forward_from_chat) {
  Bot.sendMessage(
    "*⚠️You Are Not Allowed To Use The Bot\n\n☘️Either You Are Not Indian Or This Contact Is Not Yours*"
  )
  return
}
if (request.contact.vcard) {
  Bot.sendMessage("*⚠️Seems Like This Is Not Your Contact*")
  return
}
if (!request.contact.user_id) {
  Bot.sendMessage(
    "*⚠️You Are Not Allowed To Use The Bot\n\n☘️Either You Are Not Indian Or This Contact Is Not Yours*"
  )
  return
}
if (user.telegramid != request.contact.user_id) {
  Bot.sendMessage(
    "*⚠️You Are Not Allowed To Use The Bot\n\n☘️Either You Are Not Indian Or This Contact Is Not Yours*"
  )
  return
}
if (user.first_name != request.contact.first_name) {
  Bot.sendMessage("*⚠️Seems Like This Is Not Your Contact*")
  return
}
var phone_number = request.contact.phone_number
if (request.contact.phone_number[0] == "+") {
  var phone_number = phone_number.slice(3, 15)
}
if (phone_number.slice(0, 2) != 91)//‼️ Note: You can change verification for other country just change 91 to your country code {
  Bot.sendMessage("*⚠️ Only Indians Are Allowed To Use This Bot*")
  return
}
Bot.sendMessage("*Success*")
//Bot.runCommand("/mainmenu")
