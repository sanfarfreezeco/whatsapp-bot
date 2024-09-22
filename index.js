const { client, dateFormat } = require("./client");
const qrcode = require('qrcode-terminal');
const date = require("date-and-time");
const { sysLog } = require("./fileLogger");

const packagejson = require("./package.json");
let start0 = "[" + date.format(new Date(), dateFormat) + "]: " + packagejson.name + "\n[" + date.format(new Date(), dateFormat) + "]: Version " + packagejson.version;
sysLog(start0);
let start1 = "[" + date.format(new Date(), dateFormat) + "]: Starting program...";
sysLog(start1);

client.on('qr', (qr) => {
    let qrStr = "[" + date.format(new Date(), dateFormat) + "]: " + "QR Login Generated!";
    sysLog(qrStr);
    let qrCodeStr = qr;
    sysLog(qrCodeStr);
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
    let authLog = "[" + date.format(new Date(), dateFormat) + "]: " + "Authenticated!";
    sysLog(authLog);
});

client.on('ready', () => {
    let readyLog = "[" + date.format(new Date(), dateFormat) + "]: " + "Ready!";
    sysLog(readyLog);
});

client.initialize();

require("./cmdLoad").cmdLoad();

process.on("SIGINT", () => {
    let sigintLog = "[" + date.format(new Date(), dateFormat) + "]: " + "[SIGINT] CTRL + C is pressed!\n[" + date.format(new Date(), dateFormat) + "]: " + "Exitting program...\n";
    console.log();
    sysLog(sigintLog);
    process.exit();
});