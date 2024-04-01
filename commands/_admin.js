/*CMD
  command: /admin
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





var button = [
  [
    {
      title: " Bot Owner 👤 ",
      url: "tg://settings"
    }

  ],

 [
    {
      title: " Developer 🧑‍💻 ",
      url: "https://t.me/+2C83L6iB6XoyZWI2"
    }

  ],

[
    {
      title: " Back 🔙 ",
      url: "https://t.me/SCRIPTER_WARIS_999
    }

  ],


]






Bot.sendInlineKeyboard(button, "*Bot Owner* "+
    user.first_name +"👋")





