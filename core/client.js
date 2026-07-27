
const {
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore,
    logger
} = require("../lib/baileys");

const path = require("path");
const config = require("../config/config");

const handleConnection = require("./connection");
const startDashboard = require("./dashboard");


let sock;


async function startClient() {

    try {

        const sessionPath = path.join(
            __dirname,
            "../auth/sessions"
        );


        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(
            sessionPath
        );


        const {
            version
        } = await fetchLatestBaileysVersion();


        sock = makeWASocket({

            version,

            logger,

            printQRInTerminal:
                config.PAIRING_MODE === "qr",


            auth: {

                creds: state.creds,

                keys:
                makeCacheableSignalKeyStore(
