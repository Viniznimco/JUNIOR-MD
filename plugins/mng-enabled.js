//---------------------------------------------------------------------------
//           JUNIOR-MD  
//---------------------------------------------------------------------------
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------------------------------------
const fs = require("fs");
const path = require("path");
const config = require("../config");
const { cmd, commands } = require("../command");

let antilinkAction = "off"; // Default state
let warnCount = {}; // Track warnings per user

cmd({
     pattern: "mention-reply",
     alias: ["menetionreply", "mee"],
     description: "Set bot status to always online or offline.",
     category: "settings",
     filename: __filename
 },    
 async (conn, mek, m, { from, args, isOwner, reply }) => {
     if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");
 
     const status = args[0]?.toLowerCase();
     // Check the argument for enabling or disabling the anticall feature
     if (args[0] === "on") {
         config.MENTION_REPLY = "true";
         return reply("Mention Reply feature is now enabled.");
     } else if (args[0] === "off") {
         config.MENTION_REPLY = "false";
         return reply("Mention Reply feature is now disabled.");
     } else {
         return reply(`_example:  .mee on_`);
     }
 });
 
cmd({
    pattern: "mode",
    desc: "Set bot mode to private or public.",
    category: "settings",
    filename: __filename,
}, async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 Only the owner can use this command!*");

    // Si aucun argument n'est fourni, afficher le mode actuel et l'usage
    if (!args[0]) {
        return reply(`📌 Current mode: *${config.MODE}*\n\nUsage: .mode private OR .mode public`);
    }

    const modeArg = args[0].toLowerCase();

    if (modeArg === "private") {
        config.MODE = "private";
        return reply("*_BOT MODE IS NOW SET TO PRIVATE ✅_*.");
    } else if (modeArg === "public") {
        config.MODE = "public";
        return reply("*_BOT MODE IS NOW SET TO PUBLIC ✅_*.")
        const {exec} = require("child_process")
reply("*_RESTARTING NOW...🚀_*")
await sleep(1500)
exec("pm2 restart all")
reply("*JUNIOR-MD STARTED NOW...🚀_*");
    } else {
        return reply("❌ Invalid mode. Please use `.mode private` or `.mode public`.");
    }
});

