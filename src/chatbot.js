/** This code is actually OC, believe it or not */

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
      ranges = [
        "\ud83c[\udf00-\udfff]", // U+1F300 to U+1F3FF
        "\ud83d[\udc00-\ude4f]", // U+1F400 to U+1F64F
        "\ud83d[\ude80-\udeff]" // U+1F680 to U+1F6FF
      ];

    let input = message.content.replace(
      new RegExp(ranges.join("|"), "g"),
      "."
    );
    const hasEmoteRegex = /<a?:.+:\d+>/gm;
    const emoteRegex = /<:.+:(\d+)>/gm;
    const animatedEmoteRegex = /<a:.+:(\d+)>/gm;

    const emoj = message.content.match(hasEmoteRegex);

    input = input
      .replace(emoteRegex.exec(emoj), "")
      .replace(animatedEmoteRegex.exec(emoj), "");

    
    const jsonRes = await fetch(
      `https://api.pgamerx.com/v5/chatbot?message=${input}&server=primary&bot_name=${botName}&bot_age=${age}&bot_master=${developer}`,{
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