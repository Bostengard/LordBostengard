const {RichEmbed, channel} = require("discord.js.old")

module.exports = {
    name: 'slowmode',
    description: "changes the slomode",
    execute(message, args){
        const amount = message.content.split(" ")[1];

        const SlowmodeEmbed = new RichEmbed()
            .setColor('#06ff00')
            .addField( 'Slowmode changed to', amount + "s")
            .addField( 'Changed by', message.author.tag)
            .setTimestamp()

        const NoSlowmodeEmbed= new RichEmbed()
            .setColor('#ff0000')
            .addField( 'Can\'t change slowmode', 'u don\'t have permission to do that')
            .setTimestamp()

        if (message.member.hasPermission("MANAGE_CHANNELS")) {
                message.channel.setRateLimitPerUser(amount);
                message.channel.send(SlowmodeEmbed);

        } else {
            message.channel.send(NoSlowmodeEmbed)
        }
    }
}