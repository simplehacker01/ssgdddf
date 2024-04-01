/*CMD
  command: /Keyboard 1
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

//@Snowbearchai
Api.sendMessage({
  chat_id: user.telegramid,
  text: "Keyboard set Successfully",
  reply_markup: {
    keyboard: [
      [{ text: "Account" }, { text: "Refer"}],
      [{ text: "Wallet"}, { text: "Withdraw"}],
      [{ text: "Bonus" }, { text: "Support" }, { text: "Statistics" }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  }
});
