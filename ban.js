module.exports = {
    name:'ban',
    description: "this command bans people",
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
            memberTarger.ban();
            message.channel.send("kişi banlandı ripbozo");
        }else{
            message.channel.send('düzgün yaz amk komutunu');
        
            
        }
    }

}
//kişileri sunucudan yasaklar