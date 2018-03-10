const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('HCRevival Bot ready for duty!');
});

client.on('message', message => {
    if (message.content === 'hcrev=ping') {
    	message.reply('**PONG!**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=bing') {
    	message.reply('**BONG!**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=ranks') {
    	message.reply('**Owner, Manager, Developer, Partner, Bots, Member, Admin, Lead-Staff, SS Verified, Staff-Manager, YT, Management Team, Staff, Trial-Mod, Co-Owner, Platform Admin, Admin+, Mod+, Mod, Media, Famous, *, Muted, Lead-Media**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=info') {
    	message.reply('**I am HCRevival-Bot bot of the HCRevival server! HCRevival is a minecraft and discord server owned by Twenzi#7283 and LowLines | HCF#9391. In its database you can get cool ranks and meet fantastic players. And if you haven't already type in hcrev=rules for the rules and hcrev=ip for the ip!**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=ip') {
    	message.reply('**HCRevival.xyz!**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=rules') {
    	message.reply('**1. Dont Spam Chat 2. Dont Disrespect Staff And Players 3. Always Listen To Staff Members 4. Dont Abuse 5. Dont Flood Chat 6. When requesting help please make sure to provide enough information so that the staff member can help you effectively. 7. Dont tag any Staff Member for no Reason. 8. Do not use bots in any other channels only in #bot-commands 9. Do not scream in anyone ears if u are in a voice channel 10. Dont talk about death threaths
**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=discord') {
    	message.reply('**https://discord.gg/q7CCh8F**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=owners') {
    	message.reply('**Lowlane and Twenzi!**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=apply) {
    	message.reply('**Staff Application: https://docs.google.com/forms/d/e/1FAIpQLSeY0kXpNuXrApvnqZoYwWUeN4wXysYxVcIsAnr96jEct_1Rcg/viewform**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=creator') {
    	message.reply('**Developer of the Bot: Brenth#4650**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=website') {
    	message.reply('**SOON!**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=store') {
    	message.reply('**SOON!**');
  	}
});

client.on('message', message => {
    if (message.content === 'hcrev=help') {
    	message.reply('**hcrev=ping, hcrev=bing, hcrev=info, hcrev=rules, hcrev=ranks, hcrev=website, hcrev=store, hcrev=creator, hcrev=owners, hcrev=apply, hcrev=discord, hcrev=ip**');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
