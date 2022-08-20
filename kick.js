module.exports = {
    name:'kick',
    description: "this command kicks people",
    execute(message, args){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel
              .send(
                "bunu kullanamazsın",
              );
        }
        
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("kişi kicklendi");
        }else{
            message.channel.send('O kişiyi kickleyemedin');
        
        }
    }
 
}
//kişileri sunucudan kickler