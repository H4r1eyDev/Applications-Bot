var _0xdabd=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x4D\x45\x53\x53\x41\x47\x45","\x43\x48\x41\x4E\x4E\x45\x4C","\x52\x45\x41\x43\x54\x49\x4F\x4E","\x63\x6F\x6E\x66\x69\x67","\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\x62\x6F\x74\x50\x72\x65\x66\x69\x78","\x66\x73","\x7A\x6C\x69\x62","\x62\x6F\x74\x54\x6F\x6B\x65\x6E"];const Discord=require(_0xdabd[0]);const client= new Discord.Client({partials:[_0xdabd[1],_0xdabd[2],_0xdabd[3]]});client[_0xdabd[4]]= require(_0xdabd[5]);const prefix=client[_0xdabd[4]][_0xdabd[6]];const fs=require(_0xdabd[7]);const {inflate}=require(_0xdabd[8]);const token=client[_0xdabd[4]][_0xdabd[9]]

client.commands = new Discord.Collection();

var _0xdb62=["\x2E\x6A\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x66\x69\x6C\x74\x65\x72","\x2E\x2F\x63\x6F\x6D\x6D\x61\x6E\x64\x73\x2F","\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6E\x63","","\x6E\x61\x6D\x65","\x73\x65\x74","\x63\x6F\x6D\x6D\x61\x6E\x64\x73"];const commandFiles=fs[_0xdb62[4]](_0xdb62[3])[_0xdb62[2]]((file)=>{return file[_0xdb62[1]](_0xdb62[0])});for(const file of commandFiles){const command=require(`${_0xdb62[3]}${file}${_0xdb62[5]}`);client[_0xdb62[8]][_0xdb62[7]](command[_0xdb62[6]],command)}

client.on("message", (message) => {
	if (message.content.includes(`<@${client.config.botID}>`)) {
		if (client.config.applicationStatus == 'open') {
			const openEmbed = new Discord.MessageEmbed()
				.setDescription(`\`\`✅\`\` **Applications are open!**`)
				.setColor('GREEN')
				message.channel.send(openEmbed)
		} else {
			const noOpened = new Discord.MessageEmbed()
			.setDescription(`\`\`❌\`\` **Applications are closed!**`)
			.setColor('RED')
			message.channel.send(noOpened)
		}
	}
})

var _0xdd04=["\x72\x65\x61\x64\x79","\x49\x20\x61\x6D\x20\x6F\x6E\x6C\x69\x6E\x65\x20\x61\x6E\x64\x20\x72\x75\x6E\x6E\x69\x6E\x67\x21","\x6C\x6F\x67","\x6F\x6E\x63\x65","\x6D\x65\x73\x73\x61\x67\x65","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x62\x6F\x74","\x61\x75\x74\x68\x6F\x72","\x73\x70\x6C\x69\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x73\x68\x69\x66\x74","\x61\x70\x70\x6C\x79","\x65\x78\x65\x63\x75\x74\x65","\x67\x65\x74","\x63\x6F\x6D\x6D\x61\x6E\x64\x73","\x61\x63\x63\x65\x70\x74","\x64\x65\x6E\x79","\x6F\x6E","\x6C\x6F\x67\x69\x6E"];client[_0xdd04[3]](_0xdd04[0],()=>{console[_0xdd04[2]](`${_0xdd04[1]}`)});client[_0xdd04[20]](_0xdd04[4],(_0x9319x1)=>{if(!_0x9319x1[_0xdd04[6]][_0xdd04[5]](prefix)|| _0x9319x1[_0xdd04[8]][_0xdd04[7]]){return};const _0x9319x2=_0x9319x1[_0xdd04[6]][_0xdd04[11]](prefix[_0xdd04[10]])[_0xdd04[9]](/ +/);const _0x9319x3=_0x9319x2[_0xdd04[13]]()[_0xdd04[12]]();if(_0x9319x3=== _0xdd04[14]){client[_0xdd04[17]][_0xdd04[16]](_0xdd04[14])[_0xdd04[15]](_0x9319x1,_0x9319x2,client,Discord)}else {if(_0x9319x3=== _0xdd04[18]){client[_0xdd04[17]][_0xdd04[16]](_0xdd04[18])[_0xdd04[15]](_0x9319x1,_0x9319x2,client,Discord)}else {if(_0x9319x3=== _0xdd04[19]){client[_0xdd04[17]][_0xdd04[16]](_0xdd04[19])[_0xdd04[15]](_0x9319x1,_0x9319x2,client,Discord)}}}});client[_0xdd04[21]](token)