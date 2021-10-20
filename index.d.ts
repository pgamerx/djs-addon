import {
  ButtonInteraction,
  Client,
  ColorResolvable,
  CommandInteraction,
  EmojiResolvable,
  HexColorString,
  Message,
  MessageActionRow,
  MessageEmbed,
  MessageReaction,
  TextChannel,
  User,
} from "discord.js";
import { Collection, Fields } from "quickmongo";

type FieldModel = Fields.FieldModel<unknown>;
export type DB<T extends FieldModel = any> = Collection<T>;

export type chatbotOptions = {
  /** Your api key derived from api.pgamerx.com/register */
  api_key: string;
  /** Channel id for where to speak (Has to be an array) */
  channels: string[];
  /** ChatBot name, default: Your bot name */
  name?: string;
  /** Age of the bot (yea I know it should be an int but rsa works with string only.) */
  age?: string;
  /** Toggle the chatbot */
  toggle?: boolean;
  /** Your name */
  developer?: string;
  /** More options in v3*/
};

export type ytSearchOptions = {
  /** Query you want to be searched */
  query: string;
  /** Allowed channels: This command would only be used in these channels */
  channels: string[];
  /** Footer you want to be placed on the embed (OPTIONAL) */
  footer: string;
  /** Your Youtube v3 API key */
  api_key: string;

  /** Embed Information */
  embed_color: HexColorString;
  embed_footer: string;
};
export type reddit_options = {
  /** Channels where bot can send memes */
  channels: string[];
  /** Sub-reddit from where you want bot to get images from */
  sub_reddit: string;
  /** Embed options**/

  /** The Embed Color of the image embed, default: #075FFF**/
  color: HexColorString;

  /** (string) => eg-"Here is a meme" or "Random meme"**/
  title: string;

  /** (string) => eg-"Developed by X" or "This is a footer"**/
  footer: string;
};

export type calc_options = {
  /** The Embed Color of the calculator embed, default: #075FFF */
  embedColor: HexColorString;
  /** Slash support */
  slash?: boolean;
  /**  Credit the package. (Only Boolean [true/false]) */
  credit?: boolean;
  /** Have Custom Calculator footer when credits are false */
  embedFooter?: string;
};

export type rankCard_options = {
  /**Provide a member into the system (Identifies the member automatically if not provided) */
  member?: User;
  level: number;
  currentXP: number;
  neededXP: number;
  rank: number;
  /** Slash support */
  slash?: boolean;
  /** Background of the rank card */
  background?: string;
};

export type ytNotifyOptions = (
  | {
      /** Youtube channel ID from the URL */
      ytID: string;
    }
  | {
      /** Youtube channel URL */
      ytURL: string;
    }
) & {
  /** Discord channel ID to post message there */
  channel: string;
  /** This checks if the video is posted after starting the bot. */
  startAt: Date;
  /** Message sent when the user posts a video */
  msg_to_be_sent?: string;
};

export declare function rankCard(
  message: Message,
  options?: rankCard_options
): Promise<void>;

export declare function ytSearch(
  message: Message,
  options?: ytSearchOptions
): Promise<void>;
export declare function ytNotify(
  client: Client,
  db: DB,
  options?: ytNotifyOptions
): Promise<void>;
export declare function calculator(
  interaction: CommandInteraction,
  options?: calc_options
): Promise<void>;
export declare function chatbot(
  client: Client,
  message: Message,
  options?: chatbotOptions
): Promise<void>;
export declare function reddit(
  message: Message,
  options?: reddit_options
): Promise<void>;
