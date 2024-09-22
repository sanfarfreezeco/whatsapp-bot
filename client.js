const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({ authStrategy: new LocalAuth() });

const dateFormat = "ddd, MMM DD YYYY - HH:mm:ss [GMT]ZZ";

module.exports = { client, dateFormat };