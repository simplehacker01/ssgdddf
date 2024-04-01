/*CMD
  command: 🔐 Protect Your Number
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 🔐 **Access Key** 👆

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendPhoto({
  photo: "https://te.legra.ph/file/1837b7747850d02bef2da.jpg",
  reply_markup: {
    inline_keyboard: [
      // line 1
      [
        { text: "🔐 Protect Your Number",web_app: { url: "https://www.softdownload.in/Number-Protector"} }
      ]
    ]
  }
})
Bot.sendMessage("ℹ️* It Is Locked With Access Key, Here Is Your Access Key To Protect Your Number 🔐 :-* `@devil_box`")
