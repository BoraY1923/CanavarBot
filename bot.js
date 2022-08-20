const Discord = require('discord.js');
require('discord-reply');
const { Intents } = Discord;
/*const client = new Discord.Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, "GUILDS", "GUILD_VOICE_STATES"] 
});*/
const client = new Discord.Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, "GUILDS", "GUILD_VOICE_STATES"] 
});

const music = require('@koenie06/discord.js-music');

const prefix = '+'

const fs = require('fs');
//const redditFetch = require('reddit-fetch/src/redditFetch');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//ONLINE KOMUTU
client.once('ready', () => {
    console.log(`logged in as ${client.user.tag}`)
});

//BOT ACTIVITY STATUS
client.on('ready', () =>{
    console.log('PLAYING Opposing Force');
    client.user.setActivity('Opposing Force', { type: "PLAYING"}).catch(console.error);

});
//BOT AKTIVITE ŞEYSİ [PLAYING - LISTENING - WATCHING - STREAMING]


client.on('message', async message => {
    if (message.content.startsWith('<@1007690650491297884> good bot')) {
      message.lineReplyNoMention('(✿◠‿◠)'); //Line (Inline) Reply with mention
  
      //message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
    }
  });
  
  client.on('message', async message => {
    if (message.content.startsWith('<@1007690650491297884> fag you')) {
      message.lineReplyNoMention('(ᕵ﹏ᕴ)'); //Line (Inline) Reply with mention
  
      //message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
    }
  });
  

  client.on('message', async message => {
    if (message.content.startsWith('<@1007690650491297884>')) {
      message.lineReplyNoMention('sa'); //Line (Inline) Reply with mention
  
      //message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
    }
  });


  client.on('message', async message => {
    if (message.content.startsWith('yedim')) {
      message.lineReplyNoMention('afied'); //Line (Inline) Reply with mention
  
      //message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
    }
  });
  
  client.on('message', async message => {
    if (message.content.startsWith('<@1007690650491297884> bad bot')) {
      message.lineReplyNoMention('(╥_╥)'); //Line (Inline) Reply with mention
  
      //message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
    }
  });
  
  client.on('message', async message => {
    if (message.content.startsWith('bad bot')) {
      message.lineReplyNoMention('(╥_╥)'); //Line (Inline) Reply with mention
  
      //message.lineReplyNoMention(`My name is ${client.user.username}`); //Line (Inline) Reply without mention
    }
  });


  client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'duke'){
        client.commands.get('duke').execute(message, args);
    } else if(command === 'avatar'){
      client.commands.get('avatar').execute(client, message, args);
    } else if(command === 'spotify'){
      client.commands.get('spotify').run(client, message, args);
    } else if(command === 'warn'){
      client.commands.get('warn').execute(message, args);
    } else if(command === 'image'){
      client.commands.get('image').execute(client, message, args);
    } else if(command === 'play'){
     client.commands.get('play').execute(message, args);
    } else if(command === 'leave'){
      client.commands.get('leave').execute(message, args);
    } else if(command === 'status'){
      client.commands.get('status').execute(message, args, Discord);
    } else if(command === 'info'){
      client.commands.get('info').execute(client, message, args);
    } else if(command === 'lunpe'){
      client.commands.get('lunpe').execute(message, args, Discord);
    }
}); 

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content
      .toLowerCase()
      .slice(prefix.length)
      .trim()
      .split(/\s+/);
    const [command, input] = args;
  
    if (command === 'clear' || command === 'c') {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel
          .send(
            "bunu kullanamazsın",
          );
      }
  
      if (isNaN(input)) {
        return message.channel
          .send('kaç mesaj silmek istediğini komutla gir -> -clear [miktar]')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }
  
      if (Number(input) < 0) {
        return message.channel
          .send('pozitif bir sayı yaz')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }
  
      // add an extra to delete the current message too
      const amount = Number(input) > 100
        ? 101
        : Number(input) + 0;
  
      message.channel.bulkDelete(amount, true)
      .then((_message) => {
        message.channel
          // do you want to include the current message here?
          // if not it should be ${_message.size - 1}
          .send(` \`${_message.size}\` mesaj silindi:broom:`)
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      });
    }
    if (command === 'help' && input === 'clear') {
        const newEmbed = new MessageEmbed()
          .setColor('#00B2B2')
          .setTitle('**Clear Help**')
          .setDescription(
            `This command clears messages for example \`${prefix}clear 5\` or \`${prefix}c 5\`.`,
          )
          .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL(),
          )
          .setTimestamp();
    
        message.channel.send(newEmbed);
      }
    });


/*
    client.on('interactionCreate', async (interaction) => {
      if(interaction.isCommand()) {
          if(interaction.commandName === '+play') {
  
              /*
               * This function requires 3 options:
               * 1) Interaction. The interaction you got from the 'interactionCreate' event.
               * 2) Channel. The Voice Channel where the music is supposed to be played in.
               * 3) Song. A song name/URL that needs to be played.
              
  
             const channel = interaction.member.voice.channel;
             const song = interaction.options.getString('song');
  
             music.play({
                 interaction: interaction,
                 channel: channel,
                 song: song
             });
          };
      };
  }); 
*/ 
  
client.login('YOURTOKEN');

//TOKEN LOGIN, USER YOUR TOKEN AND DONT SHOW ANYONE YOUR TOKEN. EASY