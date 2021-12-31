const { timeformat } = require("../utils/miscUtils");
const { Message } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
    name: "uptime",
    description: "shows uptime",
    run: async (client, message, args) => {
 message.reply(`My Uptime: \`${timeformat(process.uptime())}\``);
}}