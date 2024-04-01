/*CMD
  command: /Keyboard 2
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
  text: "Your keyboard has set successfully",
  reply_markup: {
    keyboard: [
      [{ text: "Pay to Admin" }, { text: "Balance" }],
      [{ text: "Pay to User" }, { text: "Bulk Pay" }],
      [{ text: "Support" }]
    ],
    resize_keyboard: true,
    one_time_keyboard: true
  }
});
