const { client, dateFormat } = require("../client");
const date = require("date-and-time");
const { msgLog } = require("../fileLogger");

function messageLogger() {
    client.on("message_create", message => {
        const now = new Date();
        let from;
        let user;
        let id = message.from.slice(0, -5);
        if (message.fromMe) {
            if (message.to.slice(-5) === "@c.us") {
                from = "]: +" + message.from.slice(0, -5) + ": ";
                user = "user";
                id = message.to.slice(0, -5);
            } else if (message.to.slice(-5) === "@g.us") {
                from = "]: Group: " + message.to.slice(0, -5) + ": " + message.author.slice(0, -5) + ": ";
                user = "group";
                id = message.to.slice(0, -5);
            }
        } else if (message.from.slice(-5) === "@c.us") {
            from = "]: +" + message.from.slice(0, -5) + ": ";
            user = "user";
        } else if (message.from.slice(-5) === "@g.us") {
            from = "]: Group: " + message.from.slice(0, -5) + ": " + message.author.slice(0, -5) + ": ";
            user = "group";
        }
        let msg = "[" + date.format(now, dateFormat) + from + message.body;
        msgLog(msg, user, id);
    });
}

module.exports = { messageLogger }