const {RichEmbed, channel} = require("discord.js.old")
module.exports = {
    name: 'help',
    description: "Sends a Link with the document of commands",
    execute(message, args){
        const HelpEmbed = new RichEmbed()
            .setColor('#38F20A')
            .setTitle("Lord Bostengard's Commands")
            .addField( 'Command list', "https://docs.google.com/document/d/1dBU3K0KyH0btKEEH8VT6JXErzuMWUEu5RpGiNRRNd94/edit?usp=sharing")
            .setTimestamp()
        message.channel.send(HelpEmbed);
    }
}