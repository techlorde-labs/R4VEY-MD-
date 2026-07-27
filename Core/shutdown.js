function shutdown(sock){


process.on(
"SIGINT",
async()=>{


console.log(
"\
\nStopping R4VEY-MD..."
);


try{


if(sock){

await sock.logout();

}


process.exit(0);


}

catch(error){

console.error(error);

process.exit(1);

}


});


process.on(
"uncaughtException",
(error)=>{


console.error(
"Critical Error:",
error
);


});


process.on(
"unhandledRejection",
(error)=>{


console.error(
"Unhandled Promise:",
error
);


});


}


module.exports =
shutdown;