cmd({
    pattern: "auto-typing",
    alias: ["autotyping"],
    description: "Enable or disable auto-typing feature.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    if (!["on", "off"].includes(status)) {
        return reply("*🫟 ᴇxᴀᴍᴘʟᴇ:  .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ ᴏɴ*");
    }

    config.AUTO_TYPING = status === "on" ? "true" : "false";
    return reply(`Auto typing has been turned ${status}.`);
});
//--------------------------------------------
// ALWAYS_ONLINE COMMANDS
//--------------------------------------------
cmd({
    pattern: "always-online",
    alias: ["alwaysonline"],
    description: "Set bot status to always online or offline.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    if (!["on", "off"].includes(status)) {
        return reply("*🫟 ᴇxᴀᴍᴘʟᴇ:  .ᴀʟᴡᴀʏs-ᴏɴʟɪɴᴇ ᴏɴ*");
    }

    config.ALWAYS_ONLINE = status === "on" ? "true" : "false";
    await conn.sendPresenceUpdate(status === "on" ? "available" : "unavailable", from);
    return reply(`Bot is now ${status === "on" ? "online" : "offline"}.`);
});
//--------------------------------------------
//  AUTO_RECORDING COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto-recording",
    alias: ["autorecoding"],
    description: "Enable or disable auto-recording feature.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    if (!["on", "off"].includes(status)) {
        return reply("*🫟 ᴇxᴀᴍᴘʟᴇ: .ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ ᴏɴ*");
    }

    config.AUTO_RECORDING = status === "on" ? "true" : "false";
    if (status === "on") {
        await conn.sendPresenceUpdate("recording", from);
        return reply("Auto recording is now enabled. Bot is recording...");
    } else {
        await conn.sendPresenceUpdate("available", from);
        return reply("Auto recording has been disabled.");
    }
});
//--------------------------------------------
// AUTO_VIEW_STATUS COMMANDS
//--------------------------------------------
cmd({
    pattern: "status-seen",
    alias: ["autostatusview"],
    desc: "Enable or disable auto-viewing of statuses",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Default value for AUTO_VIEW_STATUS is "false"
    if (args[0] === "on") {
        config.AUTO_VIEW_STATUS = "true";
        return reply("Auto-viewing of statuses is now enabled.");
    } else if (args[0] === "off") {
        config.AUTO_VIEW_STATUS = "false";
        return reply("Auto-viewing of statuses is now disabled.");
    } else {
        return reply(`*🫟 Example:  .status-seen on/ off*`);
    }
}); 
//--------------------------------------------
// AUTO_LIKE_STATUS COMMANDS
//--------------------------------------------
cmd({
    pattern: "status-react",
    alias: ["statusreact"],
    desc: "Enable or disable auto-liking of statuses",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Default value for AUTO_LIKE_STATUS is "false"
    if (args[0] === "on") {
        config.AUTO_LIKE_STATUS = "true";
        return reply("Auto-liking of statuses is now enabled.");
    } else if (args[0] === "off") {
        config.AUTO_LIKE_STATUS = "false";
        return reply("Auto-liking of statuses is now disabled.");
    } else {
        return reply(`Example: . status-react on`);
    }
});
cmd({
    pattern: "anti-call",
    alias: ["anticall"],
    desc: "Enable or disable anti-call of statuses",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Default value for AUTO_LIKE_STATUS is "false"
    if (args[0] === "on") {
        config.ANTI_CALL = "true";
        return reply("anti-call of statuses is now enabled.");
    } else if (args[0] === "off") {
        config.ANTI_CALL = "false";
        return reply("anti-call of statuses is now disabled.");
    } else {
        return reply(`Example: .anti-call on`);
    }
});
//--------------------------------------------
//  READ-MESSAGE COMMANDS
//--------------------------------------------
cmd({
    pattern: "read-message",
    alias: ["autoreadmessage"],
    desc: "enable or disable readmessage.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.READ_MESSAGE = "true";
        return reply("readmessage feature is now enabled.");
    } else if (args[0] === "off") {
        config.READ_MESSAGE = "false";
        return reply("readmessage feature is now disabled.");
    } else {
        return reply(`_example:  .readmessage on_`);
    }
});
//--------------------------------------------
//  ANI-BAD COMMANDS
//--------------------------------------------
cmd({
    pattern: "anti-bad",
    alias: ["antibadword"],
    desc: "enable or disable antibad.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.ANTI_BAD_WORD = "true";
        return reply("*anti bad word is now enabled.*");
    } else if (args[0] === "off") {
        config.ANTI_BAD_WORD = "false";
        return reply("*anti bad word feature is now disabled*");
    } else {
        return reply(`_example:  .antibad on_`);
    }
});
//--------------------------------------------
//  AUTO-STICKER COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto-sticker",
    alias: ["autosticker"],
    desc: "enable or disable auto-sticker.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_STICKER = "true";
        
    } else if (args[0] === "off") {
        config.AUTO_STICKER = "false";
        return reply("auto-sticker feature is now disabled.");
    } else {
        return reply(`_example:  .auto-sticker on_`);
    }
});
//--------------------------------------------
//  AUTO-REPLY COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto-reply",
    alias: ["autoreply"],
    desc: "enable or disable auto-reply.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_REPLY = "true";
        return reply("*auto-reply  is now enabled.*");
    } else if (args[0] === "off") {
        config.AUTO_REPLY = "false";
        return reply("auto-reply feature is now disabled.");
    } else {
        return reply(`*🫟 Example: .auto-reply on*`);
    }
});

//--------------------------------------------
//   AUTO-REACT COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto-react",
    alias: ["autoreact"],
    desc: "Enable or disable the autoreact feature",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_REACT = "true";
        
    } else if (args[0] === "off") {
        config.AUTO_REACT = "false";
        await reply("autoreact feature is now disabled.");
    } else {
        await reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: .ᴀᴜᴛᴏ-ʀᴇᴀᴄᴛ ᴏɴ*`);
    }
});
//--------------------------------------------
//  STATUS-REPLY COMMANDS
//--------------------------------------------
cmd({
    pattern: "status-reply",
    alias: ["autostatusreply"],
    desc: "enable or disable status-reply.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_STATUS_REPLY = "true";
        return reply("status-reply feature is now enabled.");
    } else if (args[0] === "off") {
        config.AUTO_STATUS_REPLY = "false";
        return reply("status-reply feature is now disabled.");
    } else {
        return reply(`*🫟 Example:  .status-reply on*`);
    }
});
//--------------------------------------------
//  ANTILINK1 COMMANDS
//--------------------------------------------
cmd({
  pattern: "delete-link",
  alias: ["deletelink"],
  desc: "Enable or disable anti-link feature in groups",
  category: "group",
  react: "🚫",
  filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    // Check for group, bot admin, and user admin permissions
    if (!isGroup) return reply('This command can only be used in a group.');
    if (!isBotAdmins) return reply('*📛 ι ɴєє∂ тσ вє αɴ α∂мιɴ тσ ᴜѕє тнιѕ ᴄσммαɴ∂.*');
    if (!isAdmins) return reply('*📛 σɴℓʏ gʀσᴜᴘ α∂мιɴs σʀ тнє σωɴєʀ ᴄαɴ ᴜsє тнιѕ ᴄσммαɴ∂.*');

    // Enable or disable anti-link feature
    if (args[0] === "on") {
      config.DELETE_LINK = "true";
      await reply("Anti-link feature is now enabled in this group.");
    } else if (args[0] === "off") {
      config.DELETE_LINK = "false";
      await reply("Anti-link feature is now disabled in this group.");
    } else {
      await reply(`*Invalid input! Use either 'on' or 'off'. Example:antilinkkick on*`);
    }
  } catch (error) {
    return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${error.message}`);
  }
});

