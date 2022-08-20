const ms = require('ms');
module.exports = {
    name:'mute',
    description: "this command mutes member",
    execute(message, args){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel
              .send(
                "bunu kullanamazsın",
              );
        }
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Üye' ); //'Mann'
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted'); //'muted'

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> mutelendi`);
                return
            }

            //memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole);
            message.channel.send(`<@${memberTarget.user.id}> ${ms(ms(args[1]))} süreliğine mutelendi`);

            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
        }else{
            message.channel.send('o kişiyi bulamıyorum');
        }
    }
}

//kişilere zamansız veya zamanlı mute atar
//muteRole.id