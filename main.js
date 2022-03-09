const auth = require('./auth.json');
var Discord = require('discord.js');
var bot = new Discord.Client();

// Force nickname to a certain user
bot.on("guildMemberUpdate", function(oldMember, newMember)
{
	console.log(newMember.user.username)
	if (newMember.user.username == 'GabrielG')
	{
		if (newMember.nickname != oldMember.nickname)
		{
			newMember.setNickname('8===D')
		}			
	}
})

// On voice chat connection send a notif and change a user nickname
bot.on("voiceStateUpdate", function(oldState, newState){
	var voiceChannel = newState.channel;
	if (voiceChannel != null)
	{
		voiceChannel.join().then(connection => 
		{
            const dispatcher = connection.play('./sounds/bonneMiller.mp3', { volume: 0.7 });
            dispatcher.on('finish', finish => voiceChannel.leave());
        }).catch(err => console.log(err))
		
			if (newState.member.user.username == 'GabrielG')
	        {
		        newState.member.setNickname('CasseNoisettes')
	        }
	}
})

bot.login(auth.token)