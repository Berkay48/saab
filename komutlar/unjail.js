const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`
    );
  let lrowskullanıcı = message.mentions.users.first();
  if (!lrowskullanıcı)
    return message.channel.send("Etiketlemen Gerekli!");
  let lrowsrol = message.mentions.roles.first();
  let lrowsmember = message.guild.member(lrowskullanıcı);
  lrowsmember.roles.add("784819813289033738");//üye rolü
  lrowsmember.roles.remove("784819820096520250");//jailli rolü
  let lrowsembed = new Discord.MessageEmbed()
    .setColor("RED")
    .addField(`Sunucu adınız`, `${lrowskullanıcı} **adlı üyenin cezası kalktı!**`)
    .setFooter(`Komutu kullanan yetkili : ${message.author.username}`);
  message.react("<a:onay:781963817696755785>");
  return message.channel.send(lrowsembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezaaç"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: "unjail",
  description: "Cezalı rolünü kaldırır",
  usage: "Cezalı rolü açar"
};
