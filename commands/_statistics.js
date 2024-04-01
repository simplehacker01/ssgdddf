/*CMD
  command: /statistics
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

 if (!content) {
  HTTP.post({
    url: "https://projectoid.site/api/Telegram/statistics.php",
    body: { bot: bot.name },
    success: "📊 Statistics"
  })
} else {
  var status = content
  var stats =
    "<b>📊 Bot Live Stats 📊\n\n💡 Total Users: " +
    status +
    " User(s)\n\n🤟 Codes Maker: @PAYBACKMI</b>"

  Api.sendMessage({
    text: stats,
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
