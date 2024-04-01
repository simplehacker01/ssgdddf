/*CMD
  command: ne
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

var minutes = 200 * 1 - (Date.now() - freeviews) / 1000 / 60

  var wait_minutes = Math.floor(minutes)

  var wait_seconds = Math.floor((minutes - wait_minutes) * 60)

  if (wait_minutes > -1) {
    Bot.sendMessage(
      "You Have Already Received  Come Back After " +
        wait_minutes +
        " m " +
        wait_seconds +
        " s"
    )
    return
  }
  return true
}
