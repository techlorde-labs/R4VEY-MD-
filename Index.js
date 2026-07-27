require("dotenv").config();

const chalk = require("chalk");

console.clear();

console.log(
    chalk.cyan(`
██████╗ ██╗  ██╗██╗   ██╗███████╗██╗   ██╗
██╔══██╗██║  ██║██║   ██║██╔════╝╚██╗ ██╔╝
██████╔╝███████║██║   ██║█████╗   ╚████╔╝
██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝    ╚██╔╝
██║  ██║██║  ██║ ╚████╔╝ ███████╗   ██║
╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝   ╚═╝

          R4VEY-MD
`)
);

const start = require("./core/startup");

start();
