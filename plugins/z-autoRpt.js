/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import db from '../lib/database.js'
import * as fs from 'fs'
import not from '../lib/modokuaker.js'

let handler = m => m
handler.all = async function(m) {
	if (!m.isGroup) return !1
	let chat = db.data.chats[m.chat]
	let { limit, banned } = db.data.users[m.sender]
	if (chat.isBanned) return 
	if (banned) return 
	if (limit <1) return 
	try{var userthumb=await this.profilePictureUrl(m.sender,'image')}catch{var userthumb='https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'}
	let mylogo = fs.readFileSync('./multimedia/imagenes/mylogo.jpg')
	let rtps1 = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
	let rtps2 = m.text.slice(0).trim().split(/ +/).shift().toLowerCase()
	let etiqueta = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pushname = await this.getName(m.sender)
	let redes = ['https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA?sub_confirmation=1', 'https://vm.tiktok.com/ZMLjP4RBS/', 'https://fb.watch/b7LOc9_LU2/', 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA']
	let reddom = redes[Math.floor(Math.random() * redes.length)]
//Random//
if (rtps1.includes("prefijo?") || (rtps1.includes("Prefijo?"))){
m.reply(`*Por si estas preguntando cual es el prefijo del bot*\n_Prefijo actual para uso de comandos_ : \n\n" *${Prefijo}* "\n`)
}
//
if (rtps2.startsWith("destraba") || rtps2.startsWith("Destraba") || rtps2.startsWith("destrava") || rtps2.startsWith("Destrava")){
if (!m.isBaileys && !m.fromMe) { this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
} else {
this.sendMessage(m.chat,{text:not.kuakerzzz},{quoted:m})
m.limit = 0
}
}
//
if (rtps1.includes(".Pokebot") || rtps1.includes(".pokebot")){
m.reply(`🤖*hola, gracias por usar el bot, te comparto la lista de comandos(RECUERDA PONER UN . ANTES DE CADA COMANDO):*`)
setTimeout( () => {
m.reply(`*.Safari o .safari:* Informacion de los proximos safari zone\n\n*.cd o .Cd:* informacion de los proximos dias de la comunidad\n\n*.HraDes o . hrades:* informacion de las proximas horas destacadas\n\n*.HraLeg o .hraleg:* informacion de kas proximas horas legendarias*\n\n*.Capi o .capi:* comparte el ultimo capitulo del anime\n\n *.sticker:* usalo para conbertir una imagen en sticker, tambien funciona con videos de menos de 10 segundos de duracion. 😎🤝`)
}, 2500)
m.limit = 1
}
if (rtps1.includes(".Safari") || rtps1.includes(".safari")){
m.reply(`🤖*hola, en un momento te comparto la informacion de los proximos safaris zone:*`)
setTimeout( () => {
m.reply(`*Lugar:* Gardens by the Bay\n*fecha:* desde el viernes, 18 de noviembre de 2022 hasta el domingo, 20 de noviembre\n*costos aproximados:* 238 pesos de 12:00 a 18:00 horas o 350 pesos de 10:00 a 18:00 horas\n*Cordenadas, por si eres un sucio fly:* Se subiran unos dias antes del evento* 😎🤝`)
}, 2500)
m.limit = 1
}
if (rtps1.includes(".cd") || rtps1.includes(".Cd")){
m.reply(`🤖*hola, en un momento te comparto la informacion de los proximos dias de la comunidad:*`)
setTimeout( () => {
m.reply(`*12/11:* Teddiursa\n*evolucion:* teddiursa-ursaring-ursaluna\n*ataque legado:* Ursaluna obtendra el ataque Fuerza Equina\n*bonus:* polvo estelar x3`)
}, 2500)
m.limit = 1
}
if (rtps1.includes(".HraDes") || rtps1.includes(".hrades")){
m.reply(`🤖*buscando las siguientes horas destacadas:*`)
setTimeout( () => {
m.reply(`*15/11:* Porygon con bonus de doble caramelos por captura\n*22/11:* Petilil con bonus de doble caramelos por transferencia\n*29/11:* Hoothoot con bonus de doble exp por eviolucionar`)
}, 2500)
m.limit = 1
}
if (rtps1.includes(".HraLeg") || rtps1.includes(".hraleg")){
m.reply(`🤖*buscando las siguientes horas destacadas:*`)
setTimeout( () => {
m.reply(`*16/11:* Guzzlord, (mediaUrl: 'https://bit.ly/whatsapp-image-example) \n\n*23/11:* Nihilego\n*30/11:* Nihilego`)
}, 2500)
m.limit = 1
}
if (rtps1.includes(".capi") || rtps1.includes(".Capi")){
m.reply(`🤖*hola en un momento comparto el capitulo de la semana en el anime:*`)
setTimeout( () => {
m.reply(`*Aun en espera de que se cargue el capitulo*`)
}, 2500)
m.limit = 1
}
if (rtps1.includes(".otros") || rtps1.includes(".Otros")){
m.reply(`🤖*Cargando mas eventos:*`)
setTimeout( () => {
m.reply(`*.POKÉMON AIR ADVENTURES (PRE SAFARI ZONE SINGAPORE):* Para celebrar las Aventuras Aéreas Pokémon, los Entrenadores y Entrenadoras de Singapur podrán encontrarse a Pikachu con una camiseta morada (flores) en los próximos meses.\n\n*😎🤝`)
}, 2500)
m.limit = 1	
}
//Insultos al bot :vvv
if (rtps1.includes("puto bot") || (rtps1.includes("Puto bot") || (rtps1.includes("bot puto") || (rtps1.includes("Bot puto") || (rtps1.includes("pinche bot") || (rtps1.includes("Pinche bot") || (rtps1.includes("bot gey") || (rtps1.includes("Bot gey") || (rtps1.includes("bot gay") || (rtps1.includes("Bot gay"))))))))))){
let resrand = pickRandom(["rpt1", "rpt2", "rpt3", "rpt4", "rpt5", "rpt6", "rpt7", "rpt8", "rpt9", "rpt10", "rpt11", "rpt12", "rpt13", "rpt14", "rpt15", "rpt16", "rpt17", "rpt18", "rpt19", "rpt20", "rpt21", "rpt22", "rpt23", "rpt24", "rpt25", "rpt26", "rpt27", "rpt28", "rpt29", "rpt30", "rpt31", "rpt32", "rpt33", "rpt34", "rpt35", "rpt36", "rpt37", "rpt38", "rpt39", "rpt40", "rpt41", "rpt42", "rpt43", "rpt44", "rpt45", "rpt46", "rpt47", "rpt48", "rpt49", "rpt50", "rpt51", "rpt52", "rpt53", "rpt54", "rpt55", "rpt56", "rpt57", "rpt58", "rpt59", "rpt60", "rpt61", "rpt62", "rpt63", "rpt64", "rpt65", "rpt66", "rpt67", "rpt68", "rpt69", "rpt70", "rpt71", "rpt72", "rpt73", "rpt74", "rpt75", "rpt76", "rpt77"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${pushname}: ${m.text}`, 'jpegThumbnail': mylogo}}} })
m.limit = 10
}

//Simp bot gaaa :u
if (rtps1.includes("bot gracias") || (rtps1.includes("Bot gracias") || (rtps1.includes("gracias bot") || (rtps1.includes("Gracias bot"))))){
this.sendMessage(m.chat, { text: `@${etiqueta.replace(/@.+/, '')} no hay de queso, solo hay de jamon nwn`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": mylogo},"title": `${NombreDelBot}`,"description": "@NeKosmic", "currencyCode": "PEN","priceAmount1000": "5000000","salePriceAmount1000": "500","url": "https://github.com/NeKosmic","retailerId": `000000`,"productImageCount": 5},"businessOwnerJid": `0@s.whatsapp.net` }}}})
m.limit = 1
}
if (rtps1.includes("te amo bot") || (rtps1.includes("Te amo bot") || (rtps1.includes("bot te amo") || (rtps1.includes("Bot te amo"))))){
let resrand = pickRandom(["love1", "love2", "love3", "love4", "love5", "love6"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}, mentions: [m.sender]}, {quoted: {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${pushname} <3`,jpegThumbnail: mylogo}}} })

}

