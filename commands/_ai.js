/*CMD
  command: /ai
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

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "upload_photo"
})
HTTP.get({
    url: "https://aiimagegen.apinepdev.workers.dev/?search="+encodeURI(message)+"", success: "/unai"})


