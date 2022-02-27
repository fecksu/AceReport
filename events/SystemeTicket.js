const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')

module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Laporan selesai/batalkan laporan!')
					.addOptions([
						{
							label: '✅ Selesai',
							description: 'Laporan di selesaikan.',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = "947032322409132073"
        
        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '<:4247off:912015084035907665> Kamu sudah membuat channel sebelumnya, hapus terlebih dahulu jika ingin membuatnya kembali.', ephemeral: true})
            if (interaction.values[0] == "br") {
                interaction.guild.channels.create(`Laporan br`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const br = new MessageEmbed()
                    .setTitle('Laporan Break Rules')
                    .setDescription('====Form Report Player=====\nNama Pelapor :\nNama Terlapor : (Minta bantu admin untuk menarik si pelanggar!)\nPelanggaran :\nKronologi :\nBukti SS :')
                    .setFooter('Acepride Roleplay')
                    c.send({embeds: [br], content: `${interaction.user} <@&852884159479414794> <@&852884158517608508> <@&852884157742317578>`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Channel laporan pelanggaran berhasil di buat. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "sc") {
                interaction.guild.channels.create(`laporan scam`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }  
                    ]
                }).then((c)=>{
                    const sc = new MessageEmbed()
                    .setTitle('Laporan Scam')
                    .setDescription('====Form Report Scamming=====\nNama Pelapor :\nNama Terlapor : (Minta bantu admin untuk menarik si penipu!)\nPelanggaran :\nKronologi :\nBukti SS :')
                    .setFooter('Acepride Roleplay')
                    c.send({embeds: [sc], content: `${interaction.user} <@&852884159479414794> <@&852884158517608508> <@&852884157742317578>`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Channel laporan penipuan berhasil dibuat. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "sbr") {
                interaction.guild.channels.create(`staff report`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const sbr = new MessageEmbed()
                    .setTitle('Laporan Pelanggaran staff')
                    .setDescription('====Form Report Staff=====\nNama Pelapor :\nNama Staff :\nPelanggaran :\nKronologi :\nBukti SS :')
                    .setFooter('Acepride Roleplay')
                    c.send({embeds: [sbr], content: `${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Channel laporan Pelanggaran staff berhasil dibuat. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "bh") {

                interaction.guild.channels.create(`bug house`, {

                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const bh = new MessageEmbed()
                    .setTitle('Laporan Bug Rumah')
                    .setDescription('Harap jelaskan kenapa bisa bug dan kirim bukti yang akurat!')
                    .setFooter('Acepride Roleplay')
                    c.send({embeds: [bh], content: `${interaction.user} <@&852884159479414794> <@&852884158517608508> <@&852884157742317578>`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Channel laporan bug rumah berhasil dibuat. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ru") {
                interaction.guild.channels.create(`unban request`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const ru = new MessageEmbed()
                    .setTitle('Request Unban')
                    .setDescription('FORMAT REQUEST UNBAN\n\nNama Akun:\nTanggal Banned:\nNama Admin Yang Melakukan Banned:\nBukti SS Chat Log Banned: \n\n•Apa Reason Banned Akunmu?\nJawab:\n\n•Jelaskan Kenapa Admin Harus Melakukan Unbanned Akunmu!\nJawab:\n\n•Buat Pernyataan dibawah ini Untuk Meyakinkan Admin\nJawab: \n\nNote: \n-Copy Paste = DENIED\n-Masa Banned Kurang Dari 12 Hari = DENIED\n-Cheater = DENIED\n-RTM = DENIED\n-Jual kendaraan / beli kendaraan lebih dari <#852884260120821801>  = DENIED')
                    .setFooter('Acepride Roleplay')
                    c.send({embeds: [ru], content: `${interaction.user} <@&852884159479414794> <@&852884158517608508> <@&852884157742317578>`, components: [row]})
                    interaction.reply({content: `<:2003on:912015084405014558> Channel request unban berhasil dibuat. <#${c.id}>`, ephemeral: true})
                })
            }
        }
    }
}