//Si 🧐//
if (rtps2.includes("uwu")){
let resrand = pickRandom(["cringe1", "cringe2", "cringe3", "cringe4", "cringe5"])
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/"+resrand+".webp"}}, { quoted: m } )

}
if (rtps2.includes("owo")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/owobot.webp"}}, { quoted: m } )

}
if (rtps2.startsWith("awa")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/awabot.webp"}}, { quoted: m } )

}
if (rtps2.startsWith("ewe")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/ewebot.webp"}}, { quoted: m } )

}
if (rtps2.includes("unu")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/unubot.webp"}}, { quoted: m } )

}
if (rtps2.includes("7v7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7v7bot.webp"}}, { quoted: m } )

}
if (rtps2.includes("7w7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7w7bot.webp"}}, { quoted: m } )

}
if (rtps2.includes("7u7")){
this.sendMessage(m.chat, {sticker: {url: "https://raw.githubusercontent.com/NeKosmic/NK-BOT/main/multimedia/misstks/sticker/7u7bot.webp"}}, { quoted: m } )

}

//Fuertes insultos :v
if (rtps2.includes("tonto")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᵀᵒⁿᵗᵒ*_`)

}
if (rtps2.includes("bobo")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴮᵒᵇᵒ*_`)

}
if (rtps2.includes("papanatas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵖᵃⁿᵃᵗᵃˢ*_`)

}
if (rtps2.includes("perseve")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉʳˢᵉᵛᵉ* _`)

}
if (rtps2.includes("pelele")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉˡᵉˡᵉ*_`)

}
if (rtps2.includes("pamplinas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`)

}
if (rtps2.includes("chispas")){
m.reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᶜʰᶦˢᵖᵃˢ*_`)

}

//fakemsj - no es real . _.
if (rtps1.includes("pasen porno") || (rtps1.includes("Pasen porno") || (rtps1.includes("pasen xxx") || (rtps1.includes("Pasen xxx"))))){
this.sendMessage(m.chat, { text: `https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙\n*${pushname}️* , 𝚂𝚎𝚐𝚞𝚗 𝚕𝚊𝚜 𝚗𝚘𝚛𝚖𝚊𝚜 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 𝚎𝚜𝚎 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚖𝚊𝚝𝚎𝚛𝚒𝚊𝚕 𝚎𝚜𝚝𝚊𝚗 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘𝚜, 𝙿𝚘𝚛 𝚛𝚊𝚣??𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database...*`, mentions: [m.sender] }, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "51995386439-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./multimedia/imagenes/rgdata.jpg'), surface: 200, message: `Usuario: ${pushname}\nNumero: ${etiqueta}`, orderTitle: 'Matt_M', sellerJid: '0@s.whatsapp.net'}}} })

}

//autorrespuesta multimedia
if (rtps2.startsWith("kawai")){
this.sendMessage(m.chat, {audio: {url: "?raw=true"}, contextInfo:{externalAdReply: {title: `Kawaii >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `kawai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("baka")){
this.sendMessage(m.chat, {audio: {url: "?raw=true"}, contextInfo:{externalAdReply: {title: `Baka >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `baka.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("onichan")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotV1/blob/main/multimedia/sonidos/Onichan.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Oni-Chan >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `onichan1.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.includes("gracias sempai")){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotV1/blob/main/multimedia/sonidos/Tu.mp3?raw=true"}, contextInfo:{externalAdReply: {title: `Sempai >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `sempai.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("pikachu")){
this.sendMessage(m.chat, {audio: {url: ""}, contextInfo:{externalAdReply: {title: `Pikachu ⚡`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `pikachu.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("nya")){
this.sendMessage(m.chat, {audio: {url: ""}, contextInfo:{externalAdReply: {title: `Nya ^-^`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nya.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("niconico")){
this.sendMessage(m.chat, {audio: {url: ""}, contextInfo:{externalAdReply: {title: `Nico-nico >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `niconico.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps2.startsWith("nani")){
this.sendMessage(m.chat, {audio: {url: ""}, contextInfo:{externalAdReply: {title: `Nani >_<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `nani.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("ara ara") || (rtps1.includes("Ara ara"))){
this.sendMessage(m.chat, {audio: {url: ""}, contextInfo:{externalAdReply: {title: `Ara-ara >~<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `araara.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.startsWith("yamete") || (rtps1.startsWith("Yamete"))){
this.sendMessage(m.chat, {audio: {url: ""}, contextInfo:{externalAdReply: {title: `Yamete >//<`, body: `Matt_Mdz`, sourceUrl: reddom, thumbnailUrl: userthumb}}, fileName: `yamete.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("buenos dias") || (rtps1.includes("Buenos dias") || (rtps1.includes("buenos días") || (rtps1.includes("Buenos días"))))){
this.sendMessage(m.chat, {audio: {url: ""}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("que callados") || (rtps1.includes("el grupo esta muerto") || (rtps1.includes("despierten") || (rtps1.includes("casi nadie habla"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotV1/blob/main/multimedia/sonidos/Murio.m4a?raw=true"}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("donde la fieta") || (rtps1.includes("donde es la fiesta") || (rtps1.includes("hay fiesta") || (rtps1.includes("que se arme la fiesta"))))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotV1/blob/main/multimedia/sonidos/Murio.m4a?raw=true"}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("te aamo") || (rtps1.includes("amor"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotV1/blob/main/multimedia/sonidos/Murio.m4a?raw=true"}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
if (rtps1.includes("feliz cumpleaños") || (rtps1.includes("cumpleaños"))){
this.sendMessage(m.chat, {audio: {url: "https://github.com/angyvanne/PokeBotV1/blob/main/multimedia/sonidos/Murio.m4a?raw=true"}, fileName: `BonDia_xd.mp3`, mimetype: 'audio/mpeg', ptt:true}, {quoted: m })
m.limit = 1
}
//


export default handler
