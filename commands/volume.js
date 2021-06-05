exports.run = (client, message, args) => {
  const queue = client.queue.get(message.guild.id);
  // queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
  console.log(queue)
}
exports.config = {
  aliases: ["vol"],
  description: "Sets the volume!",
  how: "s!volume (1 - 100)"
}