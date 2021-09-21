var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "RPC DESCRIPTION",
assets : {
large_image : "YOUR IMAGE",//You must first upload an image in the discord dev portal here https://discord.com/developers/applications/"application id here"/rich-presence/assets 
large_text : "THIS TEXT WILL BE SEEN WHEN YOU HOVER YOUR CURSOR OVER THE RPC'S IMAGE"
},
buttons : [{label : "Label Title" , url : "Label Url"},{label : "Label Title 2",url : "Label Url"}]
}
})
})
client.login({ clientId : "Application ID" }).catch(console.error);