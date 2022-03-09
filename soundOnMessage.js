const auth = require('./auth.json');
var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'bip') {
    var voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection => {
      const dispatcher = connection.play('./sounds/bonneMiller.mp3', { volume: 1 });
      dispatcher.on('finish', finish => voiceChannel.leave());
    }).catch(err => console.log(err))}
})

bot.login(auth.token)