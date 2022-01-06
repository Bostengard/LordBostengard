const {RichEmbed, channel} = require("discord.js.old")


module.exports = {
    name: 'kick',
    description: "kicks a member",
    execute(message, args){

        const target = message.mentions.users.first();

        const KickEmbed = new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Kicked', target.tag)
            .addField( 'Kicked by', message.author.tag)
            .setTimestamp()

        const NoKickEmbed= new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Cant kick', 'u don\'t have permission to do that')
            .setTimestamp()

        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (target) {
                const memberTarget = message.guild.members.get(target.id);
                memberTarget.kick();
                message.channel.send(KickEmbed);
            } else {
                message.channel.send(NoKickEmbed);

            }
        }
    }
}