cmd({
    pattern: "anti-bot",
    alias: ["antibot"],
    desc: "Enable Antibot and set action (off/warn/delete/kick)",
    category: "group",
    filename: __filename
}, async (conn, mek, m, { q, reply }) => {
    if (!q) {
        return reply(`*Current Antibot Action:* ${antibotAction.toUpperCase()}\n\nUse *antibot off/warn/delete/kick* to change it.`);
    }

    const action = q.toLowerCase();
    if (["off", "warn", "delete", "kick"].includes(action)) {
        antibotAction = action;
        return reply(`*Antibot action set to:* ${action.toUpperCase()}`);
    } else {
        return reply("*🫟 Example: . anti-bot off/warn/delete/kick*");
    }
});

cmd({
    on: "body"
}, async (conn, mek, m, { from, isGroup, sender, isBotAdmins, isAdmins, reply }) => {
    if (!isGroup || antibotAction === "off") return; // Check if antibot is enabled

    const messageId = mek.key.id;
    if (!messageId || !messageId.startsWith("3EB")) return; // Detect bot-generated messages

    if (!isBotAdmins) return reply("*_I'm not an admin, so I can't take action!_*");
    if (isAdmins) return; // Ignore admins

    await conn.sendMessage(from, { delete: mek.key }); // Delete the detected bot message

    switch (antibotAction) {
        case "kick":
            await conn.groupParticipantsUpdate(from, [sender], "remove");
            break;

        case "warn":
            warnings[sender] = (warnings[sender] || 0) + 1;
            if (warnings[sender] >= 3) {
                delete warnings[sender]; // Reset warning count after kicking
                await conn.groupParticipantsUpdate(from, [sender], "remove");
            } else {
                return reply(`⚠️ @${sender.split("@")[0]}, warning ${warnings[sender]}/3! Bots are not allowed!`, { mentions: [sender] });
            }
            break;
    }
});

