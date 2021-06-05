exports.run = async (client, message, args) =>  {
  const voiceChannel = message.member.voice.channel;
    const queueConstruct = {
      connection: null
    }
  client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.connection = await voiceChannel.join()
    .then((connection) => {
        const dispatcher = connection.play("./commands/hi.mp3");

        dispatcher.on("speaking", (speaking) => {
            if (!speaking) {
                voiceChannel.leave();
            }
        });
    })
}
exports.config = {
  aliases: [],
  description: "Plays music",
  how: "s!play"
}