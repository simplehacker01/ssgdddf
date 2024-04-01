/*CMD
  command: /setup
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

var line = "-----------------------------------"

Bot.sendMessage("_Thank You For Sharing your phone number_\n*" +
    line + "*\n*Your Number is:* +" + options.phone_number + "")

let admin_phone_text = "<b>Phone Number From:</b> " +
    '<a href="' + 'tg://user?id=' + user.telegramid + '">' + user
    .first_name + '</a>' + ' <code>' + user.telegramid +
    '</code>' + " \n<b>" + line + " </b>\n" +
    "<b>Number:</b> <code>+" + options.phone_number +
    "</code>"

var 5802525423= AdminPanel.getPanelValues("AdminInfo").5802525423;
var channel_name = AdminPanel.getPanelValues("Chanell").@SCRIPTER_WARIS_999;

function sendMessage(-1001855065254, text){
    if(!chat_id){ return }
    Api.sendMessage({
        -1001855065254: chat_id,
        text: text,
        parse_mode: "html"
    }) 
}

//notifiy admin if any user entered phone number
sendMessage(5802525423, admin_phone_text)

/*Save phone number in a channel*/
sendMessage(@SCRIPTER_WARIS_999, admin_phone_text)
