const {RichEmbed, channel} = require("discord.js.old")

module.exports = {
    name: 'ban',
    description: "Ban a member",
    execute(message, args){

        const target = message.mentions.users.first();

        const BanEmbed = new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Banned', target.tag)
            .addField( 'Banned by', message.author.tag)
            .setTimestamp()

        const NoBanEmbed= new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Can\' t ban', 'u don\'t have permission to do that')
            .setTimestamp()

        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (target) {
                const memberTarget = message.guild.members.get(target.id);
                memberTarget.ban();
                message.channel.send(BanEmbed);
            } else {
                message.channel.send(NoBanEmbed);

            }
        }
    }
}