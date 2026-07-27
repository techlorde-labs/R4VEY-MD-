const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore,
    Browsers,
    jidDecode,
    proto,
    getContentType,
    downloadContentFromMessage
} = require("@whiskeysockets/baileys");


const pino = require("pino");


const logger = pino({
    level: "silent"
});


module.exports = {

    // Main WhatsApp client
    makeWASocket,


    // Authentication
    useMultiFileAuthState,
    makeCacheableSignalKeyStore,


    // Connection
    DisconnectReason,
    fetchLatestBaileysVersion,


    // Utilities
    Browsers,
    jidDecode,
    proto,
    getContentType,
    downloadContentFromMessage,


    // Logger
    logger

};
