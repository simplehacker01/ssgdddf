/*CMD
  command: /start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your password 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var keyboard = [
  [
    {
      text: "💢 Share Contact",
      request_contact: true
    }
  ]
]
Api.sendMessage({
  text:
    "*🙂Share Your Contact In Order To Start Using The Bot*.\n\n * Note~ * This will not be shared with anyone ",
  parse_mode: "markdown",
  reply_markup: {
    keyboard: keyboard,
    resize_keyboard: true
  }
})
