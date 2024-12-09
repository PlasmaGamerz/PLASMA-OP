import { Colors } from "discord.js";

const settings = {
  TOKEN: process.env.TOKEN || "Bot_Token",
  PREFIX: process.env.PREFIX || "BotPrefix",
  Owners: ["1014833598303576115", "994111697738551357"],
  Slash: {
    Global: false,
    GuildID: process.env.GuildID || "1302565745716101161",
  },
  embed: {
    color: Colors.Blurple,
    wrongColor: Colors.Red,
  },
  emoji: {
    success: "✅",
    error: "❌",
  },
};

export default settings;
