/** This code is actually OC, believe it or not */
/** Hey Rahuletto, this is actually OC, I just saw your code structure as I haven't really worked with multiple files in a npm package. I have used a different API as well  */
const Discord = require("discord.js");
const fetch = require("node-fetch");

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {import('../index').chatbotOptions} options
 */

async function chatbot(client, message, options = {}) {
  if (message.author.bot) return;
  if (options && options.toggle === false) return;

  if(!options.channels.includes(message.channel.id)) return

  try {
    const botName = options.name ?? client.user.username,
      developer = options.developer ?? "PGamerX",
      age = options.age ?? "8"



  const hasEmoteRegex = /<a?:.+:\d+>/gm
  const emoteRegex = /<:.+:(\d+)>/gm
  const animatedEmoteRegex = /<a:.+:(\d+)>/gm

  const daemoji = message.content.match(hasEmoteRegex);
    let input = message.content
    input = input
      .replace(emoteRegex.exec(daemoji), "")
      .replace(animatedEmoteRegex.exec(daemoji), "");
/** Regex taken from https://stackoverflow.com/questions/64053658/get-emojis-from-message-discord-js-v12/64064778 */

    
    const jsonRes = await fetch(
      `https://api.pgamerx.com/v5/normal/ai?message=${input}&server=primary&bot_name=${botName}&bot_age=${age}&bot_master=${developer}`,{
          headers: {"Authorization": options.api_key}
      }
    ).then((res) => res.json()) // Parsing the JSON

    const chatbotReply = jsonRes[0].response
      .replace(/@everyone/g, "`@everyone`") //RegExp with g Flag will replace every @everyone instead of just the first
      .replace(/@here/g, "`@here`");

    await message.reply({
      content: chatbotReply,
      allowedMentions: { repliedUser: false }
    });
  } catch (err) {
    if (err instanceof fetch.FetchError) {
      message.reply({ content: '**Error:**\n```' + err + '```' }); //Catch errors that happen while fetching
    }
    console.log(`Error Occured. | chatbot | Error: ${err.stack}`);
  }
}

module.exports = chatbot;