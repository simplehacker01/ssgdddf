/*CMD
  command: movies
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

馃摻 Movie Details BJS
鉃栤灃鉃栤灃鉃栤灃鉃栤灃鉃栤灃

馃ЗCommand:- 馃帪 Movie Details
鈱笍Answer:- *馃幍 Enter Movie Name to Fetch Details*
鉁匴ait for Reply
馃枼BJS:-

Api.sendChatAction({
聽 chat_id: chat.chatid,
聽 action: "typing"
})
Api.sendChatAction({
聽 chat_id: chat.chatid,
聽 action: "typing"
})
var ko = data.message
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
User.setProperty("movie", message, "string")
HTTP.get({
聽 url: "http://www.omdbapi.com/?apikey=4d146d7&t=" + ko + "",
聽 success: "/onfind ",
聽 on_error: "/onerror"
})



鉃栤灃鉃栤灃鉃栤灃鉃栤灃



馃ЗCommand:- /onfind
馃枼BJS:-

var movie = User.getProperty("movie")
Api.sendChatAction({
聽 chat_id: chat.chatid,
聽 action: "typing"
})

Bot.sendMessage("*Searching movie: " + movie + " ....*")
Api.sendChatAction({
聽 chat_id: chat.chatid,
聽 action: "typing"
})
Api.sendChatAction({
聽 chat_id: chat.chatid,
聽 action: "typing"
})

var c = JSON.parse(content)
var study = c.Poster
var t = c.Title
var y = c.Year
var r = c.Rated
var re = c.Released
var rt = c.Runtime
var im = c.imdbRating
var ac = c.Actors
var l = c.Language
var plot = c.Plot
var gen = c.Genre
var dir = c.Director
var wri = c.Writer
var coun = c.Country
var awar = c.Awards
var ratee = c.Ratings.Value
var metas = c.Metascore
var tpe = c.Type
var boxo = c.BoxOffice
var prod = c.Production
if (study == undefined) {
聽 Bot.sendMessage(
聽聽聽 "No results were found that included all of your search._Your search -聽 " +
聽聽聽聽聽 movie +
聽聽聽聽聽 " -聽 did not find any movie.*Suggestion:*馃敇 Check that all words are spelled correctly.馃敇 Try entering other keywords."
聽 )
} else {
聽 Api.sendPhoto({
聽聽聽 photo: study,
聽聽聽 caption:
聽聽聽聽聽 "*馃摻 Movie Details\n\n鈻笍Title:* " +
聽聽聽聽聽 t +
聽聽聽聽聽 "\n*鈻笍Year Runned:* " +
聽聽聽聽聽 y +
聽聽聽聽聽 "\n*鈻笍Rated By:* " +
聽聽聽聽聽 r +
聽聽聽聽聽 "\n*鈻笍Release Date:* " +
聽聽聽聽聽 re +
聽聽聽聽聽 "\n*鈻笍Runtime:* " +
聽聽聽聽聽 rt +
聽聽聽聽聽 "\n*鈻笍Genre: *" +
聽聽聽聽聽 gen +
聽聽聽聽聽 "\n*鈻笍Director: *" +
聽聽聽聽聽 dir +
聽聽聽聽聽 "\n*鈻笍Writer: *" +
聽聽聽聽聽 wri +
聽聽聽聽聽 "\n*鈻笍 Actors:* " +
聽聽聽聽聽 ac +
聽聽聽聽聽 "\n*鈻笍Plot:* " +
聽聽聽聽聽 plot +
聽聽聽聽聽 "\n*鈻笍Language:* " +
聽聽聽聽聽 l +
聽聽聽聽聽 "\n*鈻笍Country: * " +
聽聽聽聽聽 coun +
聽聽聽聽聽 "\n*鈻笍Awards: *" +
聽聽聽聽聽 awar +
聽聽聽聽聽 "\n*鈻笍Rate: *" +
聽聽聽聽聽 im +
聽聽聽聽聽 "/10\n*鈻笍MetaScore: *" +
聽聽聽聽聽 metas +
聽聽聽聽聽 "\n*鈻笍IMDB Rating:* " +
聽聽聽聽聽 im +
聽聽聽聽聽 "\n*鈻笍Type:* " +
聽聽聽聽聽 tpe +
聽聽聽聽聽 "\n*鈻笍BoxOffice: *" +
聽聽聽聽聽 boxo +
聽聽聽聽聽 "\n*鈻笍Production: *" +
聽聽聽聽聽 prod +
聽聽聽聽聽 "\n*鈻笍Logo: [* [Click Here](" +
聽聽聽聽聽 study +
聽聽聽聽聽 ") *]" +
聽聽聽聽聽 "\n\n鈽� Deatails By : @" +
聽聽聽聽聽 bot.name +
聽聽聽聽聽 "*",
聽聽聽 parse_mode: "Markdown"
聽 })
}


鉃栤灃鉃栤灃鉃栤灃鉃栤灃


馃ЗCommand:- /onerror
馃枼BJS:-

Bot.sendMessage("*"+content+"*")
