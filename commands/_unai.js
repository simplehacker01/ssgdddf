/*CMD
  command: /unai
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

let aiImage;
try {
  aiImage = JSON.parse(content);
} catch (e) {
  throw new Error('JSON parsing error: ' + content);
}

const botName = 'Nepdevstoolbot'; 
const images = aiImage.images.slice(0, 10); // made by nepcoder

if (images && Array.isArray(images) && images.length > 0) {
  for (const imgUrl of images) {
    const photo = {
      photo: imgUrl,
      caption: `AI Image generated by @${botName} 🖼️`
    };
    Api.sendPhoto(photo);
  }
} else {
  throw new Error('No Image URLs found');
}


