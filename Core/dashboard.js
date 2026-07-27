
const blessed = require("blessed");
const contrib = require("blessed-contrib");


function startDashboard(data={}){


const screen =
blessed.screen({

    smartCSR:true,

    title:"R4VEY-MD Dashboard"

});


const box =
contrib.widget({

    label:" R4VEY-MD STATUS ",

    border:{
        type:"line"
    },

    style:{
        text:"white"
    },

    tags:true

});


screen.append(box);


function update(){


box.setContent(`

{cyan-fg}Bot:{/cyan-fg} R4VEY-MD

{cyan-fg}Owner:{/cyan-fg}
${data.owner || "Unknown"}

{cyan-fg}Number:{/cyan-fg}
${data.number || "Waiting..."}

{cyan-fg}Runtime:{/cyan-fg}
${process.uptime().toFixed(0)} seconds


{cyan-fg}RAM:{/cyan-fg}
${(
process.memoryUsage()
.rss /
1024 /
1024
).toFixed(2)} MB


{cyan-fg}Platform:{/cyan-fg}
${process.platform}


`);

screen.render();

}


setInterval(
update,
2000
);


update();


screen.key(
[
"escape",
"q",
"C-c"
],
()=>{

process.exit();

});


}


module.exports =
startDashboard;
