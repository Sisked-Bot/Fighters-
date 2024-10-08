import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function before(m, { conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
const groupName = (await conn.groupMetadata(m.chat)).subject
const groupAdmins = participants.filter((p) => p.admin)

let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/3a8dfff34b09754dc30ca.jpg')
const img = await (await fetch(pp)).buffer()
const chat = global.db.data.chats[m.chat]
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
const mentionsContentM = [m.sender, m.messageStubParameters[0]]

/*if (chat.detect && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './YoshiSession/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`⚠️ Eliminacion YoshiSession (PreKey) que provocan el undefined el chat`)}}}*/

if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `🍬 ${usuario} *_Ha cambiado el nombre del grupo_*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `🍒 ${usuario} *_Ha cambiado la imágen del grupo_*`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `🍒 ${usuario} *_Ha modificado la descripción!*\n\nNueva descripción:_\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `⭐ *Ahora ${m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos'} pueden editar la información del grupo*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: ` *𝘌𝘭 𝘨𝘳𝘶𝘱𝘰 𝘦𝘴𝘵𝘢́ ${m.messageStubParameters[0] == 'on' ? '𝘊𝘦𝘳𝘳𝘢𝘥𝘰 🔒' : '𝘈𝘣𝘪𝘦𝘳𝘵𝘰 🔓'}*\n\n${m.messageStubParameters[0] == 'on' ? '𝘚𝘰𝘭𝘰 𝘢𝘥𝘮𝘪𝘯𝘴' : '𝘵𝘰𝘥𝘰𝘴'} 𝘱𝘶𝘦𝘥𝘦𝘯 𝘦𝘯𝘷𝘪𝘢𝘳 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴 ⭐`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 29) {
let txt1 = `⭐ *_Admin promovido_*\n\n`
txt1 += `_Name:_ @${m.messageStubParameters[0].split`@`[0]}\n`
txt1 += `_Le otorgó admin:_ @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "body": `𝘚𝘶𝘱𝘦𝘳 𝘉𝘰𝘵 ⭐`, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": channel, "sourceUrl": channel}}})

} else if (chat.detect && m.messageStubType == 30) {
let txt2 = `😴 *_Un admin menos_*\n\n`
txt2 += `_Name:_ @${m.messageStubParameters[0].split`@`[0]}\n`
txt2 += `_Le quitó admin:_ @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "body": `𝘚𝘶𝘱𝘦𝘳 𝘉𝘰𝘵 ⭐`, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": channel, "sourceUrl": channel}}})

} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `🫐 ${usuario} *Cambió la duración de mensajes temporales a @${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `🍬 ${usuario} *Desactivó los mensajes temporales*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
