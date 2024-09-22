const fs = require("fs");
const date = require("date-and-time");
const dateFileFormat = "YYYY-MM-DD";

const folder0 = "./logs/";

function consoleFileLog(logs) {
    const folder1 = folder0 + "console/";
    const file = folder1 + "console_" + date.format(new Date(), dateFileFormat + ".log");

    if (!fs.existsSync(folder0)) {
        fs.mkdirSync(folder0);
    }
    if (!fs.existsSync(folder1)) {
        fs.mkdirSync(folder1);
    }
    
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, logs);
    } else {
        fs.appendFileSync(file, "\n" + logs);
    }
}

function sysFileLog(logs) {
    const folder1 = folder0 + "system/";
    const file = folder1 + "sys_" + date.format(new Date(), dateFileFormat + ".log");

    if (!fs.existsSync(folder0)) {
        fs.mkdirSync(folder0);
    }
    if (!fs.existsSync(folder1)) {
        fs.mkdirSync(folder1);
    }

    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, logs);
    } else {
        fs.appendFileSync(file, "\n" + logs);
    }
}

function msgFileLog(logs, user, id) {
    const folder1 = folder0 + "messages/";
    const folder2 = folder1 + user + "/";
    const folder3 = folder2 + id + "/";
    const file = folder3 + "msg_" + user + "_" + id + ".log";

    if (!fs.existsSync(folder0)) {
        fs.mkdirSync(folder0);
    }
    if (!fs.existsSync(folder1)) {
        fs.mkdirSync(folder1);
    }
    if (!fs.existsSync(folder2)) {
        fs.mkdirSync(folder2);
    }
    if (!fs.existsSync(folder3)) {
        fs.mkdirSync(folder3);
    }

    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, logs);
    } else {
        fs.appendFileSync(file, "\n" + logs);
    }
}

function sysLog(logs) {
    consoleFileLog(logs);
    sysFileLog(logs);
    console.log(logs);
}

function msgLog(logs, user, id) {
    consoleFileLog(logs);
    msgFileLog(logs, user, id);
    console.log(logs);
}

module.exports = { sysLog, msgLog }