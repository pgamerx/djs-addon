/** This code is actually OC, believe it or not */
const Discord = require("discord.js")
const randomPuppy = require("random-puppy")
/**
 * @param {Discord.Message} message
 * @param {import('../index').reddit_options} options
 */

async function reddit(message, options = []) {
  if (message.author.bot) return;
  if (options && options.toggle === false) return;
  if(!options.channels.includes(message.channel.id)) return
  if(!options.sub_reddit){
       throw new Error("Missing paremters or incorrect method of using this function")
  }
  if(!options.sub_reddit) return 
  const url = randomPuppy(options.sub_reddit)

  const embed = new Discord.MessageEmbed()
  .setTitle(options.title ?? `Here is an image from ${options.sub_reddit}`)
  .setColor(options.color ?? "RANDOM")
  .setImage(url)
  .setFooter(options.footer ?? "Add this to your bot | npm i @pgamerx/djs-addon")

  message.channel.send(embed)
}

module.exports = reddit;