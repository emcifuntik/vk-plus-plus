const VK = require('./');
const bot = new VK({
  token: '141552fd19520604c24548e2da8eb95bdc9d4c9a0726bcd93a0778ccb211ca363184f1bab8aaa42f1bd7c',
  version: '5.80',
  useExecute: true //25 times increase api calls speed in highloaded projects
});

bot.on('message_new', (message) => {
  if(message.text.toLowerCase().trim() == 'hello') {
    bot.messages.send({
      user_id: message.from_id,
      message: 'hello'
    }).then((result) => {
      console.log('Message successfully sent');
      bot.stopBot();
    })
  }
});

bot.startBot();
