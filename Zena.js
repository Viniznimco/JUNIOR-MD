var __createBinding = this && this.__createBinding || (Object.create ? function (_0x4fbbf1, _0x4a09a6, _0xf0a259, _0x3f0770) {
  if (_0x3f0770 === undefined) {
    _0x3f0770 = _0xf0a259;
  }
  var _0x1478a6 = Object.getOwnPropertyDescriptor(_0x4a09a6, _0xf0a259);
  if (!_0x1478a6 || ("get" in _0x1478a6 ? !_0x4a09a6.__esModule : _0x1478a6.writable || _0x1478a6.configurable)) {
    _0x1478a6 = {
      'enumerable': true,
      'get': function () {
        return _0x4a09a6[_0xf0a259];
      }
    };
  }
  Object.defineProperty(_0x4fbbf1, _0x3f0770, _0x1478a6);
} : function (_0x5969b7, _0x12ac0b, _0x433f82, _0x20626d) {
  if (_0x20626d === undefined) {
    _0x20626d = _0x433f82;
  }
  _0x5969b7[_0x20626d] = _0x12ac0b[_0x433f82];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x35adc4, _0x193003) {
  Object.defineProperty(_0x35adc4, 'default', {
    'enumerable': true,
    'value': _0x193003
  });
} : function (_0x1d0084, _0x3790a8) {
  _0x1d0084["default"] = _0x3790a8;
});
var __importStar = this && this.__importStar || function (_0x1bfa5c) {
  if (_0x1bfa5c && _0x1bfa5c.__esModule) {
    return _0x1bfa5c;
  }
  var _0x4aa667 = {};
  if (_0x1bfa5c != null) {
    for (var _0x243cde in _0x1bfa5c) if (_0x243cde !== "default" && Object.prototype.hasOwnProperty.call(_0x1bfa5c, _0x243cde)) {
      __createBinding(_0x4aa667, _0x1bfa5c, _0x243cde);
    }
  }
  __setModuleDefault(_0x4aa667, _0x1bfa5c);
  return _0x4aa667;
};
var __importDefault = this && this.__importDefault || function (_0xf9a3ad) {
  return _0xf9a3ad && _0xf9a3ad.__esModule ? _0xf9a3ad : {
    'default': _0xf9a3ad
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./config");
let fs = require("fs-extra");
let path = require("path");
const FileType = require('file-type');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./lib/antilien");
let evt = require(__dirname + "/Viniz/Nimco");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./lib/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require('./lib/banGroup');
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./lib/onlyAdmin");
let {
  reagir
} = require(__dirname + '/Ibrahim/app');
const prefixe = conf.PREFIXE;
var session = conf.session.replace(/SPARK-X-2025;;;/g, '');
require("dotenv").config({
  'path': "./config.env"
});
const express = require("express");
const app = express();
const PORT = process.env.PORT || 0xbb8;
app.use(express["static"](path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
function atbverifierEtatJid(_0x3d6ef9) {
  if (!_0x3d6ef9.endsWith("@s.whatsapp.net")) {
    console.error("Invalid JID format:", _0x3d6ef9);
    return false;
  }
  console.log("JID verified:", _0x3d6ef9);
  return true;
}
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/Session/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/Session/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/Session/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + '/Session/creds.json', atob(session), "utf8");
    }
  } catch (_0x2abae3) {
    console.log("Session Invalid " + _0x2abae3);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
setTimeout(() => {
  authentification();
  async function _0x12b08f() {
    0x0;
    const {
      version: _0x42bb44,
      isLatest: _0x309eaf
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0xbf89dc,
      saveCreds: _0x4416e6
    } = await baileys_1.useMultiFileAuthState(__dirname + '/Session');
    0x0;
    const _0xd6ebf3 = {
      'version': _0x42bb44,
      'logger': pino({
        'level': 'silent'
      }),
      'browser': ['CHRIST-AI', "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0xbf89dc.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0xbf89dc.keys, logger)
      },
      'getMessage': async _0x2a095e => {
        if (store) {
          const _0x55dabf = await store.loadMessage(_0x2a095e.remoteJid, _0x2a095e.id, undefined);
          return _0x55dabf.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x9620a9 = baileys_1["default"](_0xd6ebf3);
    store.bind(_0x9620a9.ev);
    const _0x307cab = require('google-tts-api');
    _0x9620a9.ev.on("messages.upsert", async _0x41a601 => {
      const {
        messages: _0x80bea6
      } = _0x41a601;
      const _0x3035ff = _0x80bea6[0x0];
      if (!_0x3035ff.message) {
        return;
      }
      const _0x101ead = Object.keys(_0x3035ff.message)[0x0];
      const _0x496b91 = _0x3035ff.key.remoteJid;
      const _0x1eace3 = _0x3035ff.message.conversation || _0x3035ff.message.extendedTextMessage?.["text"];
      if (_0x3035ff.key.fromMe || _0x496b91 === conf.NUMERO_OWNER + "@s.whatsapp.net") {
        return;
      }
      if (conf.CHATBOT1 === 'yes') {
        if (_0x101ead === "conversation" || _0x101ead === 'extendedTextMessage') {
          try {
            const _0x5c1781 = "https://apis.ibrahimadams.us.kg/api/ai/gpt4?apikey=ibraah-tech&q=" + encodeURIComponent(_0x1eace3);
            let _0x6720a7 = await fetch(_0x5c1781);
            let _0x249c6c = await _0x6720a7.json();
            if (_0x249c6c && _0x249c6c.result) {
              const _0x4e7d0e = _0x249c6c.result;
              const _0x3fc0a1 = _0x307cab.getAudioUrl(_0x4e7d0e, {
                'lang': 'en',
                'slow': false,
                'host': "https://translate.google.com"
              });
              await _0x9620a9.sendMessage(_0x496b91, {
                'audio': {
                  'url': _0x3fc0a1
                },
                'mimetype': "audio/mp4",
                'ptt': true
              });
            } else {
              throw new Error("Invalid response or missing \"result\" field in primary API.");
            }
          } catch (_0x3421a9) {
            console.error("Primary API Error:", _0x3421a9.message);
            try {
              const _0x12564a = 'https://api.davidcyriltech.my.id/ai/chatbot?query=' + encodeURIComponent(_0x1eace3);
              let _0x30935e = await fetch(_0x12564a);
              let _0x2d8006 = await _0x30935e.json();
              if (_0x2d8006 && _0x2d8006.result) {
                const _0x442ea5 = _0x2d8006.result;
                const _0x4cb567 = _0x307cab.getAudioUrl(_0x442ea5, {
                  'lang': 'en',
                  'slow': false,
                  'host': "https://translate.google.com"
                });
                await _0x9620a9.sendMessage(_0x496b91, {
                  'audio': {
                    'url': _0x4cb567
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                });
              } else {
                console.warn("Fallback API returned no result.");
              }
            } catch (_0x5596b7) {
              console.error("Fallback API Error:", _0x5596b7.message);
            }
          }
        }
      }
    });
    _0x9620a9.ev.on('messages.upsert', async _0x2d3485 => {
      const {
        messages: _0xb5059e
      } = _0x2d3485;
      const _0xb72dde = _0xb5059e[0x0];
      if (!_0xb72dde.message) {
        return;
      }
      const _0x2996bd = Object.keys(_0xb72dde.message)[0x0];
      const _0x3aacf9 = _0xb72dde.key.remoteJid;
      const _0x4766c2 = _0xb72dde.message.conversation || _0xb72dde.message.extendedTextMessage?.["text"];
      if (_0xb72dde.key.fromMe || _0x3aacf9 === conf.NUMERO_OWNER + '@s.whatsapp.net') {
        return;
      }
      if (conf.CHATBOT === "yes") {
        if (_0x2996bd === "conversation" || _0x2996bd === 'extendedTextMessage') {
          try {
            const _0xfdf67c = "https://apis.ibrahimadams.us.kg/api/ai/gpt4?apikey=ibraah-tech&q=" + encodeURIComponent(_0x4766c2);
            let _0x15fa95 = await fetch(_0xfdf67c);
            let _0x286d97 = await _0x15fa95.json();
            if (_0x286d97 && _0x286d97.result) {
              const _0x3edfb7 = _0x286d97.result;
              console.log("Primary API Response:", _0x286d97);
              await _0x9620a9.sendMessage(_0x3aacf9, {
                'text': _0x3edfb7
              });
            } else {
              throw new Error("Invalid response or missing \"result\" field in primary API.");
            }
          } catch (_0x1477d1) {
            console.error("Primary API Error:", _0x1477d1.message);
            try {
              const _0x289bc2 = "https://api.davidcyriltech.my.id/ai/chatbot?query=" + encodeURIComponent(_0x4766c2);
              let _0x40057d = await fetch(_0x289bc2);
              let _0x8600de = await _0x40057d.json();
              if (_0x8600de && _0x8600de.result) {
                const _0x4ff1ed = _0x8600de.result;
                console.log("Fallback API Response:", _0x8600de);
                await _0x9620a9.sendMessage(_0x3aacf9, {
                  'text': _0x4ff1ed
                });
              } else {
                console.warn("Fallback API returned no result.");
              }
            } catch (_0x1ccb35) {
              console.error("Fallback API Error:", _0x1ccb35.message);
            }
          }
        }
      }
    });
    function _0x3442c9() {
      const _0x5acd9c = {
        'timeZone': "Africa/Nairobi",
        'year': "numeric",
        'month': "long",
        'day': '2-digit',
        'hour': '2-digit',
        'minute': '2-digit',
        'second': "2-digit",
        'hour12': false
      };
      return new Intl.DateTimeFormat("en-KE", _0x5acd9c).format(new Date());
    }
    const _0x37227c = ["Karma is a Bitch and gets too fast to you. 😂", "Be like a glass,if they break you,cut them. 🍕🍔", "If your phone runs out of power,dont dump it,recharge instead. 😂", "There are more fake flamingos in the world than real ones. ➖😂", "A group of flamingos is called a flamboyance😆", "Octopuses have three hearts", "ᴘʀᴏᴄʀᴀsᴛɪɴᴀᴛɪᴏɴ ɪs ʟɪᴋᴇ ᴀ ᴄʀᴇᴅɪᴛ ᴄᴀʀᴅ: ɪᴛ’s ᴀ ʟᴏᴛ ᴏғ ғᴜɴ ᴜɴᴛɪʟ ʏᴏᴜ ɢᴇᴛ ᴛʜᴇ ʙɪʟʟ. 💳😂", "Humans share 50% of their DNA with bananas ⏳🙃", "A small child could swim through the veins of a blue whale. 🤷‍♂️😜", "There are more public libraries in the United States than McDonald's restaurants. 💀🤣", "ʙᴇ ᴀ ғʀᴜɪᴛ ʟᴏᴏᴘ ɪɴ ᴀ ᴡᴏʀʟᴅ ғᴜʟʟ ᴏғ ᴄʜᴇᴇʀɪᴏs. 🍩😋", "Sea otters hold hands when they sleep to keep from drifting apart. 😊", "Not her new man,you just never knew. 🥹", "Wombat poop is cube-shaped. 🤣", "Never pressure a woman for nudes..porn is free. 📸🤣"];
    function _0x420a3d(_0x3b5473 = "User") {
      const _0x1de988 = _0x3442c9();
      const _0x469b60 = _0x37227c[Math.floor(Math.random() * _0x37227c.length)];
      return "🥹Simplicity defines Spark-X,\n Its on " + _0x1de988 + "\n we say \"" + _0x469b60 + "\"";
    }
    setInterval(async () => {
      if (conf.AUTO_BIO === "yes") {
        const _0x5e6fb0 = _0x420a3d("🕵️");
        await _0x9620a9.updateProfileStatus(_0x5e6fb0);
        console.log("Updated Bio: " + _0x5e6fb0);
      }
    }, 0xea60);
    _0x9620a9.ev.on("call", async _0x3a970d => {
      if (conf.ANTICALL === "yes") {
        const _0x4ff710 = _0x3a970d[0x0].id;
        const _0x352dc2 = _0x3a970d[0x0].from;
        await _0x9620a9.rejectCall(_0x4ff710, _0x352dc2);
        await _0x9620a9.sendMessage(_0x352dc2, {
          'text': "🕵️ Call declined by JUNIOR MD,please try again later"
        });
      }
    });
    _0x9620a9.ev.on("messages.upsert", async _0x4e2768 => {
      try {
        const _0x3e3f49 = _0x4e2768.messages[0x0];
        if (!_0x3e3f49.message || _0x3e3f49.key.fromMe) {
          return;
        }
        const _0x29575b = _0x3e3f49.key.remoteJid;
        const _0x55aa43 = _0x3e3f49.key.participant || _0x29575b;
        const _0x946fb8 = await _0x9620a9.onWhatsApp(_0x55aa43);
        const _0x4813a1 = _0x946fb8?.[0x0]?.["notify"] || _0x946fb8?.[0x0]?.["jid"]["split"]('@')[0x0] || 'Unknown';
        const _0x2e1e73 = _0x3e3f49.message?.["viewOnceMessageV2"];
        if (_0x2e1e73) {
          const _0xb47bf8 = _0x2e1e73.message.imageMessage ? "image" : _0x2e1e73.message.videoMessage ? "video" : _0x2e1e73.message.audioMessage ? "audio" : _0x2e1e73.message.voiceMessage ? "voice" : null;
          if (_0xb47bf8) {
            const _0x204880 = _0xb47bf8 === "image" ? _0x2e1e73.message.imageMessage : _0xb47bf8 === 'video' ? _0x2e1e73.message.videoMessage : _0xb47bf8 === "audio" ? _0x2e1e73.message.audioMessage : _0xb47bf8 === "voice" ? _0x2e1e73.message.voiceMessage : null;
            const _0x1a1180 = await _0x9620a9.downloadAndSaveMediaMessage(_0x204880);
            const _0x1a54d5 = _0x204880.caption || '';
            const _0x5bb60f = _0xb47bf8 === "image" || _0xb47bf8 === 'video' ? {
              [_0xb47bf8]: {
                'url': _0x1a1180
              },
              'caption': _0x1a54d5
            } : _0xb47bf8 === "audio" || _0xb47bf8 === "voice" ? {
              'audio': {
                'url': _0x1a1180
              },
              'mimetype': "audio/mpeg"
            } : null;
            const _0x26cdd2 = "*Forwarded View Once Message*\n\n*From*: " + _0x4813a1 + "\n*Number*: " + _0x55aa43.split('@')[0x0];
            await _0x9620a9.sendMessage(conf.NUMERO_OWNER + "@s.whatsapp.net", {
              'text': _0x26cdd2
            });
            await _0x9620a9.sendMessage(conf.NUMERO_OWNER + '@s.whatsapp.net', _0x5bb60f, {
              'quoted': _0x3e3f49
            });
          }
        }
      } catch (_0x522cea) {
        console.error("Error forwarding view once message:", _0x522cea);
      }
    });
    const _0x4ec473 = _0x582f9d => new Promise(_0x30576d => setTimeout(_0x30576d, _0x582f9d));
    let _0x4aef1e = 0x0;
    const _0x2a97cd = {
      'hello': ['👋', '🙂', '😊', '🙋‍♂️', "🙋‍♀️"],
      'hi': ['👋', '🙂', '😁', "🙋‍♂️", "🙋‍♀️"],
      "good morning": ['🌅', '🌞', '☀️', '🌻', '🌼'],
      "good night": ['🌙', '🌜', '⭐', '🌛', '💫'],
      'bye': ['👋', '😢', "👋🏻", '🥲', "🚶‍♂️", "🚶‍♀️"],
      "see you": ['👋', '😊', "👋🏻", '✌️', '🚶‍♂️'],
      'bro': ["🤜🤛", '👊', '💥', '🥊', '👑'],
      'sister': ['👭', '💁‍♀️', '🌸', '💖', "🙋‍♀️"],
      'buddy': ['🤗', "👯‍♂️", "👯‍♀️", "🤜🤛", '🤝'],
      'niaje': ['👋', '😄', '💥', '🔥', '🕺', '💃'],
      'ibrahim': ['😎', '💯', '🔥', '🚀', '👑'],
      'adams': ['🔥', '💥', '👑', '💯', '😎'],
      'thanks': ['🙏', '😊', '💖', '❤️', '💐'],
      "thank you": ['🙏', '😊', '🙌', '💖', '💝'],
      'love': ['❤️', '💖', '💘', '😍', '😘', '💍', '💑'],
      "miss you": ['😢', '💔', '😔', '😭', '💖'],
      'sorry': ['😔', '🙏', '😓', '💔', '🥺'],
      'apologies': ['😔', '💔', '🙏', '😞', "🙇‍♂️", '🙇‍♀️'],
      'congratulations': ['🎉', '🎊', '🏆', '🎁', '👏'],
      "well done": ['👏', '💪', '🎉', "🎖️", '👍'],
      "good job": ['👏', '💯', '👍', '🌟', '🎉'],
      'happy': ['😁', '😊', '🎉', '🎊', '💃', '🕺'],
      'sad': ['😢', '😭', '😞', '💔', '😓'],
      'angry': ['😡', '🤬', '😤', '💢', '😾'],
      'excited': ['🤩', '🎉', '😆', '🤗', '🥳'],
      'surprised': ['😲', '😳', '😯', '😮', '😲'],
      'help': ['🆘', '❓', '🙏', '💡', "👨‍💻", "👩‍💻"],
      'how': ['❓', '🤔', '😕', '😳', '🧐'],
      'what': ['❓', "🤷‍♂️", "🤷‍♀️", '😕', '😲'],
      'where': ['❓', '🌍', "🗺️", "🏙️", '🌎'],
      'party': ['🎉', '🥳', '🍾', '🍻', '🎤', '💃', '🕺'],
      'fun': ['🤣', '😂', '🥳', '🎉', '🎮', '🎲'],
      'hangout': ['🍕', '🍔', '🍻', '🎮', '🍿', '😆'],
      'good': ['👍', '👌', '😊', '💯', '🌟'],
      'awesome': ['🔥', '🚀', '🤩', '👏', '💥'],
      'cool': ['😎', '👌', '🎮', '🎸', '💥'],
      'boring': ['😴', '🥱', '🙄', '😑', '🤐'],
      'tired': ['😴', '🥱', '😌', '💤', '🛌'],
      'bot': ['🤖', '💻', '⚙️', '🧠', '🔧'],
      'robot': ['🤖', '⚙️', '💻', '🔋', '🤓'],
      "cool bot": ['🤖', '😎', '🤘', '💥', '🎮'],
      "love you": ['❤️', '💖', '😘', '💋', '💑'],
      "thank you bot": ['🙏', '🤖', '😊', '💖', '💐'],
      "good night bot": ['🌙', '🌛', '⭐', '💤', '😴'],
      'laughter': ['😂', '🤣', '😆', '😄', '🤪'],
      'crying': ['😢', '😭', '😿', '😓', '💔'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'happy': ['😁', '😄', '😊', '🙌', '🎉', '🥳', '💃', '🕺', '🔥'],
      'excited': ['🤩', '🎉', '🥳', '🎊', '😆', '🤗', '💥', '🚀'],
      'love': ['❤️', '💖', '💘', '💝', '😍', '😘', '💍', '💑', '🌹'],
      'grateful': ['🙏', '💐', '🥰', '❤️', '😊'],
      'thankful': ['🙏', '💖', '💐', '🤗', '😇'],
      'sad': ['😢', '😭', '😞', '💔', '😔', '😓', '😖'],
      'angry': ['😡', '😠', '🤬', '💢', '👊', '💥', '⚡'],
      'frustrated': ['😤', '😩', '🤯', '😑', '🌀'],
      'bored': ['😴', '🥱', '🙄', '😑', '😒'],
      'surprised': ['😲', '😳', '😮', '😯', '😲', '🙀'],
      'shocked': ['😱', '😳', '😯', '💥', '🤯'],
      'wow': ['😲', '😱', '🤩', '🤯', '💥', '🚀'],
      'crying': ['😭', '😢', '💔', '😞', '😓'],
      "miss you": ['😭', '💔', '😔', '😢', '❤️'],
      'lonely': ['😔', '😭', '😢', '💔', '🙁'],
      'help': ['🆘', '❓', '🤔', '🙋‍♂️', "🙋‍♀️", '💡'],
      "need assistance": ['🆘', "💁‍♂️", '💁‍♀️', '❓', '🙏'],
      'sorry': ['😔', '🙏', '💔', '😓', '🥺', '🙇‍♂️', "🙇‍♀️"],
      'apology': ['😔', '😞', '🙏', '💔', "🙇‍♂️", "🙇‍♀️"],
      "good job": ['👏', '💯', '🎉', '🌟', '👍', '👏'],
      "well done": ['👏', '🎉', "🎖️", '💪', '🔥', '🏆'],
      "you can do it": ['💪', '🔥', '💯', '🚀', '🌟'],
      'congratulations': ['🎉', '🏆', '🎊', '🎁', '👏', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🍷', '🥳', '🎉'],
      'goodbye': ['👋', '😢', '💔', "👋🏻", "🚶‍♂️", '🚶‍♀️'],
      'bye': ['👋', "👋🏻", '🥲', "🚶‍♂️", '🚶‍♀️'],
      "see you": ['👋', "👋🏻", '🤗', '✌️', "🙋‍♂️", "🙋‍♀️"],
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", '🙋‍♀️'],
      'hi': ['👋', '🙂', '😁', '🙋‍♂️', "🙋‍♀️"],
      'party': ['🎉', '🥳', '🎤', '💃', '🕺', '🍻', '🎶'],
      'fun': ['🎮', '🎲', '🤣', '🎉', '🃏'],
      'play': ['🎮', '🏀', '⚽', '🎾', '🎱', '🎲', '🏆'],
      'work': ['💻', '🖥️', '💼', '📅', '📝'],
      'school': ['📚', '🏫', '🎒', '👨‍🏫', "👩‍🏫"],
      'study': ['📖', '📝', '💡', '📚', '🎓'],
      'summer': ['🌞', '🏖️', '🌴', '🍉', '🌻'],
      'winter': ['❄️', '☃️', '🎿', '🔥', '⛄'],
      'autumn': ['🍁', '🍂', '🎃', '🍂', '🍁'],
      'spring': ['🌸', '🌼', '🌷', '🌱', '🌺'],
      'birthday': ['🎂', '🎉', '🎁', '🎈', '🎊'],
      'anniversary': ['💍', '🎉', '🎁', '🎈', '💑'],
      'robot': ['🤖', '⚙️', '🔧', '🤖', '🧠'],
      'bot': ['🤖', '🧠', '⚙️', '💻', "🖥️"],
      'thanks': ['🙏', '💖', '😊', '❤️', '💐'],
      "good luck": ['🍀', '🍀', '💯', '🍀', '🎯'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'food': ['🍕', '🍔', '🍟', '🍲', '🍣', '🍩'],
      'drink': ['🍺', '🍷', '🥂', '🍾', '🥤'],
      'coffee': ['☕', '🥤', '🍵', '🥶'],
      'tea': ['🍵', '🫖', '🍂', '🍃'],
      'excited': ['🤩', '🎉', '🥳', '💥', '🚀', '😆', '😜'],
      'nervous': ['😬', '😰', '🤞', '🧠', '👐'],
      'confused': ['🤔', '😕', '🧐', '😵', '🤷‍♂️', "🤷‍♀️"],
      'embarrassed': ['😳', '😳', '🙈', '😳', '😬', '😅'],
      'hopeful': ['🤞', '🌠', '🙏', '🌈', '💫'],
      'shy': ['😊', '😳', '🙈', '🫣', '🫶'],
      'family': ["👨‍👩‍👧‍👦", '👩‍👧', '👩‍👧‍👦', "👨‍👩‍👧", '💏', "👨‍👨‍👧‍👦", '👩‍👩‍👧‍👦'],
      'friends': ["👯‍♂️", '👯‍♀️', '🤗', '🫶', '💫', '🤝'],
      'relationship': ['💑', '❤️', '💍', '🥰', '💏', '💌'],
      'couple': ["👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", '💍', '💑', '💏'],
      "best friend": ['🤗', '💖', "👯‍♀️", "👯‍♂️", '🙌'],
      "love you": ['❤️', '😘', '💖', '💘', '💓', '💗'],
      'vacation': ["🏖️", '🌴', '✈️', '🌊', "🛳️", '🏞️', '🏕️'],
      'beach': ["🏖️", '🌊', "🏄‍♀️", '🩴', "🏖️", '🌴', '🦀'],
      "road trip": ['🚗', '🚙', '🛣️', '🌄', '🌟'],
      'mountain': ["🏞️", '⛰️', "🏔️", '🌄', "🏕️", '🌲'],
      'city': ["🏙️", '🌆', '🗽', '🌇', '🚖', '🏙️'],
      'exploration': ['🌍', '🧭', '🌎', '🌍', '🧳', '📍', '⛵'],
      'morning': ['🌅', '☀️', '🌞', '🌄', '🌻', "🕶️"],
      'afternoon': ['🌞', "🌤️", '⛅', '🌻', '🌇'],
      'night': ['🌙', '🌛', '🌜', '⭐', '🌚', '💫'],
      'evening': ['🌙', '🌛', '🌇', '🌓', '💫'],
      'goodnight': ['🌙', '😴', '💤', '🌜', '🛌', '🌛', '✨'],
      'productivity': ['💻', '📊', '📝', '💼', '📅', '📈'],
      'office': ["🖥️", '💼', '🗂️', '📅', '🖋️'],
      'workout': ["🏋️‍♀️", '💪', "🏃‍♂️", "🏃‍♀️", '🤸‍♀️', '🚴‍♀️', "🏋️‍♂️"],
      "study hard": ['📚', '📝', '📖', '💡', '💼'],
      'focus': ['🔍', '🎯', '💻', '🧠', '🤓'],
      'food': ['🍕', '🍔', '🍟', '🍖', '🍖', '🥗', '🍣', '🍲'],
      'drink': ['🍹', '🥤', '🍷', '🍾', '🍸', '🍺', '🥂', '☕'],
      'coffee': ['☕', '🧃', '🍵', '🥤', '🍫'],
      'cake': ['🍰', '🎂', '🍩', '🍪', '🍫', '🧁'],
      "ice cream": ['🍦', '🍧', '🍨', '🍪'],
      'cat': ['🐱', '😺', '🐈', '🐾'],
      'dog': ['🐶', '🐕', '🐩', "🐕‍🦺", '🐾'],
      'bird': ['🐦', '🦉', '🦅', '🐦'],
      'fish': ['🐟', '🐠', '🐡', '🐡', '🐙'],
      'rabbit': ['🐰', '🐇', '🐹', '🐾'],
      'lion': ['🦁', '🐯', '🐅', '🐆'],
      'bear': ['🐻', '🐨', '🐼', "🐻‍❄️"],
      'elephant': ['🐘', '🐘'],
      'sun': ['☀️', '🌞', '🌄', '🌅', '🌞'],
      'rain': ["🌧️", '☔', '🌈', "🌦️", '🌧️'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '❄️'],
      'wind': ['💨', "🌬️", '🌪️', '🌬️'],
      'earth': ['🌍', '🌏', '🌎', '🌍', '🌱', '🌳'],
      'phone': ['📱', '☎️', '📞', '📲', '📡'],
      'computer': ['💻', "🖥️", '⌨️', '🖱️', "🖥️"],
      'internet': ['🌐', '💻', '📶', '📡', '🔌'],
      'software': ['💻', '🖥️', "🧑‍💻", "🖱️", '💡'],
      'star': ['⭐', '🌟', '✨', '🌠', '💫'],
      'light': ['💡', '🔦', '✨', '🌟', '🔆'],
      'money': ['💵', '💰', '💸', '💳', '💶'],
      'victory': ['✌️', '🏆', '🎉', "🎖️", '🎊'],
      'gift': ['🎁', '🎀', '🎉', '🎁'],
      'fire': ['🔥', '💥', '🌋', '🔥', '💣'],
      'music': ['🎵', '🎶', '🎧', '🎤', '🎸', '🎹'],
      'sports': ['⚽', '🏀', '🏈', '🎾', "🏋️‍♂️", "🏃‍♀️", '🏆', '🥇'],
      'games': ['🎮', "🕹️", '🎲', '🎯', '🧩'],
      'art': ['🎨', "🖌️", "🖼️", '🎭', "🖍️"],
      'photography': ['📷', '📸', '📸', "🖼️", '🎥'],
      'reading': ['📚', '📖', '📚', '📰'],
      'craft': ['🧵', '🪡', '✂️', '🪢', '🧶'],
      'hello': ['👋', '🙂', '😊'],
      'hey': ['👋', '🙂', '😊'],
      'hi': ['👋', '🙂', '😊'],
      'bye': ['👋', '😢', '👋'],
      'goodbye': ['👋', '😢', "🙋‍♂️"],
      'thanks': ['🙏', '😊', '🌹'],
      "thank you": ['🙏', '😊', '🌸'],
      'welcome': ['😊', '😄', '🌷'],
      'congrats': ['🎉', '👏', '🥳'],
      'congratulations': ['🎉', '👏', '🥳'],
      "good job": ['👏', '👍', '🙌'],
      'great': ['👍', '💪', '😄'],
      'cool': ['😎', '🤙', '🔥'],
      'ok': ['👌', '👍', '✅'],
      'love': ['❤️', '💕', '💖'],
      'like': ['👍', '❤️', '👌'],
      'happy': ['😊', '😁', '🙂'],
      'joy': ['😁', '😆', '😂'],
      'laugh': ['😂', '🤣', '😁'],
      'sad': ['😢', '😭', '☹️'],
      'cry': ['😭', '😢', '😿'],
      'angry': ['😡', '😠', '💢'],
      'mad': ['😠', '😡', '😤'],
      'shocked': ['😲', '😱', '😮'],
      'scared': ['😱', '😨', '😧'],
      'sleep': ['😴', '💤', '😌'],
      'bored': ['😐', '😑', '🙄'],
      'excited': ['🤩', '🥳', '🎉'],
      'party': ['🥳', '🎉', '🍾'],
      'kiss': ['😘', '💋', '😍'],
      'hug': ['🤗', '❤️', '💕'],
      'peace': ['✌️', '🕊️', '✌️'],
      'pizza': ['🍕', '🥖', '🍟'],
      'coffee': ['☕', '🥤', '🍵'],
      'water': ['💧', '💦', '🌊'],
      'wine': ['🍷', '🍸', '🍾'],
      'hello': ['👋', '🙂', '😊', '😃', '😄'],
      'hey': ['👋', '😊', '🙋', '😄', '😁'],
      'hi': ['👋', '😀', '😁', '😃', '🙂'],
      'bye': ['👋', '😢', '🙋‍♂️', '😞', '😔'],
      'goodbye': ['👋', '😢', '🙋‍♀️', '😔', '😭'],
      'thanks': ['🙏', '😊', '🌹', '🤲', '🤗'],
      "thank you": ['🙏', '💐', '🤲', '🥰', '😌'],
      'welcome': ['😊', '😄', '🌸', '🙂', '💖'],
      'congrats': ['🎉', '👏', '🥳', '💐', '🎊'],
      'congratulations': ['🎉', '👏', '🥳', '🎊', '🍾'],
      "good job": ['👏', '👍', '🙌', '💪', '🤩'],
      'great': ['👍', '💪', '😄', '🔥', '✨'],
      'cool': ['😎', '🤙', '🔥', '👌', '🆒'],
      'ok': ['👌', '👍', '✅', '😌', '🤞'],
      'love': ['❤️', '💕', '💖', '💗', '😍'],
      'like': ['👍', '❤️', '👌', '😌', '💓'],
      'happy': ['😊', '😁', '🙂', '😃', '😄'],
      'joy': ['😁', '😆', '😂', '😊', '🤗'],
      'laugh': ['😂', '🤣', '😁', '😹', '😄'],
      'sad': ['😢', '😭', '☹️', '😞', '😔'],
      'cry': ['😭', '😢', '😿', '💧', '😩'],
      'angry': ['😡', '😠', '💢', '😤', '🤬'],
      'mad': ['😠', '😡', '😤', '💢', '😒'],
      'shocked': ['😲', '😱', '😮', '😯', '😧'],
      'scared': ['😱', '😨', '😧', '😰', '😳'],
      'sleep': ['😴', '💤', '😌', '😪', '🛌'],
      'bored': ['😐', '😑', '🙄', '😒', '🤦'],
      'excited': ['🤩', '🥳', '🎉', '😄', '✨'],
      'party': ['🥳', '🎉', '🎊', '🍾', '🎈'],
      'kiss': ['😘', '💋', '😍', '💖', '💏'],
      'hug': ['🤗', '❤️', '💕', '💞', '😊'],
      'peace': ['✌️', "🕊️", '🤞', '💫', '☮️'],
      'pizza': ['🍕', '🥖', '🍟', '🍔', '🍝'],
      'burger': ['🍔', '🍟', '🥓', '🥪', '🌭'],
      'fries': ['🍟', '🍔', '🥤', '🍿', '🧂'],
      'coffee': ['☕', '🥤', '🍵', '🫖', '🥄'],
      'tea': ['🍵', '☕', '🫖', '🥄', '🍪'],
      'cake': ['🍰', '🎂', '🧁', '🍩', '🍫'],
      'donut': ['🍩', '🍪', '🍰', '🧁', '🍫'],
      "ice cream": ['🍦', '🍨', '🍧', '🍧', '🍫'],
      'cookie': ['🍪', '🍩', '🍰', '🧁', '🍫'],
      'chocolate': ['🍫', '🍬', '🍰', '🍦', '🍭'],
      'popcorn': ['🍿', '🥤', '🍫', '🎬', '🍩'],
      'soda': ['🥤', '🍾', '🍹', '🍷', '🍸'],
      'water': ['💧', '💦', '🌊', '🚰', '🥤'],
      'wine': ['🍷', '🍾', '🥂', '🍹', '🍸'],
      'beer': ['🍺', '🍻', '🥂', '🍹', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🎉', '🎊'],
      'sun': ['🌞', '☀️', '🌅', '🌄', '🌻'],
      'moon': ['🌜', '🌙', '🌚', '🌝', '🌛'],
      'star': ['🌟', '⭐', '✨', '💫', '🌠'],
      'cloud': ['☁️', '🌥️', "🌤️", '⛅', "🌧️"],
      'rain': ["🌧️", '☔', '💧', '💦', '🌂'],
      'thunder': ['⚡', '⛈️', "🌩️", '🌪️', '⚠️'],
      'fire': ['🔥', '⚡', '🌋', '🔥', '💥'],
      'flower': ['🌸', '🌺', '🌷', '💐', '🌹'],
      'tree': ['🌳', '🌲', '🌴', '🎄', '🌱'],
      'leaves': ['🍃', '🍂', '🍁', '🌿', '🌾'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '☃️'],
      'wind': ['💨', '🌬️', '🍃', '⛅', "🌪️"],
      'rainbow': ['🌈', "🌤️", '☀️', '✨', '💧'],
      'ocean': ['🌊', '💦', '🚤', '⛵', "🏄‍♂️"],
      'dog': ['🐶', '🐕', '🐾', '🐩', '🦮'],
      'cat': ['🐱', '😺', '😸', '🐾', '🦁'],
      'lion': ['🦁', '🐯', '🐱', '🐾', '🐅'],
      'tiger': ['🐯', '🐅', '🦁', '🐆', '🐾'],
      'bear': ['🐻', '🐨', '🐼', '🧸', '🐾'],
      'rabbit': ['🐰', '🐇', '🐾', '🐹', '🐭'],
      'panda': ['🐼', '🐻', '🐾', '🐨', '🍃'],
      'monkey': ['🐒', '🐵', '🙊', '🙉', '🙈'],
      'fox': ['🦊', '🐺', '🐾', '🐶', '🦮'],
      'bird': ['🐦', '🐧', '🦅', '🦢', '🦜'],
      'fish': ['🐟', '🐠', '🐡', '🐬', '🐳'],
      'whale': ['🐋', '🐳', '🌊', '🐟', '🐠'],
      'dolphin': ['🐬', '🐟', '🐠', '🐳', '🌊'],
      'unicorn': ['🦄', '✨', '🌈', '🌸', '💫'],
      'bee': ['🐝', '🍯', '🌻', '💐', '🐞'],
      'butterfly': ['🦋', '🌸', '💐', '🌷', '🌼'],
      'phoenix': ['🦅', '🔥', '✨', '🌄', '🔥'],
      'wolf': ['🐺', '🌕', '🐾', '🌲', '🌌'],
      'mouse': ['🐭', '🐁', '🧀', '🐾', '🐀'],
      'cow': ['🐮', '🐄', '🐂', '🌾', '🍀'],
      'pig': ['🐷', '🐽', '🐖', '🐾', '🐗'],
      'horse': ['🐴', '🏇', '🐎', '🌄', "🏞️"],
      'sheep': ['🐑', '🐏', '🌾', '🐾', '🐐'],
      'soccer': ['⚽', '🥅', '🏟️', '🎉', '👏'],
      'basketball': ['🏀', "⛹️‍♂️", '🏆', '🎉', '🥇'],
      'tennis': ['🎾', '🏸', '🥇', '🏅', '💪'],
      'baseball': ['⚾', "🏟️", '🏆', '🎉', '👏'],
      'football': ['🏈', '🎉', "🏟️", '🏆', '🥅'],
      'golf': ['⛳', "🏌️‍♂️", "🏌️‍♀️", '🎉', '🏆'],
      'bowling': ['🎳', '🏅', '🎉', '🏆', '👏'],
      'running': ['🏃‍♂️', "🏃‍♀️", '👟', '🏅', '🔥'],
      'swimming': ["🏊‍♂️", '🏊‍♀️', '🌊', '🏆', '👏'],
      'cycling': ['🚴‍♂️', "🚴‍♀️", '🏅', '🔥', "🏞️"],
      'yoga': ['🧘', '🌸', '💪', '✨', '😌'],
      'dancing': ['💃', '🕺', '🎶', '🥳', '🎉'],
      'singing': ['🎤', '🎶', "🎙️", '🎉', '🎵'],
      'guitar': ['🎸', '🎶', '🎼', '🎵', '🎉'],
      'piano': ['🎹', '🎶', '🎼', '🎵', '🎉'],
      'money': ['💸', '💰', '💵', '💳', '🤑'],
      'fire': ['🔥', '💥', '⚡', '🎇', '✨'],
      'rocket': ['🚀', '🌌', '🛸', "🛰️", '✨'],
      'bomb': ['💣', '🔥', '⚡', '😱', '💥'],
      'computer': ['💻', '🖥️', '📱', '⌨️', "🖱️"],
      'phone': ['📱', '📲', '☎️', '📞', '📳'],
      'camera': ['📷', '📸', '🎥', '📹', "🎞️"],
      'book': ['📚', '📖', '✏️', '📘', '📕'],
      'light': ['💡', '✨', '🔦', '🌟', '🌞'],
      'music': ['🎶', '🎵', '🎼', '🎸', '🎧'],
      'star': ['🌟', '⭐', '✨', '🌠', '💫'],
      'gift': ['🎁', '💝', '🎉', '🎊', '🎈'],
      'car': ['🚗', '🚘', '🚙', '🚕', "🛣️"],
      'train': ['🚆', '🚄', '🚅', '🚞', '🚂'],
      'plane': ['✈️', '🛫', '🛬', '🛩️', '🚁'],
      'boat': ['⛵', '🛥️', '🚤', '🚢', '🌊'],
      'city': ["🏙️", '🌆', '🌇', '🏢', '🌃'],
      'beach': ['🏖️', '🌴', '🌊', '☀️', "🏄‍♂️"],
      'mountain': ["🏔️", '⛰️', '🗻', '🌄', '🌞'],
      'forest': ['🌲', '🌳', '🍃', '🏞️', '🐾'],
      'desert': ["🏜️", '🌵', '🐪', '🌞', '🏖️'],
      'hotel': ['🏨', '🏩', '🛏️', "🛎️", '🏢'],
      'restaurant': ["🍽️", '🍴', '🥂', '🍷', '🍾'],
      'brave': ["🦸‍♂️", "🦸‍♀️", '💪', '🔥', '👊'],
      'shy': ['😳', '☺️', '🙈', '😊', '😌'],
      'surprised': ['😲', '😮', '😧', '😯', '🤯'],
      'bored': ['😐', '😑', '😶', '🙄', '😒'],
      'sleepy': ['😴', '💤', '😪', '😌', '🛌'],
      'determined': ['💪', '🔥', '😤', '👊', '🏆'],
      'birthday': ['🎂', '🎉', '🎈', '🎊', '🍰'],
      'christmas': ['🎄', '🎅', '🤶', '🎁', '⛄'],
      "new year": ['🎉', '🎊', '🎇', '🍾', '✨'],
      'easter': ['🐰', '🐣', '🌷', '🥚', '🌸'],
      'halloween': ['🎃', '👻', "🕸️", "🕷️", '👹'],
      'valentine': ['💘', '❤️', '💌', '💕', '🌹'],
      'wedding': ['💍', '👰', '🤵', '🎩', '💒']
    };
    const _0x4d15b7 = ['😊', '😂', '❤️', '😍', '😭', '🥺', '👍', '🙏', '💔', '💀', '🥳', '🔥', '✨', '🎉', '🎂', '🥂', '💥', '👏', '💯', '🌹', '🌸', '🦋', '💅', '🍕', '🍔', '🍻', '💃', '🕺', '🚗', '🌍', '🌏', '🌎', '🎮', '🎯', '⏳', '🎁', '🎈', '🦄', '🦊', '🐯', '🐅', '🐆', '🐘', '🐘', '🐒', '🐵', '🐶', '🐱', '🐶', '🐺', '🐧', '🐦', '🐦', '🦅', '🐔', '🐣', '🐄', '🐂', '🐇', '🐭', '🐁', '🐾', '🌱', '🌳', '🍃', '🍂', '🌾', '🌻', '🌼', '🌷', '🌺', '🌹', '💐', '🌝', '🌞', '🌚', '🌙', '🌜', '🌛', '🌗', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌚', '🌝', '⭐', '🌟', '⚡', '💫', '💎', '🔮', '🛸', '🚀', '🛸', '🪐', '🪄', '💥', '🌈', '🌪️', '⚡', '🥇', '🥈', '🥉', '🏆', '🏅', '💪', '💥', '🚶', '🏃', '🚴', "🏋️", '🧘', '🤸', '🏊', '🚣', '⛷️', '🏄', '🥇', '🥈', '🥉', '🎲', '🎮', '🎳', '🎸', '🎤', '🎷', '🎺', '🎻', '🎼', '🎹', '🎵', '🎶', '🎧', '🎤', '🎬', '🍿', '🎥', "🎞️", '🍿', '🍟', '🍔', '🌭', '🍕', '🍦', '🍩', '🍪', '🍫', '🍬', '🍒', '🍓', '🍑', '🍎', '🍍', '🍋', '🍉', '🍇'];
    const _0x2d5336 = _0x64a497 => {
      const _0x2aca44 = _0x64a497.split(/\s+/);
      for (const _0x47cdaf of _0x2aca44) {
        const _0x3ba5ab = _0x389910(_0x47cdaf.toLowerCase());
        if (_0x3ba5ab) {
          return _0x3ba5ab;
        }
      }
      return _0x4d15b7[Math.floor(Math.random() * _0x4d15b7.length)];
    };
    const _0x389910 = _0x32d9e5 => {
      const _0x379062 = _0x2a97cd[_0x32d9e5.toLowerCase()];
      if (_0x379062 && _0x379062.length > 0x0) {
        return _0x379062[Math.floor(Math.random() * _0x379062.length)];
      }
      return null;
    };
    if (conf.AUTO_REACT_STATUS === 'yes') {
      console.log("AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x9620a9.ev.on("messages.upsert", async _0x2d193d => {
        const {
          messages: _0x105c51
        } = _0x2d193d;
        for (const _0xde31d4 of _0x105c51) {
          if (_0xde31d4.key && _0xde31d4.key.remoteJid === "status@broadcast") {
            console.log("Detected status update from:", _0xde31d4.key.remoteJid);
            const _0x2d9a8a = Date.now();
            if (_0x2d9a8a - _0x4aef1e < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x4f500f = _0x9620a9.user && _0x9620a9.user.id ? _0x9620a9.user.id.split(':')[0x0] + "@s.whatsapp.net" : null;
            if (!_0x4f500f) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            const _0xa110cf = _0xde31d4?.["message"]?.["conversation"] || '';
            const _0x58f77d = _0x2d5336(_0xa110cf) || _0x4d15b7[Math.floor(Math.random() * _0x4d15b7.length)];
            if (_0x58f77d) {
              await _0x9620a9.sendMessage(_0xde31d4.key.remoteJid, {
                'react': {
                  'key': _0xde31d4.key,
                  'text': _0x58f77d
                }
              }, {
                'statusJidList': [_0xde31d4.key.participant, _0x4f500f]
              });
              _0x4aef1e = Date.now();
              console.log("Successfully reacted with '" + _0x58f77d + "' to status update by " + _0xde31d4.key.remoteJid);
            }
            await _0x4ec473(0x7d0);
          }
        }
      });
    }
    if (conf.AUTO_REACT === "yes") {
      console.log("AUTO_REACT is enabled. Listening for regular messages...");
      _0x9620a9.ev.on('messages.upsert', async _0x10efc4 => {
        const {
          messages: _0x468377
        } = _0x10efc4;
        for (const _0x2cb57e of _0x468377) {
          if (_0x2cb57e.key && _0x2cb57e.key.remoteJid) {
            const _0xd42816 = Date.now();
            if (_0xd42816 - _0x4aef1e < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x39153e = _0x2cb57e?.["message"]?.['conversation'] || '';
            const _0x5eed12 = _0x2d5336(_0x39153e) || _0x4d15b7[Math.floor(Math.random() * _0x4d15b7.length)];
            if (_0x5eed12) {
              await _0x9620a9.sendMessage(_0x2cb57e.key.remoteJid, {
                'react': {
                  'text': _0x5eed12,
                  'key': _0x2cb57e.key
                }
              }).then(() => {
                _0x4aef1e = Date.now();
                console.log("Successfully reacted with '" + _0x5eed12 + "' to message by " + _0x2cb57e.key.remoteJid);
              })['catch'](_0x46ae92 => {
                console.error("Failed to send reaction:", _0x46ae92);
              });
            }
            await _0x4ec473(0x7d0);
          }
        }
      });
    }
    async function _0x43185b(_0x5b3862, _0x5589f5) {
      try {
        const _0x1b494c = _0x5b3862.split('@')[0x0];
        let _0x3efece = 0x1;
        let _0x4c07b1 = _0x5589f5 + " " + _0x3efece;
        while (Object.values(store.contacts).some(_0x421ad8 => _0x421ad8.name === _0x4c07b1)) {
          _0x3efece++;
          _0x4c07b1 = _0x5589f5 + " " + _0x3efece;
        }
        const _0x47c8f1 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x4c07b1 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x1b494c + ':+' + _0x1b494c + "\nEND:VCARD\n";
        const _0x31f29a = './' + _0x4c07b1 + '.vcf';
        fs.writeFileSync(_0x31f29a, _0x47c8f1);
        await _0x9620a9.sendMessage(conf.NUMERO_OWNER + '@s.whatsapp.net', {
          'document': {
            'url': _0x31f29a
          },
          'mimetype': "text/vcard",
          'fileName': _0x4c07b1 + '.vcf',
          'caption': "Contact saved as " + _0x4c07b1 + ". Please import this vCard to add the number to your contacts.\n\n🕵️ Bot By Viniziaz"
        });
        console.log("vCard created and sent for: " + _0x4c07b1 + " (" + _0x5b3862 + ')');
        fs.unlinkSync(_0x31f29a);
        return _0x4c07b1;
      } catch (_0x387135) {
        console.error("Error creating or sending vCard for " + name + ':', _0x387135.message);
      }
    }
    _0x9620a9.ev.on('messages.upsert', async _0x48c0eb => {
      if (conf.AUTO_SAVE_CONTACTS !== "yes") {
        return;
      }
      const {
        messages: _0x248f69
      } = _0x48c0eb;
      const _0x43130d = _0x248f69[0x0];
      if (!_0x43130d.message) {
        return;
      }
      const _0x3d8c8b = _0x43130d.key.remoteJid;
      if (_0x3d8c8b.endsWith("@s.whatsapp.net") && (!store.contacts[_0x3d8c8b] || !store.contacts[_0x3d8c8b].name)) {
        const _0x52dc78 = await _0x43185b(_0x3d8c8b, "CBK");
        store.contacts[_0x3d8c8b] = {
          'name': _0x52dc78
        };
        await _0x9620a9.sendMessage(_0x3d8c8b, {
          'text': "Hello! Your name has been saved as \"" + _0x52dc78 + "\" in our system.\n\nBot"
        });
        console.log("Contact " + _0x52dc78 + " has been saved and notified.");
      }
    });
    async function _0x3eba04(_0x3b9bf8, _0x47550c, _0x1ef934) {
      try {
        await _0x1ef934.sendMessage(_0x3b9bf8, {
          'text': "⌛ Generating vCard file for all group members. This may take a few moments..."
        });
        const _0xbe2451 = await _0x1ef934.groupMetadata(_0x3b9bf8);
        const _0x12695f = _0xbe2451.participants;
        const _0x26224c = _0x47550c + '_' + _0xbe2451.subject.replace(/\s+/g, '_') + ".vcf";
        const _0x36c644 = './' + _0x26224c;
        const _0x54d3cf = fs.createWriteStream(_0x36c644);
        _0x12695f.forEach((_0x88c1db, _0x2ff2e0) => {
          const _0x405f9a = _0x88c1db.id.split('@')[0x0];
          let _0x4c30d8;
          if (_0x405f9a === "254740271632") {
            _0x4c30d8 = "🕵️ Carl";
          } else if (_0x405f9a === '254740271632') {
            _0x4c30d8 = "🕵️ Carl";
          } else {
            _0x4c30d8 = _0x47550c + " " + (_0x2ff2e0 + 0x1);
          }
          _0x54d3cf.write("BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x4c30d8 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x405f9a + ':+' + _0x405f9a + "\nEND:VCARD\n\n");
        });
        _0x54d3cf.end();
        _0x54d3cf.on("finish", async () => {
          await _0x1ef934.sendMessage(_0x3b9bf8, {
            'document': {
              'url': _0x36c644
            },
            'mimetype': 'text/vcard',
            'fileName': _0x26224c,
            'caption': "Here is the vCard file containing all " + _0x12695f.length + " members of this group: " + _0xbe2451.subject + ".\n\n🕵️ Junior by Vimboy"
          });
          fs.unlinkSync(_0x36c644);
          console.log("vCard file created and sent for group: " + _0xbe2451.subject);
        });
        _0x54d3cf.on("error", _0x11dfb0 => {
          console.error("Error writing vCard file: " + _0x11dfb0.message);
        });
      } catch (_0x4c411e) {
        console.error("Error creating or sending vCard file for group " + _0x3b9bf8 + ':', _0x4c411e.message);
        await _0x1ef934.sendMessage(_0x3b9bf8, {
          'text': "❌ Error generating the vCard file for this group. Please try again later.\n\n> Spark-X by carl"
        });
      }
    }
    _0x9620a9.ev.on("messages.upsert", async _0x50d17d => {
      const {
        messages: _0x36858e
      } = _0x50d17d;
      const _0x1583b7 = _0x36858e[0x0];
      if (!_0x1583b7.message) {
        return;
      }
      const _0x269718 = _0x1583b7.message.conversation || _0x1583b7.message.extendedTextMessage?.["text"] || '';
      const _0x22b7e2 = _0x1583b7.key.remoteJid;
      if (_0x269718.slice(0x1).toLowerCase() === 'vcard') {
        if (!_0x22b7e2.endsWith("@g.us")) {
          await _0x9620a9.sendMessage(_0x22b7e2, {
            'text': "❌ This command only works in groups.\n\n> Viniznimco"
          });
          return;
        }
        await _0x3eba04(_0x22b7e2, "🕵️ Carltech Home", _0x9620a9);
      }
    });
    async function _0x3a6109(_0x58f580) {
      const _0x59b979 = Object.keys(_0x58f580)[0x0].replace("Message", '');
      try {
        const _0x189c11 = await _0x9620a9.downloadContentFromMessage(_0x58f580[_0x59b979], _0x59b979);
        let _0x40128c = Buffer.from([]);
        for await (const _0x5afa08 of _0x189c11) {
          _0x40128c = Buffer.concat([_0x40128c, _0x5afa08]);
        }
        return _0x40128c;
      } catch (_0x5ada7c) {
        console.error("Error downloading media:", _0x5ada7c);
        return null;
      }
    }
    function _0x23c368(_0x34c6fd) {
      const _0x4e89bd = _0x34c6fd.key.participant || _0x34c6fd.key.remoteJid;
      const _0x480258 = new Intl.DateTimeFormat('en-KE', {
        'timeZone': "Africa/Nairobi",
        'dateStyle': "full",
        'timeStyle': "medium"
      }).format(new Date());
      let _0x5f1164 = "*[🗣️NO DELETING🤌]*\n\n";
      _0x5f1164 += "*🔮:* " + _0x480258 + "\n";
      _0x5f1164 += "*🤖Convo with:* @" + _0x4e89bd.split('@')[0x0] + "\n\n";
      return _0x5f1164;
    }
    _0x9620a9.ev.on("messages.upsert", async _0x283d6c => {
      if (conf.ANTIDELETE2 === "yes") {
        const {
          messages: _0x2b9cbf
        } = _0x283d6c;
        const _0x99935f = _0x2b9cbf[0x0];
        if (!_0x99935f.message) {
          return;
        }
        const _0x5338dc = _0x99935f.key;
        const _0x350ac9 = _0x5338dc.remoteJid;
        if (!store.chats[_0x350ac9]) {
          store.chats[_0x350ac9] = [];
        }
        store.chats[_0x350ac9].push(_0x99935f);
        if (_0x99935f.message.protocolMessage && _0x99935f.message.protocolMessage.type === 0x0) {
          const _0x4547dd = _0x99935f.message.protocolMessage.key;
          const _0x191f20 = store.chats[_0x350ac9];
          const _0x54f8dc = _0x191f20.find(_0x57276f => _0x57276f.key.id === _0x4547dd.id);
          if (_0x54f8dc) {
            try {
              const _0x37955a = _0x23c368(_0x54f8dc);
              const _0x252745 = Object.keys(_0x54f8dc.message)[0x0];
              if (_0x252745 === "conversation" || _0x252745 === 'extendedTextMessage') {
                await _0x9620a9.sendMessage(conf.NUMERO_OWNER + "@s.whatsapp.net", {
                  'text': _0x37955a + ("*Message:* " + _0x54f8dc.message[_0x252745].text),
                  'mentions': [_0x54f8dc.key.participant]
                });
              } else {
                if (_0x252745 === "imageMessage" || _0x252745 === "videoMessage" || _0x252745 === "documentMessage" || _0x252745 === "audioMessage" || _0x252745 === "stickerMessage" || _0x252745 === "voiceMessage") {
                  const _0x59a601 = await _0x3a6109(_0x54f8dc.message);
                  if (_0x59a601) {
                    const _0x54e2cd = _0x252745.replace("Message", '').toLowerCase();
                    await _0x9620a9.sendMessage(conf.NUMERO_OWNER + "@s.whatsapp.net", {
                      [_0x54e2cd]: _0x59a601,
                      'caption': _0x37955a,
                      'mentions': [_0x54f8dc.key.participant]
                    });
                  }
                }
              }
            } catch (_0x26232f) {
              console.error("Error handling deleted message:", _0x26232f);
            }
          }
        }
      }
    });
    _0x9620a9.ev.on('messages.upsert', async _0x244238 => {
      if (conf.ANTIDELETE1 === 'yes') {
        const {
          messages: _0x359a02
        } = _0x244238;
        const _0xd8678e = _0x359a02[0x0];
        if (!_0xd8678e.message) {
          return;
        }
        const _0x55b02a = _0xd8678e.key;
        const _0x9c430d = _0x55b02a.remoteJid;
        if (!store.chats[_0x9c430d]) {
          store.chats[_0x9c430d] = [];
        }
        store.chats[_0x9c430d].push(_0xd8678e);
        if (_0xd8678e.message.protocolMessage && _0xd8678e.message.protocolMessage.type === 0x0) {
          const _0x19ae5b = _0xd8678e.message.protocolMessage.key;
          const _0xcb4e6b = store.chats[_0x9c430d];
          const _0x44227b = _0xcb4e6b.find(_0x3491a1 => _0x3491a1.key.id === _0x19ae5b.id);
          if (_0x44227b) {
            try {
              const _0x1d47d0 = _0x23c368(_0x44227b);
              if (_0x44227b.message.conversation) {
                await _0x9620a9.sendMessage(_0x9c430d, {
                  'text': _0x1d47d0 + ("*Message:* " + _0x44227b.message.conversation),
                  'mentions': [_0x44227b.key.participant]
                });
              } else {
                if (_0x44227b.message.imageMessage || _0x44227b.message.videoMessage || _0x44227b.message.documentMessage || _0x44227b.message.audioMessage || _0x44227b.message.stickerMessage || _0x44227b.message.voiceMessage) {
                  const _0x16a517 = await _0x3a6109(_0x44227b.message);
                  if (_0x16a517) {
                    const _0x5d5a40 = _0x44227b.message.imageMessage ? "image" : _0x44227b.message.videoMessage ? "video" : _0x44227b.message.documentMessage ? "document" : _0x44227b.message.audioMessage ? "audio" : _0x44227b.message.stickerMessage ? 'sticker' : 'audio';
                    await _0x9620a9.sendMessage(_0x9c430d, {
                      [_0x5d5a40]: _0x16a517,
                      'caption': _0x1d47d0,
                      'mentions': [_0x44227b.key.participant]
                    });
                  }
                }
              }
            } catch (_0x54dae6) {
              console.error("Error handling deleted message:", _0x54dae6);
            }
          }
        }
      }
    });
    const _0x1fc7e0 = {
      'hey': "files/hey.wav",
      'hi': 'files/hey.wav',
      'hey': "files/hey.wav",
      'he': 'files/hey.wav',
      'hello': "files/hello.wav",
      'mambo': "files/hey.wav",
      'niaje': "files/hey.wav",
      'morning': "files/goodmorning.wav",
      'goodmorning': "files/goodmorning.wav",
      "weka up": "files/goodmorning.wav",
      'night': "files/goodnight.wav",
      'goodnight': "files/goodnight.wav",
      'sleep': 'files/goodnight.wav',
      'oyaah': "files/mkuu.wav",
      'mkuu': "files/mkuu.wav",
      'mahn': "files/mkuu.wav",
      'owoh': "files/mkuu.wav",
      'yoo': "files/mkuu.wav",
      'wazii': 'files/mkuu.wav',
      'dev': "files/ibrahim.wav",
      'ibraah': 'files/ibrahim.wav',
      'ibrah': "files/ibrahim.wav",
      'ibrahim': "files/ibrahim.wav",
      'adams': 'files/ibrahim.wav',
      'bot': 'files/bwm.mp3',
      'bwm': "files/bwm.mp3",
      'xmd': "files/bwm.mp3",
      'bmw': 'files/bwm.mp3',
      'md': "files/bwm.mp3",
      "whatsapp bot": "files/bwm.mp3",
      "bmw md": "files/bwm.mp3",
      'evening': "files/goodevening.wav",
      'goodevening': 'files/goodevening.wav',
      'darling': "files/darling.wav",
      'beb': "files/darling.wav",
      'mpenzi': 'files/darling.wav',
      'afternoon': "files/goodafternoon.wav",
      'jion': "files/goodafternoon.wav",
      'kaka': "files/kaka.wav",
      'bro': 'files/morio.mp3',
      'ndugu': "files/kaka.wav",
      'morio': 'files/morio.mp3',
      'mzee': "files/morio.mp3",
      'kijina': "files/mkuu.wav",
      'mkuu': "files/mkuu.wav",
      'ozah': "files/mkuu.wav",
      'ozaah': "files/mkuu.wav",
      'oyaah': "files/mkuu.wav",
      'oyah': "files/mkuu.wav"
    };
    const _0x31461f = _0x44db41 => {
      const _0x34638b = _0x44db41.split(/\s+/);
      for (const _0x50d1d8 of _0x34638b) {
        const _0x4e20f8 = _0x1fc7e0[_0x50d1d8.toLowerCase()];
        if (_0x4e20f8) {
          return _0x4e20f8;
        }
      }
      return null;
    };
    if (conf.AUDIO_REPLY === 'yes') {
      console.log("AUTO_REPLY_AUDIO is enabled. Listening for messages...");
      _0x9620a9.ev.on("messages.upsert", async _0x476417 => {
        try {
          const {
            messages: _0x3a01f9
          } = _0x476417;
          for (const _0x1c1ea6 of _0x3a01f9) {
            if (!_0x1c1ea6.key || !_0x1c1ea6.key.remoteJid) {
              continue;
            }
            const _0x1e50a1 = _0x1c1ea6?.["message"]?.["conversation"] || '';
            const _0x1ec500 = _0x31461f(_0x1e50a1);
            if (_0x1ec500) {
              try {
                await fs.access(_0x1ec500);
                console.log("Replying with audio: " + _0x1ec500);
                await _0x9620a9.sendMessage(_0x1c1ea6.key.remoteJid, {
                  'audio': {
                    'url': _0x1ec500
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                });
                console.log("Audio reply sent: " + _0x1ec500);
              } catch (_0x58911d) {
                console.error("Error sending audio reply: " + _0x58911d.message);
              }
            } else {
              console.log("No matching keyword detected. Skipping message.");
            }
            await new Promise(_0x323a81 => setTimeout(_0x323a81, 0xbb8));
          }
        } catch (_0x35fe67) {
          console.error("Error in message processing:", _0x35fe67.message);
        }
      });
    }
    _0x9620a9.ev.on("messages.upsert", async _0x331455 => {
      const {
        messages: _0x14c4e1
      } = _0x331455;
      const _0x327947 = _0x14c4e1[0x0];
      if (!_0x327947.message) {
        return;
      }
      const _0x3b8fcd = _0x568659 => {
        if (!_0x568659) {
          return _0x568659;
        }
        if (/:\d+@/gi.test(_0x568659)) {
          0x0;
          let _0x140142 = baileys_1.jidDecode(_0x568659) || {};
          return _0x140142.user && _0x140142.server && _0x140142.user + '@' + _0x140142.server || _0x568659;
        } else {
          return _0x568659;
        }
      };
      0x0;
      var _0x32eaba = baileys_1.getContentType(_0x327947.message);
      var _0x24e838 = _0x32eaba == "conversation" ? _0x327947.message.conversation : _0x32eaba == "imageMessage" ? _0x327947.message.imageMessage?.["caption"] : _0x32eaba == "videoMessage" ? _0x327947.message.videoMessage?.["caption"] : _0x32eaba == "extendedTextMessage" ? _0x327947.message?.["extendedTextMessage"]?.["text"] : _0x32eaba == "buttonsResponseMessage" ? _0x327947?.['message']?.["buttonsResponseMessage"]?.['selectedButtonId'] : _0x32eaba == "listResponseMessage" ? _0x327947.message?.["listResponseMessage"]?.['singleSelectReply']?.['selectedRowId'] : _0x32eaba == 'messageContextInfo' ? _0x327947?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x327947.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x327947.text : '';
      var _0x502a84 = _0x327947.key.remoteJid;
      var _0x42e68a = _0x3b8fcd(_0x9620a9.user.id);
      var _0x36e65b = _0x42e68a.split('@')[0x0];
      const _0x5dd3aa = _0x502a84?.['endsWith']('@g.us');
      var _0x510cbb = _0x5dd3aa ? await _0x9620a9.groupMetadata(_0x502a84) : '';
      var _0x33cc73 = _0x5dd3aa ? _0x510cbb.subject : '';
      var _0x3baa9e = _0x327947.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x81fdbb = _0x3b8fcd(_0x327947.message?.["extendedTextMessage"]?.["contextInfo"]?.['participant']);
      var _0x2ee85f = _0x5dd3aa ? _0x327947.key.participant ? _0x327947.key.participant : _0x327947.participant : _0x502a84;
      if (_0x327947.key.fromMe) {
        _0x2ee85f = _0x42e68a;
      }
      var _0x411ed8 = _0x5dd3aa ? _0x327947.key.participant : '';
      const {
        getAllSudoNumbers: _0xb01f03
      } = require('./lib/sudo');
      const _0xd3f3d1 = _0x327947.pushName;
      const _0x469874 = await _0xb01f03();
      const _0x1cfc33 = [_0x36e65b, "254780015430", "254780015430", '254780015430', "254780015430", conf.NUMERO_OWNER].map(_0x52521e => _0x52521e.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x178ade = _0x1cfc33.concat(_0x469874);
      const _0x23dec5 = _0x178ade.includes(_0x2ee85f);
      var _0x229f9d = ["254780015430", "254780015430", '254780015430', "254780015430"].map(_0x3862c1 => _0x3862c1.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x2ee85f);
      function _0x492eec(_0x342315) {
        _0x9620a9.sendMessage(_0x502a84, {
          'text': _0x342315
        }, {
          'quoted': _0x327947
        });
      }
      console.log("\tCONSOLE MESSAGES");
      console.log("=========== MESSAGES TRACKED ===========");
      if (_0x5dd3aa) {
        console.log("MESSAGE FROM GROUP : " + _0x33cc73);
      }
      console.log("MESSAGE SENT BY : [" + _0xd3f3d1 + " : " + _0x2ee85f.split('@s.whatsapp.net')[0x0] + " ]");
      console.log("MESSAGE TYPE : " + _0x32eaba);
      console.log("==================TEXT==================");
      console.log(_0x24e838);
      function _0xd664d5(_0x1bdba3) {
        let _0x453785 = [];
        for (_0x331455 of _0x1bdba3) {
          if (_0x331455.admin == null) {
            continue;
          }
          _0x453785.push(_0x331455.id);
        }
        return _0x453785;
      }
      var _0x2ac102 = conf.ETAT;
      if (_0x2ac102 == 0x1) {
        await _0x9620a9.sendPresenceUpdate('available', _0x502a84);
      } else {
        if (_0x2ac102 == 0x2) {
          await _0x9620a9.sendPresenceUpdate("composing", _0x502a84);
        } else if (_0x2ac102 == 0x3) {
          await _0x9620a9.sendPresenceUpdate("recording", _0x502a84);
        } else {
          await _0x9620a9.sendPresenceUpdate("unavailable", _0x502a84);
        }
      }
      const _0x120ed4 = _0x5dd3aa ? await _0x510cbb.participants : '';
      let _0x4095bf = _0x5dd3aa ? _0xd664d5(_0x120ed4) : '';
      const _0x157eed = _0x5dd3aa ? _0x4095bf.includes(_0x2ee85f) : false;
      var _0x551210 = _0x5dd3aa ? _0x4095bf.includes(_0x42e68a) : false;
      const _0x4248f2 = _0x24e838 ? _0x24e838.trim().split(/ +/).slice(0x1) : null;
      const _0x2f2876 = _0x24e838 ? _0x24e838.startsWith(prefixe) : false;
      const _0xe1f635 = _0x2f2876 ? _0x24e838.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x501196 = conf.URL.split(',');
      function _0x2bf305() {
        const _0x24e23b = Math.floor(Math.random() * _0x501196.length);
        const _0x18dd71 = _0x501196[_0x24e23b];
        return _0x18dd71;
      }
      var _0xb5ea38 = {
        'superUser': _0x23dec5,
        'dev': _0x229f9d,
        'verifGroupe': _0x5dd3aa,
        'mbre': _0x120ed4,
        'membreGroupe': _0x411ed8,
        'verifAdmin': _0x157eed,
        'infosGroupe': _0x510cbb,
        'nomGroupe': _0x33cc73,
        'auteurMessage': _0x2ee85f,
        'nomAuteurMessage': _0xd3f3d1,
        'idBot': _0x42e68a,
        'verifZokouAdmin': _0x551210,
        'prefixe': prefixe,
        'arg': _0x4248f2,
        'repondre': _0x492eec,
        'mtype': _0x32eaba,
        'groupeAdmin': _0xd664d5,
        'msgRepondu': _0x3baa9e,
        'auteurMsgRepondu': _0x81fdbb,
        'ms': _0x327947,
        'mybotpic': _0x2bf305
      };
      if (_0x502a84 === "120363244435092946@g.us") {
        return;
      }
      if (conf.AUTO_READ === 'yes') {
        _0x9620a9.ev.on("messages.upsert", async _0x4012b9 => {
          const {
            messages: _0x2fe640
          } = _0x4012b9;
          for (const _0x10d306 of _0x2fe640) {
            if (!_0x10d306.key.fromMe) {
              await _0x9620a9.readMessages([_0x10d306.key]);
            }
          }
        });
      }
      if (_0x327947.key && _0x327947.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x9620a9.readMessages([_0x327947.key]);
      }
      if (_0x327947.key && _0x327947.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === 'yes') {
        if (_0x327947.message.extendedTextMessage) {
          var _0x141e09 = _0x327947.message.extendedTextMessage.text;
          await _0x9620a9.sendMessage(_0x42e68a, {
            'text': _0x141e09
          }, {
            'quoted': _0x327947
          });
        } else {
          if (_0x327947.message.imageMessage) {
            var _0x2cf2b4 = _0x327947.message.imageMessage.caption;
            var _0x581ced = await _0x9620a9.downloadAndSaveMediaMessage(_0x327947.message.imageMessage);
            await _0x9620a9.sendMessage(_0x42e68a, {
              'image': {
                'url': _0x581ced
              },
              'caption': _0x2cf2b4
            }, {
              'quoted': _0x327947
            });
          } else {
            if (_0x327947.message.videoMessage) {
              var _0x2cf2b4 = _0x327947.message.videoMessage.caption;
              var _0x5533d6 = await _0x9620a9.downloadAndSaveMediaMessage(_0x327947.message.videoMessage);
              await _0x9620a9.sendMessage(_0x42e68a, {
                'video': {
                  'url': _0x5533d6
                },
                'caption': _0x2cf2b4
              }, {
                'quoted': _0x327947
              });
            }
          }
        }
      }
      if (!_0x229f9d && _0x502a84 == '120363404846707306@g.us') {
        return;
      }
      if (_0x24e838 && _0x2ee85f.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x269d64
        } = require('./lib/level');
        try {
          await _0x269d64(_0x2ee85f);
        } catch (_0x4b9ea0) {
          console.error(_0x4b9ea0);
        }
      }
      try {
        if (_0x327947.message[_0x32eaba].contextInfo.mentionedJid && (_0x327947.message[_0x32eaba].contextInfo.mentionedJid.includes(_0x42e68a) || _0x327947.message[_0x32eaba].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x502a84 == "120363404846707306@g.us") {
            return;
          }
          ;
          if (_0x23dec5) {
            console.log("hummm");
            return;
          }
          let _0x2ba14b = require("./lib/mention");
          let _0x8c6ed0 = await _0x2ba14b.recupererToutesLesValeurs();
          let _0x560700 = _0x8c6ed0[0x0];
          if (_0x560700.status === 'non') {
            console.log("mention pas actifs");
            return;
          }
          let _0x49f71a;
          if (_0x560700.type.toLocaleLowerCase() === 'image') {
            _0x49f71a = {
              'image': {
                'url': _0x560700.url
              },
              'caption': _0x560700.message
            };
          } else {
            if (_0x560700.type.toLocaleLowerCase() === "video") {
              _0x49f71a = {
                'video': {
                  'url': _0x560700.url
                },
                'caption': _0x560700.message
              };
            } else {
              if (_0x560700.type.toLocaleLowerCase() === 'sticker') {
                let _0x22cbc1 = new Sticker(_0x560700.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': '12345',
                  'quality': 0x46,
                  'background': 'transparent'
                });
                const _0x9fdfb3 = await _0x22cbc1.toBuffer();
                _0x49f71a = {
                  'sticker': _0x9fdfb3
                };
              } else if (_0x560700.type.toLocaleLowerCase() === "audio") {
                _0x49f71a = {
                  'audio': {
                    'url': _0x560700.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x9620a9.sendMessage(_0x502a84, _0x49f71a, {
            'quoted': _0x327947
          });
        }
      } catch (_0x48d7f6) {}
      try {
        const _0x3f3ccf = await verifierEtatJid(_0x502a84);
        if (_0x24e838.includes("https://") && _0x5dd3aa && _0x3f3ccf) {
          console.log("lien detecté");
          var _0x451035 = _0x5dd3aa ? _0x4095bf.includes(_0x42e68a) : false;
          if (_0x23dec5 || _0x157eed || !_0x451035) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x42019d = {
            'remoteJid': _0x502a84,
            'fromMe': false,
            'id': _0x327947.key.id,
            'participant': _0x2ee85f
          };
          var _0x3f8422 = "lien detected, \n";
          var _0x2cf273 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': 'SPARK-X',
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x2cf273.toFile("st1.webp");
          var _0x10f56c = await recupererActionJid(_0x502a84);
          if (_0x10f56c === 'remove') {
            _0x3f8422 += "message deleted \n @" + _0x2ee85f.split('@')[0x0] + " removed from group.";
            await _0x9620a9.sendMessage(_0x502a84, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x9620a9.sendMessage(_0x502a84, {
              'text': _0x3f8422,
              'mentions': [_0x2ee85f]
            }, {
              'quoted': _0x327947
            });
            try {
              await _0x9620a9.groupParticipantsUpdate(_0x502a84, [_0x2ee85f], "remove");
            } catch (_0x4de98c) {
              console.log("antiien ") + _0x4de98c;
            }
            await _0x9620a9.sendMessage(_0x502a84, {
              'delete': _0x42019d
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x10f56c === "delete") {
              _0x3f8422 += "message deleted \n @" + _0x2ee85f.split('@')[0x0] + " avoid sending link.";
              await _0x9620a9.sendMessage(_0x502a84, {
                'text': _0x3f8422,
                'mentions': [_0x2ee85f]
              }, {
                'quoted': _0x327947
              });
              await _0x9620a9.sendMessage(_0x502a84, {
                'delete': _0x42019d
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x10f56c === 'warn') {
                const {
                  getWarnCountByJID: _0x496e64,
                  ajouterUtilisateurAvecWarnCount: _0x25cc3a
                } = require("./lib/warn");
                let _0x331cdf = await _0x496e64(_0x2ee85f);
                let _0x373b31 = conf.WARN_COUNT;
                if (_0x331cdf >= _0x373b31) {
                  var _0x46368b = "link detected , you will be remove because of reaching warn-limit";
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'text': _0x46368b,
                    'mentions': [_0x2ee85f]
                  }, {
                    'quoted': _0x327947
                  });
                  await _0x9620a9.groupParticipantsUpdate(_0x502a84, [_0x2ee85f], "remove");
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'delete': _0x42019d
                  });
                } else {
                  var _0x158d36 = _0x373b31 - _0x331cdf;
                  var _0x226601 = "Link detected , your warn_count was upgrade ;\n rest : " + _0x158d36 + " ";
                  await _0x25cc3a(_0x2ee85f);
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'text': _0x226601,
                    'mentions': [_0x2ee85f]
                  }, {
                    'quoted': _0x327947
                  });
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'delete': _0x42019d
                  });
                }
              }
            }
          }
        }
      } catch (_0x53da45) {
        console.log("bdd err " + _0x53da45);
      }
      try {
        const _0x36ef9d = _0x327947.key?.['id']?.["startsWith"]("BAES") && _0x327947.key?.['id']?.["length"] === 0x10;
        const _0x221757 = _0x327947.key?.['id']?.["startsWith"]("BAE5") && _0x327947.key?.['id']?.['length'] === 0x10;
        if (_0x36ef9d || _0x221757) {
          if (_0x32eaba === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x532c7b = await atbverifierEtatJid(_0x502a84);
          if (!_0x532c7b) {
            return;
          }
          ;
          if (_0x157eed || _0x2ee85f === _0x42e68a) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x901d5b = {
            'remoteJid': _0x502a84,
            'fromMe': false,
            'id': _0x327947.key.id,
            'participant': _0x2ee85f
          };
          var _0x3f8422 = "bot detected, \n";
          var _0x2cf273 = new Sticker('https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif', {
            'pack': "Spark-X",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': '12345',
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x2cf273.toFile("st1.webp");
          var _0x10f56c = await atbrecupererActionJid(_0x502a84);
          if (_0x10f56c === "remove") {
            _0x3f8422 += "message deleted \n @" + _0x2ee85f.split('@')[0x0] + " removed from group.";
            await _0x9620a9.sendMessage(_0x502a84, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x9620a9.sendMessage(_0x502a84, {
              'text': _0x3f8422,
              'mentions': [_0x2ee85f]
            }, {
              'quoted': _0x327947
            });
            try {
              await _0x9620a9.groupParticipantsUpdate(_0x502a84, [_0x2ee85f], "remove");
            } catch (_0x5b33b9) {
              console.log("antibot ") + _0x5b33b9;
            }
            await _0x9620a9.sendMessage(_0x502a84, {
              'delete': _0x901d5b
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x10f56c === "delete") {
              _0x3f8422 += "message delete \n @" + _0x2ee85f.split('@')[0x0] + " Avoid sending link.";
              await _0x9620a9.sendMessage(_0x502a84, {
                'text': _0x3f8422,
                'mentions': [_0x2ee85f]
              }, {
                'quoted': _0x327947
              });
              await _0x9620a9.sendMessage(_0x502a84, {
                'delete': _0x901d5b
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x10f56c === 'warn') {
                const {
                  getWarnCountByJID: _0x21d8ef,
                  ajouterUtilisateurAvecWarnCount: _0x54392f
                } = require("./bdd/warn");
                let _0x5828e5 = await _0x21d8ef(_0x2ee85f);
                let _0xeed3b9 = conf.WARN_COUNT;
                if (_0x5828e5 >= _0xeed3b9) {
                  var _0x46368b = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'text': _0x46368b,
                    'mentions': [_0x2ee85f]
                  }, {
                    'quoted': _0x327947
                  });
                  await _0x9620a9.groupParticipantsUpdate(_0x502a84, [_0x2ee85f], 'remove');
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'delete': _0x901d5b
                  });
                } else {
                  var _0x158d36 = _0xeed3b9 - _0x5828e5;
                  var _0x226601 = "bot detected , your warn_count was upgrade ;\n rest : " + _0x158d36 + " ";
                  await _0x54392f(_0x2ee85f);
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'text': _0x226601,
                    'mentions': [_0x2ee85f]
                  }, {
                    'quoted': _0x327947
                  });
                  await _0x9620a9.sendMessage(_0x502a84, {
                    'delete': _0x901d5b
                  });
                }
              }
            }
          }
        }
      } catch (_0x5babd5) {
        console.log(".... " + _0x5babd5);
      }
      if (_0x2f2876) {
        const _0xc9a3c3 = evt.cm.find(_0x17d218 => _0x17d218.nomCom === _0xe1f635);
        if (_0xc9a3c3) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x23dec5) {
              return;
            }
            if (!_0x23dec5 && _0x502a84 === _0x2ee85f && conf.PM_PERMIT === 'yes') {
              _0x492eec("Sorry you don't have access to command this code");
              return;
            }
            if (!_0x23dec5 && _0x5dd3aa) {
              let _0x5ddd50 = await isGroupBanned(_0x502a84);
              if (_0x5ddd50) {
                return;
              }
            }
            if (!_0x157eed && _0x5dd3aa) {
              let _0x567879 = await isGroupOnlyAdmin(_0x502a84);
              if (_0x567879) {
                return;
              }
            }
            if (!_0x23dec5) {
              let _0x992b4a = await isUserBanned(_0x2ee85f);
              if (_0x992b4a) {
                _0x492eec("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x502a84, _0x9620a9, _0x327947, _0xc9a3c3.reaction);
            _0xc9a3c3.fonction(_0x502a84, _0x9620a9, _0xb5ea38);
          } catch (_0x3241a7) {
            console.log("😡😡 " + _0x3241a7);
            _0x9620a9.sendMessage(_0x502a84, {
              'text': "😡😡 " + _0x3241a7
            }, {
              'quoted': _0x327947
            });
          }
        }
      }
    });
    const {
      recupevents: _0x40ef37
    } = require("./lib/welcome");
    _0x9620a9.ev.on('group-participants.update', async _0x51aa3e => {
      console.log("Group participants update triggered:", _0x51aa3e);
      let _0x2c9623;
      try {
        _0x2c9623 = await _0x9620a9.profilePictureUrl(_0x51aa3e.id, "image");
      } catch (_0x1f63e3) {
        _0x2c9623 = "https://files.catbox.moe/aqjm03.jpg";
      }
      try {
        const _0x473269 = await _0x9620a9.groupMetadata(_0x51aa3e.id);
        if (_0x51aa3e.action === "add" && (await _0x40ef37(_0x51aa3e.id, "welcome")) === 'on') {
          let _0x555382 = "\n╭────────────━⊷\n║ Most Welcome\n╰────────────━⊷\n";
          let _0x27f182 = _0x51aa3e.participants;
          for (let _0x132787 = 0x0; _0x132787 < _0x27f182.length; _0x132787++) {
            let _0x4456dc = _0x473269.participants.findIndex(_0x19a1f5 => _0x19a1f5.id === _0x27f182[_0x132787]) + 0x1;
            _0x555382 += "\n\n> 👋 *Hello* @" + _0x27f182[_0x132787].split('@')[0x0] + "\n\n *You are member number*: " + _0x4456dc + " in this group! 🎉\n";
          }
          _0x555382 += "\n*Feel free to introduce yourself and engage in meaningful discussions. Enjoy your time here!*\n\n\n╭──────────━⊷\n║ https://github.com/Viniznimco\n╰──────────━⊷";
          await _0x9620a9.sendMessage(_0x51aa3e.id, {
            'image': {
              'url': _0x2c9623
            },
            'caption': _0x555382,
            'mentions': _0x27f182
          });
          console.log("Welcome message sent successfully.");
        } else {
          if (_0x51aa3e.action === 'remove' && (await _0x40ef37(_0x51aa3e.id, 'goodbye')) === 'on') {
            let _0x2c2c55 = "\n╭────────────━⊷\n║ Step Out\n╰────────────━⊷          \n            \n> One member gone 😭:\n";
            let _0x3d6db1 = _0x51aa3e.participants;
            for (let _0x1655ee of _0x3d6db1) {
              _0x2c2c55 += "\n> ~@" + _0x1655ee.split('@')[0x0] + "~ \n";
            }
            _0x2c2c55 += "\n\n            \n> All the best as you go!\n\n\n╭──────────━⊷\n║ https://github.com/Viniznimco\n╰──────────━⊷";
            await _0x9620a9.sendMessage(_0x51aa3e.id, {
              'text': _0x2c2c55,
              'mentions': _0x3d6db1
            });
            console.log("Goodbye message sent successfully.");
          } else {
            if (_0x51aa3e.action === "promote" && (await _0x40ef37(_0x51aa3e.id, "antipromote")) === 'on') {
              if (_0x51aa3e.author === _0x473269.owner || _0x51aa3e.author === conf.NUMERO_OWNER + '@s.whatsapp.net' || _0x51aa3e.author === decodeJid(_0x9620a9.user.id) || _0x51aa3e.author === _0x51aa3e.participants[0x0]) {
                console.log("SuperUser detected, no action taken.");
                return;
              }
              await _0x9620a9.groupParticipantsUpdate(_0x51aa3e.id, [_0x51aa3e.author, _0x51aa3e.participants[0x0]], "demote");
              await _0x9620a9.sendMessage(_0x51aa3e.id, {
                'text': "🚫 @" + _0x51aa3e.author.split('@')[0x0] + " has violated the anti-promotion rule. Both @" + _0x51aa3e.author.split('@')[0x0] + " and @" + _0x51aa3e.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x51aa3e.author, _0x51aa3e.participants[0x0]]
              });
              console.log("Anti-promotion action executed successfully.");
            } else {
              if (_0x51aa3e.action === "demote" && (await _0x40ef37(_0x51aa3e.id, 'antidemote')) === 'on') {
                if (_0x51aa3e.author === _0x473269.owner || _0x51aa3e.author === conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x51aa3e.author === decodeJid(_0x9620a9.user.id) || _0x51aa3e.author === _0x51aa3e.participants[0x0]) {
                  console.log("SuperUser detected, no action taken.");
                  return;
                }
                await _0x9620a9.groupParticipantsUpdate(_0x51aa3e.id, [_0x51aa3e.author], "demote");
                await _0x9620a9.groupParticipantsUpdate(_0x51aa3e.id, [_0x51aa3e.participants[0x0]], "promote");
                await _0x9620a9.sendMessage(_0x51aa3e.id, {
                  'text': "🚫 @" + _0x51aa3e.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x51aa3e.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x51aa3e.author, _0x51aa3e.participants[0x0]]
                });
                console.log("Anti-demotion action executed successfully.");
              }
            }
          }
        }
      } catch (_0x3e9fea) {
        console.error("Error handling group participants update:", _0x3e9fea);
      }
    });
    async function _0x1e924f() {
      const _0x142a15 = require("node-cron");
      const {
        getCron: _0x3b2c3a
      } = require("./lib/cron");
      let _0x5bcb32 = await _0x3b2c3a();
      console.log(_0x5bcb32);
      if (_0x5bcb32.length > 0x0) {
        for (let _0x3ece1c = 0x0; _0x3ece1c < _0x5bcb32.length; _0x3ece1c++) {
          const _0x1cda2 = _0x5bcb32[_0x3ece1c];
          if (_0x1cda2.mute_at) {
            let _0x2cea6a = _0x1cda2.mute_at.replace(/\s/g, '').split(':');
            if (_0x2cea6a.length === 0x2 && !isNaN(_0x2cea6a[0x0]) && !isNaN(_0x2cea6a[0x1])) {
              console.log("Setting up auto-mute for " + _0x1cda2.group_id + " at " + _0x2cea6a[0x0] + ':' + _0x2cea6a[0x1]);
              _0x142a15.schedule(_0x2cea6a[0x1] + " " + _0x2cea6a[0x0] + " * * *", async () => {
                await _0x9620a9.groupSettingUpdate(_0x1cda2.group_id, "announcement");
                _0x9620a9.sendMessage(_0x1cda2.group_id, {
                  'image': {
                    'url': "./files/chrono.webp"
                  },
                  'caption': "Hello, it's time to close the group; sayonara."
                });
              }, {
                'timezone': 'Africa/Nairobi'
              });
            } else {
              console.error("Invalid mute_at format: " + _0x1cda2.mute_at);
            }
          }
          if (_0x1cda2.unmute_at) {
            let _0x54f330 = _0x1cda2.unmute_at.replace(/\s/g, '').split(':');
            if (_0x54f330.length === 0x2 && !isNaN(_0x54f330[0x0]) && !isNaN(_0x54f330[0x1])) {
              console.log("Setting up auto-unmute for " + _0x1cda2.group_id + " at " + _0x54f330[0x0] + ':' + _0x54f330[0x1]);
              _0x142a15.schedule(_0x54f330[0x1] + " " + _0x54f330[0x0] + " * * *", async () => {
                await _0x9620a9.groupSettingUpdate(_0x1cda2.group_id, "not_announcement");
                _0x9620a9.sendMessage(_0x1cda2.group_id, {
                  'image': {
                    'url': "./files/chrono.webp"
                  },
                  'caption': "Good morning; it's time to open the group."
                });
              }, {
                'timezone': "Africa/Nairobi"
              });
            } else {
              console.error("Invalid unmute_at format: " + _0x1cda2.unmute_at);
            }
          }
        }
      } else {
        console.log("No cron jobs to activate.");
      }
      return;
    }
    _0x9620a9.ev.on("connection.update", async _0x27c586 => {
      const {
        lastDisconnect: _0x242ecb,
        connection: _0x28ed67
      } = _0x27c586;
      if (_0x28ed67 === 'connecting') {
        console.log("ℹ️ Bot is connecting...");
      } else {
        if (_0x28ed67 === "open") {
          console.log("✅ Bot Connected to WhatsApp! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log("------");
          0x0;
          await baileys_1.delay(0x12c);
          console.log('------------------/-----');
          console.log("Bot is Online 🕸\n\n");
          console.log("Loading Bot Commands ...\n");
          fs.readdirSync(__dirname + "/scs").forEach(_0x3f7220 => {
            if (path.extname(_0x3f7220).toLowerCase() == ".js") {
              try {
                require(__dirname + "/scs/" + _0x3f7220);
                console.log(_0x3f7220 + " Installed Successfully✔️");
              } catch (_0xb2f838) {
                console.log(_0x3f7220 + " could not be installed due to : " + _0xb2f838);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x3c1c4e;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x3c1c4e = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x3c1c4e = "private";
          } else {
            _0x3c1c4e = "undefined";
          }
          console.log("Commands Installation Completed ✅");
          await _0x1e924f();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x1d9518 = " ⁠⁠⁠⁠\n╭──────────━⊷\n║ ZENA-2025\n╰──────────━⊷\n╭──────────━⊷\n║ 𝕴𝖌𝖓𝖎𝖙𝖎𝖔𝖓: [ " + prefixe + " ]\n║ 𝕸𝖔𝖉𝖊: " + _0x3c1c4e + "\n║ 𝕽𝖊𝖑𝖊𝖆𝖘𝖊: 7.0.8\n║ 𝕷𝖎𝖈𝖊𝖓𝖘𝖊: MIT 90.87.9\n╰──────────━⊷\n\n                 ";
            await _0x9620a9.sendMessage(_0x9620a9.user.id, {
              'text': _0x1d9518
            });
          }
        } else {
          if (_0x28ed67 == "close") {
            let _0x226aa9 = new boom_1.Boom(_0x242ecb?.["error"])?.['output']["statusCode"];
            if (_0x226aa9 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id error, rescan again...");
            } else {
              if (_0x226aa9 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x12b08f();
              } else {
                if (_0x226aa9 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error 😞 ,,, trying to reconnect... ");
                  _0x12b08f();
                } else {
                  if (_0x226aa9 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x226aa9 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x226aa9 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x12b08f();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x226aa9);
                        const {
                          exec: _0xfed5d2
                        } = require('child_process');
                        _0xfed5d2("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x28ed67);
            _0x12b08f();
          }
        }
      }
    });
    _0x9620a9.ev.on("creds.update", _0x4416e6);
    _0x9620a9.downloadAndSaveMediaMessage = async (_0x2d763b, _0x179f08 = '', _0x2e5cc4 = true) => {
      let _0x151a41 = _0x2d763b.msg ? _0x2d763b.msg : _0x2d763b;
      let _0x3a787d = (_0x2d763b.msg || _0x2d763b).mimetype || '';
      let _0x151a80 = _0x2d763b.mtype ? _0x2d763b.mtype.replace(/Message/gi, '') : _0x3a787d.split('/')[0x0];
      0x0;
      const _0x408e57 = await baileys_1.downloadContentFromMessage(_0x151a41, _0x151a80);
      let _0x293de8 = Buffer.from([]);
      for await (const _0x5093dd of _0x408e57) {
        _0x293de8 = Buffer.concat([_0x293de8, _0x5093dd]);
      }
      let _0x4ae087 = await FileType.fromBuffer(_0x293de8);
      let _0x2909d0 = './' + _0x179f08 + '.' + _0x4ae087.ext;
      await fs.writeFileSync(_0x2909d0, _0x293de8);
      return _0x2909d0;
    };
    _0x9620a9.awaitForMessage = async (_0x427772 = {}) => {
      return new Promise((_0x31d724, _0x7ab44b) => {
        if (typeof _0x427772 !== 'object') {
          _0x7ab44b(new Error("Options must be an object"));
        }
        if (typeof _0x427772.sender !== "string") {
          _0x7ab44b(new Error("Sender must be a string"));
        }
        if (typeof _0x427772.chatJid !== "string") {
          _0x7ab44b(new Error("ChatJid must be a string"));
        }
        if (_0x427772.timeout && typeof _0x427772.timeout !== 'number') {
          _0x7ab44b(new Error("Timeout must be a number"));
        }
        if (_0x427772.filter && typeof _0x427772.filter !== "function") {
          _0x7ab44b(new Error("Filter must be a function"));
        }
        const _0x1947f1 = _0x427772?.["timeout"] || undefined;
        const _0x58dfc2 = _0x427772?.["filter"] || (() => true);
        let _0x2eefcd = undefined;
        let _0x558216 = _0x1553e0 => {
          let {
            type: _0x35b589,
            messages: _0xa22e1e
          } = _0x1553e0;
          if (_0x35b589 == "notify") {
            for (let _0x1dea7d of _0xa22e1e) {
              const _0x567f08 = _0x1dea7d.key.fromMe;
              const _0x1e5de7 = _0x1dea7d.key.remoteJid;
              const _0x18b4ee = _0x1e5de7.endsWith("@g.us");
              const _0x54599a = _0x1e5de7 == "status@broadcast";
              const _0x4e08e7 = _0x567f08 ? _0x9620a9.user.id.replace(/:.*@/g, '@') : _0x18b4ee || _0x54599a ? _0x1dea7d.key.participant.replace(/:.*@/g, '@') : _0x1e5de7;
              if (_0x4e08e7 == _0x427772.sender && _0x1e5de7 == _0x427772.chatJid && _0x58dfc2(_0x1dea7d)) {
                _0x9620a9.ev.off("messages.upsert", _0x558216);
                clearTimeout(_0x2eefcd);
                _0x31d724(_0x1dea7d);
              }
            }
          }
        };
        _0x9620a9.ev.on("messages.upsert", _0x558216);
        if (_0x1947f1) {
          _0x2eefcd = setTimeout(() => {
            _0x9620a9.ev.off('messages.upsert', _0x558216);
            _0x7ab44b(new Error("Timeout"));
          }, _0x1947f1);
        }
      });
    };
    return _0x9620a9;
  }
  let _0x13db33 = require.resolve(__filename);
  fs.watchFile(_0x13db33, () => {
    fs.unwatchFile(_0x13db33);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x13db33];
    require(_0x13db33);
  });
  _0x12b08f();
}, 0x1388);
