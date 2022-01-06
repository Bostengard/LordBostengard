const {RichEmbed, channel} = require("discord.js.old")

module.exports = {
    name: 'softban',
    description: "softBan a member",
    execute(message, args){

        const target = message.mentions.users.first();

        const BanEmbed = new RichEmbed()
            .setColor('#ff0000')
            .addField( 'SoftBanned', target.tag)
            .addField( 'SoftBanned by', message.author.tag)
            .setTimestamp()

        const NoBanEmbed= new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Can\' t soft ban', 'u don\'t have permission to do that')
            .setTimestamp()

        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (target) {
                const memberTarget = message.guild.members.get(target.id);
                memberTarget.ban();
                message.channel.send(BanEmbed);
                message.guild.unban(memberTarget)
            } else {
                message.channel.send(NoBanEmbed);

            }
        }
    }
}