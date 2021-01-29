const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("784819792657383434"))// rol id buraya girmeniz gerekli 
    return message.channel.send(      //rol ismini aşağıya girin
      `Bu komutu kullanabilmek için \`Owner.\` yetkisine sahip olmasınız.`
    );
  let lrowskullanıcı = message.mentions.users.first();
  if (!lrowskullanıcı)
    return message.channel.send("Kullanıcıyı etiketlemen gerekli");
  let lrowsrol = message.mentions.roles.first();
  let lrowsmember = message.guild.member(lrowskullanıcı);
  lrowsmember.roles.add("784819810974433291"); //verilecek rol
  lrowsmember.roles.remove("784819813289033738"); //alınacak rol
  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(
      `${lrowskullanıcı} **üyesine** <@&784819810974433291> **rolü verildi!**`
    )
    .setFooter(`Komutu kullanan yetkili : ${message.author.username}`);
  message.react("<a:onay:781963817696755785>"); //emoji id
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: "erkek",
  description: "Hadi erkek olalımm",
  usage: "erkek"
};
