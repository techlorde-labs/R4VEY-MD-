
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
                    state.keys,
                    logger
                )

            },


            browser: [
                "R4VEY-MD",
                "Chrome",
                "1.0.0"
            ]

        });


        sock.ev.on(
            "creds.update",
            saveCreds
        );


        handleConnection(
            sock,
            startClient
        );


        startDashboard({

            owner:
            config.OWNER_NUMBER,

            number:
            sock.user?.id || "Waiting..."

        });


        return sock;


    } catch(error) {


        console.error(
            "Client Error:",
            error
        );


        setTimeout(
            startClient,
            5000
        );

    }

}


module.exports = startClient;
