var date = new Date();
var isReady = new Boolean(true);
module.exports = {
    name: 'music',
    description: "plays an audio file",
    execute(message, args){
        const song = message.content.split(" ")[1];

        var VC = message.member.voiceChannel;

        console.log("play " +song + "||" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);


        if(isReady == true) {

            if (!VC) {
                message.channel.send("you're not connected to a VC!" + ` i can't play ${song}`)
                return;
            } else {
                isReady = new Boolean (false)
                VC.join()
                    .then(connection => {

                        const dispatcher = connection.playFile(`.\\Files\\Audio\\${song}.mp3`);
                        dispatcher.on("end", end => {

                            VC.leave()
                            isReady = new Boolean (true)
                        });
                    })
                    .catch(console.error);
            }
        } else if (song == "stop"){
            VC.leave();
            isReady = new Boolean (true)
        }else  {
            message.channel.send("A song is currently being played")
        }
    }
}