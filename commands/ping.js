exports.run = (client, message, args) => {
  message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
}
exports.config = {
  aliases: ["pong", "pingpong"],
  description: "Shows the bots ping!",
  how: "s!ping"
}