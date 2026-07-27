const {
    DisconnectReason
} = require("../lib/baileys");


const handleConnection = (
    sock,
    startClient
)=>{

    sock.ev.on(
        "connection.update",
        async(update)=>{

            const {
                connection,
                lastDisconnect
            } = update;


            if(connection === "open"){

                console.log(
                    "✅ WhatsApp Connected"
                );

                console.log(
                    "User:",
                    sock.user.id
                );

            }


            if(connection === "close"){

                const status =
                lastDisconnect
                ?.error
                ?.output
                ?.statusCode;


                console.log(
                    "Connection closed:",
                    status
                );


                if(
                    status !== DisconnectReason.loggedOut
                ){

                    console.log(
                        "🔄 Reconnecting..."
                    );

                    await startClient();

                }
                else{

                    console.log(
                        "❌ Logged out. Session removed."
                    );

                }

            }

        }
    );

};


module.exports = handleConnection;
