const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!"
        )
        .setColor("RED")
    );
  let lrowskullanıcı = message.mentions.users.first();
  if (!lrowskullanıcı)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Bir üye etiketlemen gerekiyor!")
        .setColor("RED")
    );
  let lrowsuser = message.mentions.users.first();
  let lrowsrol = message.mentions.roles.first();
  let lrowsmember = message.guild.member(lrowskullanıcı);
  let lrowsreason = args.slice(1).join(" ");
  if (!lrowsreason)
    return message.channel
      .send("Lütfen Bir Sebep Yazınız.")
      .then(m => m.delete(5000));
  message.react("<a:onay:781963817696755785>");//emoji id girmeniz yeterli olacaktır
  message.guild.members.cache.get(lrowsmember.id).roles.cache.forEach(r => {
    message.guild.members.cache.get(lrowsmember.id).roles.remove(r);
  });
  lrowsmember.roles.add("784819820096520250");//jail rol id
  const lrowskanal = message.guild.channels.cache.find(c => c.id == "784834351102951495");//JAIL-LOG KANAL ID
  const lrowsembed1 = new Discord.MessageEmbed()
    .setDescription(
      `${lrowskullanıcı} Adlı Üye **${lrowsreason}** Yüzünden Jaile Atıldı!`
    )
    .setColor("RED")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();

  let lrowsembed = new Discord.MessageEmbed()
    .setDescription(`${lrowskullanıcı} **Adlı Üye Jaile Atıldı!**`)
    .setColor("BLACK")
    .setFooter(`Podyum Jail Sistemi`)
    .setTimestamp();
  return message.channel
    .send(lrowsembed)
    .then(lrowskanal.send(lrowsembed1))
    .then(m => m.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza", "cezalandır"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};

exports.help = {
  name: "jail",
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: "!jail @etiket sebep"
}; 
