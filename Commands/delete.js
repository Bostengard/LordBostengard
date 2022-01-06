const {RichEmbed, channel} = require("discord.js.old")


module.exports = {
    name: 'delete',
    description: "deleted",
    execute(message, args){

        const amount = message.content.split(" ")[1];

        const DeleteEmbed = new RichEmbed()
            .setColor('#19ff00')
            .addField( 'Deleted', amount)
            .addField( 'Deleted by', message.author.tag)
            .setTimestamp()
        if(!amount)
        {
            message.reply(`<amount>`);
            return;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send('You have no permissions to do that');
            return;
        }
        message.channel.bulkDelete(amount)
            message.channel.send(DeleteEmbed)
            console.log("deleted :" + amount + "||" + message.author.id + " || " + message.author.tag + " || " + message.guild.name);


    }
}