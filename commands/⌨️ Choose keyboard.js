/*CMD
  command: ⌨️ Choose keyboard
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

var photoUrl = "https://telegra.ph/file/45bbbfb17bc2b354c6216.jpg"; // Replace with the actual URL of your photo
var captionText = "Choose your favourite keyboard .";
//@Snowbearchai
var inlineButtons = [
  { text: "Keyboard 1", callback_data: "/Keyboard 1" },
  { text: "Keyboard 2", callback_data: "/Keyboard 2" }
];

Api.sendPhoto({
  chat_id: user.telegramid,
  photo: photoUrl,
  caption: captionText,
  reply_markup: JSON.stringify({ inline_keyboard: [inlineButtons] })
});
