const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Pilih tipe laporan.')
					.addOptions([
						{
							label: '🚷 | Break Rules',
							description: 'Membuat laporan break rules',
							value: 'br',
						},
						{
							label: '🚯 | Scam',
							description: 'Membuat laporan penipuan',
							value: 'sc',
						},
                        {
							label: '🚫 | Staff Report',
							description: 'Membuat laporan pelanggaran staff',
							value: 'sbr',
						},
						{
							label: '🏠 | Bug House',
							description: 'Membuat laporan bug rumah',
							value: 'bh',
						},
						{
							label: '🔓 | Request Unban',
							description: 'Membuat laporan untuk unban akun',
							value: 'ru',
						},
							
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Laporan',
                description: '**📝 __Buat laporan:__**\nPilih tipe yang sesuai dengan yang ingin kamu laporkan!.\n\n** ⚠️ __Peringatan__**\nJika kamu menyalah gunakan bot ini, akan di kenakan sanksi berupa timeout discord selama 7 hari!!.',
                color: "BLACK",
                footer: {text: 'Acepride Roleplay'}
            }],
            components: [row]
        })
    }
}
