const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
══════════ ⚔️ ══════════  
                     *ASTA* - *BOT*  
  ══════════ ⚔️ ══════════
> *Runtime*  
> *Mode*     
> *Prefix*    
> *Ram* 
 
│▸*⚔️* *ᴄʀᴇᴀᴛᴏʀ* : *➺ᴅᴀᴠᴇ
│▸*⚔️* *ᴠᴇʀsɪᴏɴ* : *ᴠ2.1*
│▸*⚔️* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
Quote: let  God be your light and path out of the darkness  
│ ᴏᴡɴᴇʀ : dave 
│ ɴᴜᴍʙᴇʀ: 254114127157
│ ᴘʀᴇғɪx: .
╰─────────────
╭━ ASTA BOT COMMANDS 
┣❐ ➤.𝚂𝚝𝚒𝚌𝚔𝚎𝚛
┣❐ ➤.𝙰𝚒
┗⬣ 
╭━ 𝙶𝚁𝙾𝚄𝙿
┣❐ ➤.𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┣❐ ➤.𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┣❐ ➤.𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┣❐ ➤.𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┣❐ ➤.𝙶𝚛𝚘𝚞𝚙
┣❐ ➤.𝚂𝚎𝚝𝚐𝚘𝚘𝚍𝚋𝚞𝚢
┣❐ ➤.𝚂𝚎𝚝𝚠𝚎𝚕𝚌𝚘𝚖𝚎
┣❐ ➤.𝙰𝚍𝚍
┣❐ ➤.𝚁𝚎𝚖𝚘𝚟𝚎
┣❐ ➤.𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┣❐ ➤.𝙳𝚎𝚖𝚘𝚝𝚎
┗⬣ 
╭━ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 
┣❐ ➤.𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┣❐ ➤.𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┣❐ ➤.𝙶𝚍𝚛𝚒𝚟𝚎
┣❐ ➤.𝙸𝚗𝚜𝚝𝚊
┣❐ ➤.𝚂𝚘𝚗𝚐
┣❐ ➤.𝚅𝚒𝚍𝚎𝚘
┣❐ ➤.𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┣❐ ➤.𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┣❐ ➤.𝚃𝚒𝚔𝚝𝚘𝚔
┗⬣ 
╭━ 𝙼𝙰𝙸𝙽 
┣❐ ➤.𝙿𝚒𝚗𝚐
┣❐ ➤.𝙰𝚕𝚒𝚟𝚎
┣❐ ➤.𝙾𝚠𝚗𝚎𝚛
┣❐ ➤.𝙼𝚎𝚗𝚞
┣❐ ➤.𝚁𝚎𝚙𝚘
┗⬣ 
©dave
 thanks to the almighty 


 _*ASTA MD*_
 > © *dave*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/whar66.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
