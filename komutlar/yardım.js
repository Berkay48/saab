const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Podyum AVM`)
.setDescription(`

:white_small_square: **=**  \`.ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`.unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`.jail\`: **Belirttiğiniz Kişiyi Sunucuda Cezalıya Atar**
:white_small_square: **=**  \`.unjail\`: **Belirttiğiniz Kişiyi Cezalıdan Çıkarır**
:white_small_square: **=**  \`.reboot\`: **Botu Yeniden Başlatır**
:white_small_square: **=**  \`.küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`.reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`.sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`.sil\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`.yetkilerim\`:  **Yetkilerinizi Gösterir.**

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};