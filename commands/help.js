exports.run = (client, message, args) => {
  if (args[0]) {
    var command = args[0]
    if (client.commands.has(command)){
      message.channel.send(client.commands.get(command)).how
    }
    else{
      message.channel.send("Command not found.")
    }
  }
}
exports.config = {
  aliases: ["pong", "pingpong"],
  description: "Add an argument for command help, otherwise help for the bot!",
  how: "s!help ping | s!help"
}