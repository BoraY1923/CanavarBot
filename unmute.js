module.exports = {
    name:'unmute',
    description: "this command removes the mute from the member",
    execute(message, args){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel
              .send(
                "bunu kullanamazsın",
              );
        }
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Üye');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            //memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> mutesi kaldırıldı`);
        }else{
            message.channel.send('o kişiyi bulamıyorum');
        }
    }
}

//kişilerin mutesini kaldırır.