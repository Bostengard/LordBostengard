const {RichEmbed, channel} = require("discord.js.old")
var date = new Date();
var Time = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();


module.exports = {


    name: 'aboutme',
    description: "userInfo",
    execute(message, args){
        const HighestRole = message.member.highestRole.id
        const HelpEmbed = new RichEmbed()
            .setColor('#38F20A')
            .setTitle("User Info")
            .addField( 'Created', message.author.createdAt)
            .addField( 'User ID', message.author.id,true)
            .addField('Highest Role', `<@&${HighestRole}>`,true)
            .addField( 'Avatar',"here's your avatar")

            .setImage(message.author.avatarURL)
            .setTimestamp()
        message.channel.send(HelpEmbed);
    }
}