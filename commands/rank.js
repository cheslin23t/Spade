const Database = require("@replit/database")
const db = new Database()
function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}
exports.run = (client, message, args) => {
  
db.get("prefix-" + message.user.id).then(value => {
  if (value == 5) {
    const user = getUserFromMention(args[0]);
    if(!args[1] || !user){
      return message.channel.send("Invalid command usage")
    }
    if(args[1] == "0" || args[1] == "1" || args[1] == "2" || args[1] == "3" || args[1] == "4" || args[1] == "5"){

    }
    else{
      return message.channel.send("Invalid rank number")
    }
    
db.set("user-" + user.id, args[1]).then(() => {
  message.channel.send("Ranked user successfully!")
});
  }
  else{
    message.reply("you don't have permission to use this command")
  }
}); 
}
exports.config = {
  aliases: [],
  description: "Ranks a person (Bot owner only)",
  how: "s!rank (mention user) (Rank number)"
}