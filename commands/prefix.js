
const Database = require("@replit/database")
const db = new Database()
exports.run = (client, message, args) => {
  if(message.member.hasPermission("MANAGE_SERVER")){
    if(!args[0]) {
      return message.reply("invalid command usage, type s!help prefix")
    }
db.set("prefix-" + message.guild.id, args[0]).then(() => {
  message.channel.send("Server prefix changed to `" + args[0] + '`')
});
  }
  else{
    message.reply("you dont have permission to use this command.")
  }
}
exports.config = {
  aliases: [],
  description: "Sets server prefix! Requires manage server",
  how: "s!prefix (prefix)"
}