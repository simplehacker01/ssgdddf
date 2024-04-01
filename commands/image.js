/*CMD
  command: image
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

const Telegraf = require('telegraf');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const sharp = require('sharp');

const token = '<6719063417:AAE5gZsRSmXbY_OBaFyDd9bgYX48qkwUZmc>';
const bot = new Telegraf(token);
const saveFile = promisify(fs.writeFile);

bot.start((ctx) => ctx.reply('Welcome to the Telegram Photo Bot!'));


bot.on('photo', async (ctx) => {
  const photo = ctx.message.photo[ctx.message.photo.length - 1];
  const fileId = photo.file_id;
  const fileInfo = await ctx.telegram.getFile(fileId);
  const filePath = fileInfo.file_path;
  const photoData = await ctx.telegram.getFile(filePath);
  const photoBuffer = await promisify(fs.readFile)(photoData.file);

  
  const resizedImage = await sharp(photoBuffer)
    .resize(300, 200)
    .jpeg({ quality: 80 })
    .toBuffer();

  
  const outputFilePath = path.join(__dirname, 'output', `${Date.now()}.jpg`);
  await saveFile(outputFilePath, resizedImage);


  ctx.replyWithPhoto({ source: outputFilePath });
});


bot.on('text', (ctx) => {
  const text = ctx.message.text;
  ctx.reply(`You said: ${text}`);
});


bot.launch();
