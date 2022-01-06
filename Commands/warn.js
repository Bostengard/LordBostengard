    const {RichEmbed, channel} = require("discord.js.old")

module.exports = {
    name: 'warn',
    description: "warn a member",
    execute(message, args){

        const target = message.mentions.users.first();

        const WarnEmbed = new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Warned', target.tag)
            .addField( 'Warned by', message.author.tag)
            .setTimestamp()

        const NoWarnEmbed= new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Can\' t Warn', 'u don\'t have permission to do that')
            .setTimestamp()

        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            if (target) {
                message.channel.send(WarnEmbed);
                target.send(WarnEmbed);
                message.author.send(WarnEmbed);
            }


        } else {
            message.channel.send(NoWarnEmbed)
        }
    }
}