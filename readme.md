![VK API Logo](https://vk.com/images/blog/api_product.svg)

# vk-plus-plus
![NPM Version](https://img.shields.io/npm/v/vk-plus-plus.svg) 
![Downloads](https://img.shields.io/npm/dt/vk-plus-plus.svg)

Simple and fast VK api with [Long Poll](https://vk.com/dev/bots_longpoll) support 

## Install
```bash
$ npm i vk-plus-plus -s
```

## Example
```javascript
const VK = require('vk-plus-plus');
const bot = new VK({
  token: '<your tokenhere>',
  version: '5.80',
  useExecute: true //25 times increase api calls speed in highloaded projects
});

bot.on('message_new', (message) => {
  if(message.text.toLowerCase().trim() == 'hello') {
    bot.messages.send({
      user_id: message.from_id,
      message: 'hello'
    }).then((message_id) => {
      console.log('Message successfully sent. Message ID = ' + message_id);
      bot.stopBot();
    })
  }
});

bot.startBot();
```

## Methods
* `startBot()` - Just starts longpoll queries
* `stopBot()` - Stops longpoll
* `on(eventName, listener)` - Add event listener. [Event description](https://vk.com/dev/groups_events)
* other methods can be found on official [VK Developers page](https://vk.com/dev/methods)