//--------------------------------------------
// ACCEPT_ALL COMMANDS
//--------------------------------------------
cmd({
  pattern: "acceptall",
  alias: ["approve"],
  category: "group",
  desc: "Accept all participant requests in the group.",
  filename: __filename,
}, async (conn, mek, m, { from, isGroup, body, sender, groupMetadata, participants, config, reply }) => {
  try {
    if (!isGroup) {
      return reply("This command can only be used in groups.");
    }

    const jid = from; // Group ID (from the message)
    const groupParticipants = groupMetadata.participants; // List of participants in the group

    const pendingRequests = groupParticipants.filter(p => p.isPending); // Filter pending participants

    if (pendingRequests.length === 0) {
      return reply("No pending participants to accept.");
    }

    const userJids = pendingRequests.map(p => p.id); // Get JIDs of the pending participants

    const response = await conn.groupRequestParticipantsUpdate(jid, userJids, 'approve');
    console.log(response);
    reply(`${userJids.length} participant(s) have been accepted.`);
  } catch (e) {
    return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
  }
});
//--------------------------------------------
// REJECT_ALL COMMANDS
//--------------------------------------------
cmd({
  pattern: "rejectall",
  alias: ["rejects"],
  category: "group",
  desc: "Reject all participant requests in the group.",
  filename: __filename,
}, async (conn, mek, m, { from, isGroup, body, sender, groupMetadata, participants, config, reply }) => {
  try {
    if (!isGroup) {
      return reply("This command can only be used in groups.");
    }

    const jid = from; // Group ID (from the message)
    const groupParticipants = groupMetadata.participants; // List of participants in the group

    const pendingRequests = groupParticipants.filter(p => p.isPending); // Filter pending participants

    if (pendingRequests.length === 0) {
      return reply("No pending participants to reject.");
    }

    const userJids = pendingRequests.map(p => p.id); // Get JIDs of the pending participants

    const response = await conn.groupRequestParticipantsUpdate(jid, userJids, 'reject');
    console.log(response);
    reply(`${userJids.length} participant(s) have been rejected.`);
  } catch (e) {
    return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
  }
});
//--------------------------------------------
//  ANTILINK COMMANDS
//--------------------------------------------
cmd({
  pattern: "anti-link",
  alias: ["antilink"],
  desc: "Enable or disable anti-link feature in groups",
  category: "group",
  react: "🚫",
  filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    // Check for group, bot admin, and user admin permissions
    if (!isGroup) return reply('This command can only be used in a group.');
    if (!isBotAdmins) return reply('*📛 ι ɴєє∂ тσ вє αɴ α∂мιɴ тσ ᴜѕє тнιѕ ᴄσммαɴ∂.*');
    if (!isAdmins) return reply('*📛 σɴℓʏ gʀσᴜᴘ α∂мιɴs σʀ тнє σωɴєʀ ᴄαɴ ᴜsє тнιѕ ᴄσммαɴ∂.*');

    // Enable or disable anti-link feature
    if (args[0] === "on") {
      config.ANTI_LINK = "true";
      await reply("Anti-link feature is now enabled in this group.");
    } else if (args[0] === "off") {
      config.ANTI_LINK = "false";
      await reply("Anti-link feature is now disabled in this group.");
    } else {
      await reply(`*Invalid input! Use either 'on' or 'off'. Example:antilink on*`);
    }
  } catch (error) {
    return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${error.message}`);
  }
});
//--------------------------------------------
//  NEW_GC COMMANDS
//--------------------------------------------
cmd({
  pattern: "newgc",
  category: "group",
  desc: "Create a new group and add participants.",
  filename: __filename,
}, async (conn, mek, m, { from, isGroup, body, sender, groupMetadata, participants, reply }) => {
  try {
    if (!body) {
      return reply(`Usage: !newgc group_name;number1,number2,...`);
    }

    const [groupName, numbersString] = body.split(";");
    
    if (!groupName || !numbersString) {
      return reply(`Usage: !newgc group_name;number1,number2,...`);
    }

    const participantNumbers = numbersString.split(",").map(number => `${number.trim()}@s.whatsapp.net`);

    const group = await conn.groupCreate(groupName, participantNumbers);
    console.log('created group with id: ' + group.id); // Use group.id here

    const inviteLink = await conn.groupInviteCode(group.id); // Use group.id to get the invite link

    await conn.sendMessage(group.id, { text: 'hello there' });

    reply(`Group created successfully with invite link: https://chat.whatsapp.com/${inviteLink}\nWelcome message sent.`);
  } catch (e) {
    return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
  }
});
//--------------------------------------------
//  EXIT COMMANDS
//--------------------------------------------
cmd({
  pattern: "exit",
  desc: "Leaves the current group",
  category: "group",
}, async (conn, mek, m, { from, reply }) => {
  try {
    // `from` is the group chat ID
    await conn.groupLeave(from);
    reply("Successfully left the group🙂.");
  } catch (error) {
    console.error(error);
    reply("Failed to leave the group.🤦🏽‍♂️");
  }
});
//--------------------------------------------
//           BROADCAST COMMANDS
//--------------------------------------------
cmd({
  pattern: "broadcast",
  category: "group",
  desc: "Bot makes a broadcast in all groups",
  filename: __filename,
  use: "<text for broadcast.>"
}, async (conn, mek, m, { q, isGroup, isAdmins, reply }) => {
  try {
    if (!isGroup) return reply("❌ This command can only be used in groups!");
    if (!isAdmins) return reply("❌ You need to be an admin to broadcast in this group!");

    if (!q) return reply("❌ Provide text to broadcast in all groups!");

    let allGroups = await conn.groupFetchAllParticipating();
    let groupIds = Object.keys(allGroups); // Extract group IDs

    reply(`📢 Sending Broadcast To ${groupIds.length} Groups...\n⏳ Estimated Time: ${groupIds.length * 1.5} seconds`);

    for (let groupId of groupIds) {
      try {
        await sleep(1500); // Avoid rate limits
        await conn.sendMessage(groupId, { text: q }); // Sends only the provided text
      } catch (err) {
        console.log(`❌ Failed to send broadcast to ${groupId}:`, err);
      }
    }

    return reply(`✅ Successfully sent broadcast to ${groupIds.length} groups!`);
    
  } catch (err) {
    await m.error(`❌ Error: ${err}\n\nCommand: broadcast`, err);
  }
});
//--------------------------------------------
//  GROUP PROFILE 
//--------------------------------------------
cmd({
    pattern: "setgpp",
    desc: "Set full-screen profile picture for groups.",
    category: "group",
    filename: __filename
}, async (conn, mek, m, { quoted, isGroup, isAdmins, isBotAdmins, reply }) => {
    if (!isGroup) return reply("⚠️ This command can only be used in a group.");
    if (!isAdmins) return reply("❌ You must be an admin to use this command.");
    if (!isBotAdmins) return reply("❌ I need to be an admin to change the group profile picture.");
    if (!quoted || !quoted.image) return reply("⚠️ Reply to an image to set as the group profile picture.");

    try {
        let media = await quoted.download();
        await conn.updateProfilePicture(m.chat, media);
        reply("✅ Group profile picture updated successfully.");
    } catch (e) {
        console.error(e);
        reply(`❌ Failed to update group profile picture: ${e.message}`);
    }
});

