module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`${client.user.username} connected`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`Member Report`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "WATCHING",
                    url: "https://www.twitch.tv/"
                  }],
                  status: "online"})
        }, 5000);
    }
}
