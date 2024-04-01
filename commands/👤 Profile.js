/*CMD
  command: 👤 Profile
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

Api.sendPhoto({
  photo: "https://te.legra.ph/file/b9fb4abf1565e00e31655.jpg", caption: "*• ━━━━━━━━━━━━━━━━━━━━━ •\n\n👤 Name* :- `" +
    user.first_name +
    "`\n\n*🆔 User ID* :- " +
    "`" +
    user.telegramid +"`" + "\n\n• ━━━━━━━━━━━━━━━━━━━━━ •",
  parse_mode: "Markdown"
})
