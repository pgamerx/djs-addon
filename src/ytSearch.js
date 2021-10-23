/** This code is actually OC, believe it or not */
const Discord = require("discord.js");
const YouTube = require("discord-youtube-api");
/**
 * @param {Discord.Message} message
 * @param {import('../index').ytSearchOptions} options
 */

async function ytSearch(message, options = {}) {
  const youtube = new YouTube(options.api_key);
  if (!message) throw new Error("Message object is missing.");
  if (!options.api_key) throw new Error("Youtube API key is missing.");
  if (!options.channels.includes(message.channel.id))
    throw new Error(
      "This channel isn't added to the list of allowed channels, kindly contact developer for more info."
    );
  if (!options.query) throw new Error("Query is missing");

  const video = await youtube.searchVideos(options.query);
  const embed = new Discord.MessageEmbed()
    .setTitle(video.title)
    .setDescription(video.description)
    .setImage(video.thumbnail)
    .addField(
      `Additional Information`,
      `
Video length: ${video.length}
Video URL: [Click Here](${video.url})
`
    )
    .setColor(options.embed_color ?? "RANDOM")
    .setFooter(
      options.embed_footer ??
        "Make your own ytSearch command | npm i @pgamerx/djs-addon"
    );

  message / channel.send({ embeds: [embed] });
}

module.exports = ytSearch;
