/*CMD
  command: currency
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: currency
  keyboard: currency
  aliases: 
  group: 
CMD*/

var text = "<b>💸 Select the currency in which you want to deposit.</b>"
var buttons = [
  [
    {
      text: "TRX",
      callback_data: "/trx"
    },
    {
      text: "USDT",
      callback_data: "/usdt"
    }],[
    {
      text: "BDT",
      callback_data: "/bdt"
    }],[
    {
      text: "Redeem Code",
      callback_data: "/verifypayment"
    }
  ]
]

Api.sendMessage({
  text: text,
  reply_markup: {
    inline_keyboard: buttons
  },
  parse_mode: "html"
})
