/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu
 DONT COPY
*/
const _0x2384a4 = (function () {
    let _0x29f3cb = true
    return function (_0x2fcc66, _0x74bf74) {
      const _0x5583cf = _0x29f3cb
        ? function () {
            if (_0x74bf74) {
              const _0x55d24b = _0x74bf74.apply(_0x2fcc66, arguments)
              return (_0x74bf74 = null), _0x55d24b
            }
          }
        : function () {}
      return (_0x29f3cb = false), _0x5583cf
    }
  })(),
  _0x5a2f56 = _0x2384a4(this, function () {
    return _0x5a2f56
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x5a2f56)
      .search('(((.+)+)+)+$')
  })
_0x5a2f56()
const _0x3ce222 = (function () {
  let _0x500a92 = true
  return function (_0x5dfa2d, _0x5a03a5) {
    const _0x960b5f = _0x500a92
      ? function () {
          if (_0x5a03a5) {
            const _0x15e6fd = _0x5a03a5.apply(_0x5dfa2d, arguments)
            return (_0x5a03a5 = null), _0x15e6fd
          }
        }
      : function () {}
    return (_0x500a92 = false), _0x960b5f
  }
})()
;(function () {
  _0x3ce222(this, function () {
    const _0x39a347 = new RegExp('function *\\( *\\)'),
      _0x14a782 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x358e0a = _0x402540('init')
    if (
      !_0x39a347.test(_0x358e0a + 'chain') ||
      !_0x14a782.test(_0x358e0a + 'input')
    ) {
      _0x358e0a('0')
    } else {
      _0x402540()
    }
  })()
})()
const { cmd, commands } = require('../lib/command')
;(function () {
  const _0xd59f9c = function () {
    let _0x4607fb
    try {
      _0x4607fb = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x18b2e3) {
      _0x4607fb = window
    }
    return _0x4607fb
  }
  const _0x2ef90e = _0xd59f9c()
  _0x2ef90e.setInterval(_0x402540, 4000)
})()
const config = require('../config')
var { get_set, input_set } = require('../lib/set_db')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat,
  } = require('../lib/functions'),
  axios = require('axios')
var BOTOW = "*You are not bot's owner or moderator !*"
const _0x211ba2 = {}
_0x211ba2.pattern = 'apply'
_0x211ba2.react = '\uD83D\uDEE1️'
_0x211ba2.alias = ['add', 'set']
_0x211ba2.desc = 'desc2'
_0x211ba2.category = 'owner'
_0x211ba2.use = '.apply <Text>'
_0x211ba2.filename = __filename
cmd(
  _0x211ba2,
  async (
    _0x51dcdd,
    _0x2cb57f,
    _0x55d020,
    {
      from: _0x3e5052,
      prefix: _0x938652,
      quoted: _0xefa674,
      body: _0x59e476,
      isCmd: _0x29da5b,
      command: _0x261fd7,
      args: _0x5245dd,
      q: _0x33ff0c,
      isGroup: _0x5c5665,
      sender: _0x329bfd,
      senderNumber: _0x1c1e51,
      botNumber2: _0x403dcc,
      botNumber: _0x1b194d,
      pushname: _0x160d89,
      isMe: _0x53fbf9,
      isOwner: _0x9225d5,
      groupMetadata: _0x3056f1,
      groupName: _0x190de2,
      participants: _0x30bbff,
      groupAdmins: _0x2fc36d,
      isBotAdmins: _0x564eba,
      isAdmins: _0x71b6,
      reply: _0x33c8bd,
    }
  ) => {
    try {
      if (!_0x53fbf9) {
        return await _0x33c8bd('Owner only')
      }
      if (!_0x33ff0c) {
        return _0x33c8bd('Please give me text')
      }
      const _0x2a7dba = (
        await axios.get(
          'https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json'
        )
      ).data
      let _0x2f6927 = _0x2a7dba.imageurl,
        _0x17bdfb = _0x2a7dba.button,
        _0x516eef = _0x2a7dba.footer,
        _0x3af08c = _0x2a7dba.buttonurl,
        _0x4e573e = _0x2a7dba.header
      const _0x288e69 = [
        {
          title: '',
          rows: [
            {
              title: '  1',
              rowId: _0x938652 + 'prefix ' + _0x33ff0c,
              description: '*SET PREFIX*',
            },
            {
              title: '  2',
              rowId: _0x938652 + 'alivemessage ' + _0x33ff0c,
              description: '*ALIVE MESSAGE*',
            },
            {
              title: '  3',
              rowId: _0x938652 + 'newsjid ' + _0x33ff0c,
              description: '*AUTO NEWS SEND*',
            },
          ],
        },
      ]
      let _0x30ffba = '*\u300C APPLY PANEL \u300D*\n\n*Input :* ' + _0x33ff0c
      const _0x5eb6eb = { url: _0x2f6927 }
      const _0x157a88 = {
        caption: _0x30ffba,
        image: _0x5eb6eb,
        footer: _0x516eef,
        title: '',
        buttonText: '*\uD83D\uDD22 Reply below number*',
        sections: _0x288e69,
      }
      const _0x12b946 = _0x157a88,
        _0x22e158 = {}
      return (
        (_0x22e158.quoted = _0x2cb57f),
        await _0x51dcdd.replyList(_0x3e5052, _0x12b946, _0x22e158)
      )
    } catch (_0x4a64c6) {
      _0x33c8bd('*ERROR !!*')
      l(_0x4a64c6)
    }
  }
)
const _0x481526 = {}
_0x481526.pattern = 'setting'
_0x481526.react = '\uD83D\uDEE1️'
_0x481526.alias = ['settings', 'botsetting']
_0x481526.desc = 'desc2'
_0x481526.category = 'owner'
_0x481526.use = '.settings'
_0x481526.filename = __filename
cmd(
  _0x481526,
  async (
    _0x18cd44,
    _0x360fc6,
    _0x13c28c,
    {
      from: _0x5f55dd,
      prefix: _0x23c219,
      quoted: _0x2f77a1,
      body: _0x2f83a9,
      isCmd: _0x45eae5,
      command: _0x5a028c,
      args: _0x3b47f1,
      q: _0x255ec2,
      isGroup: _0x1fdd96,
      sender: _0x5eea78,
      senderNumber: _0x25ff85,
      botNumber2: _0x5f2fd2,
      botNumber: _0xaa601c,
      pushname: _0x3a01b4,
      isMe: _0x3e313a,
      isOwner: _0xd1f280,
      groupMetadata: _0x33477e,
      groupName: _0x2bf093,
      participants: _0x392629,
      groupAdmins: _0x3edf74,
      isBotAdmins: _0x34d0bd,
      isAdmins: _0x52efec,
      reply: _0x1352fb,
    }
  ) => {
    try {
      if (!_0x3e313a) {
        return await _0x1352fb('\u274C *Owner only*')
      }
      const _0x140402 = (
        await axios.get(
          'https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json'
        )
      ).data
      let _0x38b720 = _0x140402.imageurl,
        _0x4ad83e = _0x140402.button,
        _0x3776a1 = _0x140402.footer,
        _0x183815 = _0x140402.buttonurl,
        _0x52c60b = config.PREFIX
      const _0x51be77 = [
          {
            title: '*`[1] MODE`*',
            rows: [
              {
                title: '   1.1',
                description: '*PUBLIC* \uD83E\uDDEC',
                rowId: _0x52c60b + 'mode public',
              },
              {
                title: '   1.2',
                description: '*PRIVATE* \uD83E\uDDEC',
                rowId: _0x52c60b + 'mode private',
              },
              {
                title: '   1.3',
                description: '*GROUPS* \uD83E\uDDEC',
                rowId: _0x52c60b + 'mode groups',
              },
              {
                title: '   1.4',
                description: '*INBOX* \uD83E\uDDEC',
                rowId: _0x52c60b + 'mode inbox',
              },
            ],
          },
          {
            title: '*`[2] AUTO READ STATUS`*',
            rows: [
              {
                title: '   2.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'autoreadsratus true',
              },
              {
                title: '   2.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'autoreadsratus false',
              },
            ],
          },
          {
            title: '*`[3] AUTO REPLY`*',
            rows: [
              {
                title: '   3.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'autoreply true',
              },
              {
                title: '   3.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'autoreply false',
              },
            ],
          },
          {
            title: '*`[4] AUTO VOICE`*',
            rows: [
              {
                title: '   4.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'autovoice true',
              },
              {
                title: '   4.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'autovoice false',
              },
            ],
          },
          {
            title: '*`[5] AUTO STICKER`*',
            rows: [
              {
                title: '   5.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'autosticker true',
              },
              {
                title: '   5.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'autosticker false',
              },
            ],
          },
          {
            title: '*`[6] ANTI BAD`*',
            rows: [
              {
                title: '   6.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'antibad true',
              },
              {
                title: '   6.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'antibad false',
              },
            ],
          },
          {
            title: '*`[7] ANTI LINK`*',
            rows: [
              {
                title: '   7.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'antilink true',
              },
              {
                title: '   7.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'antilink false',
              },
            ],
          },
          {
            title: '*`[8] ANTI BOT`*',
            rows: [
              {
                title: '   8.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'antibot true',
              },
              {
                title: '   8.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'antibot false',
              },
            ],
          },
          {
            title: '*`[9] ALLWAYS OFFLINE`*',
            rows: [
              {
                title: '   9.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'alwaysoffline true',
              },
              {
                title: '   9.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'alwaysoffline false',
              },
            ],
          },
          {
            title: '*`[10] READ COMMAND`*',
            rows: [
              {
                title: '   10.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'readcommand true',
              },
              {
                title: '   10.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'readcommand false',
              },
            ],
          },
          {
            title: '*`[11] RECORDING`*',
            rows: [
              {
                title: '   11.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'recording true',
              },
              {
                title: '   11.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'recording false',
              },
            ],
          },
          {
            title: '*`[12] AUTO REACT`*',
            rows: [
              {
                title: '   12.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'autoreact true',
              },
              {
                title: '   12.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'autoreact false',
              },
            ],
          },
          {
            title: '*`[13] BAD NO BLOCK`*',
            rows: [
              {
                title: '   13.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'badno true',
              },
              {
                title: '   13.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'badno false',
              },
            ],
          },
          {
            title: '*`[13] AI CHAT`*',
            rows: [
              {
                title: '   14.1',
                description: '*True \uD83D\uDD11*',
                rowId: _0x52c60b + 'aichat true',
              },
              {
                title: '   14.2',
                description: '*False \uD83D\uDD12*',
                rowId: _0x52c60b + 'aichat false',
              },
            ],
          },
        ],
        _0x2683ad = {
          text: '*\u300C SETTING PANEL \u300D*',
          footer: '> *POWERED QUEEN ISHU MD*',
          title: '',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x51be77,
        }
      const _0xd550b6 = _0x2683ad,
        _0x3cac7e = {}
      return (
        (_0x3cac7e.quoted = _0x360fc6),
        await _0x18cd44.replyList(_0x5f55dd, _0xd550b6, _0x3cac7e)
      )
    } catch (_0x17cae8) {
      console.log(_0x17cae8)
      _0x1352fb('*ERROR !!*')
    }
  }
)
const _0xc54246 = {}
_0xc54246.pattern = 'prefix'
_0xc54246.dontAddCommandList = true
_0xc54246.filename = __filename
cmd(
  _0xc54246,
  async (
    _0x524fe3,
    _0x30411f,
    _0x269b76,
    {
      from: _0x3d47e6,
      quoted: _0x56176c,
      body: _0x4023fa,
      isCmd: _0x41999a,
      command: _0x5bf42e,
      args: _0x8129ed,
      q: _0x3ad804,
      isGroup: _0x126913,
      sender: _0x55e767,
      senderNumber: _0x1573f4,
      botNumber2: _0x50f91f,
      botNumber: _0x4c3563,
      pushname: _0x49fcaa,
      isMe: _0x530baf,
      isOwner: _0x265a34,
      groupMetadata: _0x135182,
      groupName: _0x194ecf,
      participants: _0xb5fe70,
      groupAdmins: _0x587a22,
      isBotAdmins: _0x3981ff,
      isAdmins: _0x633952,
      reply: _0x1652b,
    }
  ) => {
    try {
      if (!_0x530baf) {
        return await _0x1652b('*Only Owner \uD83D\uDEAB*')
      }
      if (config.PREFIX == _0x3ad804) {
        return _0x1652b('already on ')
      }
      return (
        await input_set('PREFIX', _0x3ad804),
        _0x1652b('*PREFIX turned ' + _0x3ad804 + '*')
      )
    } catch (_0x235ed4) {
      _0x1652b('*Error !!*'), l(_0x235ed4)
    }
  }
)
const _0x4f23ca = {}
_0x4f23ca.pattern = 'alivemessage'
_0x4f23ca.dontAddCommandList = true
_0x4f23ca.filename = __filename
cmd(
  _0x4f23ca,
  async (
    _0xc69e4b,
    _0x55935d,
    _0xadf5b9,
    {
      from: _0x572370,
      quoted: _0x2b6923,
      body: _0x1050bd,
      isCmd: _0x159259,
      command: _0x32ec7e,
      args: _0x2b5147,
      q: _0x5cba71,
      isGroup: _0x311276,
      sender: _0x8105cd,
      senderNumber: _0xb3cea9,
      botNumber2: _0x15d589,
      botNumber: _0x2c68a8,
      pushname: _0x29eebf,
      isMe: _0x433ac6,
      isOwner: _0x15e4e,
      groupMetadata: _0x3d46d2,
      groupName: _0x4515ca,
      participants: _0x284fa3,
      groupAdmins: _0x42f2c3,
      isBotAdmins: _0x4897d6,
      isAdmins: _0x5250c4,
      reply: _0x32f32c,
    }
  ) => {
    try {
      if (!_0x433ac6) {
        return await _0x32f32c('*Only Owner \uD83D\uDEAB*')
      }
      if (config.ALIVE_MSG == _0x5cba71) {
        return _0x32f32c('already on ')
      }
      return (
        await input_set('ALIVE_MSG', _0x5cba71),
        _0x32f32c('*ALIVE_MSG turned ' + _0x5cba71 + '*')
      )
    } catch (_0x41339f) {
      _0x32f32c('*Error !!*'), l(_0x41339f)
    }
  }
)
const _0x373f87 = {}
_0x373f87.pattern = 'mode'
_0x373f87.dontAddCommandList = true
_0x373f87.filename = __filename
cmd(
  _0x373f87,
  async (
    _0x2ddfbf,
    _0x3966d0,
    _0x22d28b,
    {
      from: _0x369e8d,
      quoted: _0xd95809,
      body: _0x4efe8e,
      isCmd: _0xf96c2b,
      command: _0x3f8521,
      args: _0x5ba40a,
      q: _0x4f2a35,
      isGroup: _0x11cbbf,
      sender: _0xfabb8d,
      senderNumber: _0x104965,
      botNumber2: _0x45a2fc,
      botNumber: _0xfd36e9,
      pushname: _0x26f242,
      isMe: _0x180629,
      isOwner: _0x14a917,
      groupMetadata: _0x128b66,
      groupName: _0x350edb,
      participants: _0x129d20,
      groupAdmins: _0x52e0f8,
      isBotAdmins: _0x75aeaa,
      isAdmins: _0x2d7f51,
      reply: _0x49da2b,
    }
  ) => {
    try {
      if (!_0x180629) {
        return await _0x49da2b('*Only Owner \uD83D\uDEAB*')
      }
      if (config.MODE == _0x4f2a35) {
        return _0x49da2b('already on ')
      }
      return (
        await input_set('MODE', _0x4f2a35),
        _0x49da2b('*MODE turned ' + _0x4f2a35 + '*')
      )
    } catch (_0x522c5c) {
      _0x49da2b('*Error !!*'), l(_0x522c5c)
    }
  }
)
const _0x1f3906 = {}
_0x1f3906.pattern = 'autoreply'
_0x1f3906.dontAddCommandList = true
_0x1f3906.filename = __filename
cmd(
  _0x1f3906,
  async (
    _0xcc270d,
    _0x2002db,
    _0x2f8707,
    {
      from: _0x4cff24,
      quoted: _0x3f4cfb,
      body: _0x2a00d0,
      isCmd: _0x5f2da4,
      command: _0x2c9fe8,
      args: _0x4772ca,
      q: _0x16b8f3,
      isGroup: _0x5411ee,
      sender: _0x5582f0,
      senderNumber: _0x40c881,
      botNumber2: _0x5ed2e8,
      botNumber: _0x3c3cc6,
      pushname: _0x23d3c9,
      isMe: _0x4870ea,
      isOwner: _0x227df8,
      groupMetadata: _0x2d9959,
      groupName: _0x424a61,
      participants: _0x13016c,
      groupAdmins: _0x170a3f,
      isBotAdmins: _0x417743,
      isAdmins: _0x33b125,
      reply: _0x1921c6,
    }
  ) => {
    try {
      if (!_0x4870ea) {
        return await _0x1921c6('*Only Owner \uD83D\uDEAB*')
      }
      if (config.AUTO_REPLY == _0x16b8f3) {
        return _0x1921c6('already on ')
      }
      return (
        await input_set('AUTO_REPLY', _0x16b8f3),
        _0x1921c6('*AUTO_REPLY turned ' + _0x16b8f3 + '*')
      )
    } catch (_0x580846) {
      _0x1921c6('*Error !!*'), l(_0x580846)
    }
  }
)
const _0x14a72a = {}
_0x14a72a.pattern = 'autoreadsratus'
_0x14a72a.dontAddCommandList = true
_0x14a72a.filename = __filename
cmd(
  _0x14a72a,
  async (
    _0x409d3d,
    _0x169820,
    _0x2d3894,
    {
      from: _0x3e62f7,
      quoted: _0x12fbe8,
      body: _0x477b2a,
      isCmd: _0x33c6b6,
      command: _0x34cc83,
      args: _0x323543,
      q: _0x51d839,
      isGroup: _0x2ca739,
      sender: _0x24bc9e,
      senderNumber: _0xe8b382,
      botNumber2: _0x4448ef,
      botNumber: _0x54282b,
      pushname: _0x44e8c4,
      isMe: _0x5c7bab,
      isOwner: _0x1bf7f9,
      groupMetadata: _0x5637c3,
      groupName: _0x31ebee,
      participants: _0x5f1fa2,
      groupAdmins: _0x3f1a40,
      isBotAdmins: _0x3f0a10,
      isAdmins: _0x163e24,
      reply: _0xb190d0,
    }
  ) => {
    try {
      if (!_0x5c7bab) {
        return await _0xb190d0('*Only Owner \uD83D\uDEAB*')
      }
      if (config.AUTO_READ_STATUS == _0x51d839) {
        return _0xb190d0('already on ')
      }
      return (
        await input_set('AUTO_READ_STATUS', _0x51d839),
        _0xb190d0('*AUTO_READ_STATUS turned ' + _0x51d839 + '*')
      )
    } catch (_0x34b5b1) {
      _0xb190d0('*Error !!*'), l(_0x34b5b1)
    }
  }
)
const _0x1cc630 = {}
_0x1cc630.pattern = 'autovoice'
_0x1cc630.dontAddCommandList = true
_0x1cc630.filename = __filename
cmd(
  _0x1cc630,
  async (
    _0x4d50aa,
    _0xda90e6,
    _0xdb4178,
    {
      from: _0x443f54,
      quoted: _0x5df50b,
      body: _0x27d355,
      isCmd: _0x1cfdea,
      command: _0x53b7ae,
      args: _0x4496e9,
      q: _0x2dea77,
      isGroup: _0x33687d,
      sender: _0x3c56af,
      senderNumber: _0x53e8be,
      botNumber2: _0x5bdfd4,
      botNumber: _0x1e16e1,
      pushname: _0x5a8bdf,
      isMe: _0x594545,
      isOwner: _0x365a9c,
      groupMetadata: _0x33063d,
      groupName: _0x57c211,
      participants: _0x1bfff4,
      groupAdmins: _0x504b53,
      isBotAdmins: _0x53d78e,
      isAdmins: _0x3849f4,
      reply: _0xf27846,
    }
  ) => {
    try {
      if (!_0x594545) {
        return await _0xf27846('*Only Owner \uD83D\uDEAB*')
      }
      if (config.AUTO_VOICE == _0x2dea77) {
        return _0xf27846('already on ')
      }
      return (
        await input_set('AUTO_VOICE', _0x2dea77),
        _0xf27846('*AUTO_VOICE turned ' + _0x2dea77 + '*')
      )
    } catch (_0x3c07c1) {
      _0xf27846('*Error !!*')
      l(_0x3c07c1)
    }
  }
)
const _0x309d7f = {}
_0x309d7f.pattern = 'autosticker'
_0x309d7f.dontAddCommandList = true
_0x309d7f.filename = __filename
cmd(
  _0x309d7f,
  async (
    _0x2fa69e,
    _0x21a613,
    _0x3a6c43,
    {
      from: _0xa24be1,
      quoted: _0x4aa01d,
      body: _0x487bf3,
      isCmd: _0x5e52cf,
      command: _0xda1d43,
      args: _0x4561a0,
      q: _0x383bdb,
      isGroup: _0x42dc04,
      sender: _0x3e2c28,
      senderNumber: _0x15b9e9,
      botNumber2: _0x5a0f1e,
      botNumber: _0x4d467b,
      pushname: _0x402eb3,
      isMe: _0x2def1f,
      isOwner: _0x1d9f8b,
      groupMetadata: _0x5c1a8a,
      groupName: _0x1c47f1,
      participants: _0x5a6122,
      groupAdmins: _0x21a2e5,
      isBotAdmins: _0x2b2123,
      isAdmins: _0x9d52d1,
      reply: _0x54173d,
    }
  ) => {
    try {
      if (!_0x2def1f) {
        return await _0x54173d('*Only Owner \uD83D\uDEAB*')
      }
      if (config.AUTO_STICKER == _0x383bdb) {
        return _0x54173d('already on ')
      }
      return (
        await input_set('AUTO_STICKER', _0x383bdb),
        _0x54173d('*AUTO_STICKER turned ' + _0x383bdb + '*')
      )
    } catch (_0x53193f) {
      _0x54173d('*Error !!*')
      l(_0x53193f)
    }
  }
)
const _0x1f1dcd = {}
_0x1f1dcd.pattern = 'antibad'
_0x1f1dcd.dontAddCommandList = true
_0x1f1dcd.filename = __filename
cmd(
  _0x1f1dcd,
  async (
    _0x5693e4,
    _0x2ddc40,
    _0x4e1321,
    {
      from: _0x2f8ae0,
      quoted: _0x581aaf,
      body: _0x539960,
      isCmd: _0x3e40bb,
      command: _0x5e6aed,
      args: _0x4a97ce,
      q: _0x628d28,
      isGroup: _0x4d4040,
      sender: _0x482455,
      senderNumber: _0x5f5856,
      botNumber2: _0x1ec716,
      botNumber: _0x54a906,
      pushname: _0x5afac2,
      isMe: _0x2cbf4c,
      isOwner: _0x23bcc4,
      groupMetadata: _0x5aec3c,
      groupName: _0x188533,
      participants: _0x10b0ef,
      groupAdmins: _0x30b45b,
      isBotAdmins: _0x2f54d1,
      isAdmins: _0x51644a,
      reply: _0x359641,
    }
  ) => {
    try {
      if (!_0x2cbf4c) {
        return await _0x359641('*Only Owner \uD83D\uDEAB*')
      }
      if (config.ANTI_BAD == _0x628d28) {
        return _0x359641('already on ')
      }
      return (
        await input_set('ANTI_BAD', _0x628d28),
        _0x359641('*ANTI_BAD turned ' + _0x628d28 + '*')
      )
    } catch (_0x4af928) {
      _0x359641('*Error !!*')
      l(_0x4af928)
    }
  }
)
const _0xfe5e5b = {}
_0xfe5e5b.pattern = 'antilink'
_0xfe5e5b.dontAddCommandList = true
_0xfe5e5b.filename = __filename
cmd(
  _0xfe5e5b,
  async (
    _0xcd70e6,
    _0x38d3d0,
    _0x2e529a,
    {
      from: _0x2b8c5c,
      quoted: _0x2a27ba,
      body: _0x307ef1,
      isCmd: _0x7238be,
      command: _0x63655e,
      args: _0x4f2914,
      q: _0x161f9f,
      isGroup: _0x2d5889,
      sender: _0x3084d0,
      senderNumber: _0x3c306e,
      botNumber2: _0x1d8ae4,
      botNumber: _0x6cedf9,
      pushname: _0x561128,
      isMe: _0xd99bef,
      isOwner: _0x156183,
      groupMetadata: _0x49f113,
      groupName: _0x320e25,
      participants: _0x5acc36,
      groupAdmins: _0x59c5c2,
      isBotAdmins: _0x11caed,
      isAdmins: _0x29e406,
      reply: _0x13aa92,
    }
  ) => {
    try {
      if (!_0xd99bef) {
        return await _0x13aa92('*Only Owner \uD83D\uDEAB*')
      }
      if (config.ANTI_LINK == _0x161f9f) {
        return _0x13aa92('already on ')
      }
      return (
        await input_set('ANTI_LINK', _0x161f9f),
        _0x13aa92('*ANTI_LINK turned ' + _0x161f9f + '*')
      )
    } catch (_0xdb4ea) {
      _0x13aa92('*Error !!*'), l(_0xdb4ea)
    }
  }
)
const _0x5b4f3f = {}
_0x5b4f3f.pattern = 'antibot'
_0x5b4f3f.dontAddCommandList = true
_0x5b4f3f.filename = __filename
cmd(
  _0x5b4f3f,
  async (
    _0x23aa0d,
    _0x47bc9b,
    _0x4a2fef,
    {
      from: _0x545fe9,
      quoted: _0x538f5b,
      body: _0x942022,
      isCmd: _0x29973f,
      command: _0x506523,
      args: _0xea36b4,
      q: _0x29fe7c,
      isGroup: _0x6e1111,
      sender: _0x363e2a,
      senderNumber: _0x5066e1,
      botNumber2: _0x4e7fd2,
      botNumber: _0x158399,
      pushname: _0x548007,
      isMe: _0x32acf3,
      isOwner: _0x4c9589,
      groupMetadata: _0x5155ea,
      groupName: _0x1fee10,
      participants: _0x457b2c,
      groupAdmins: _0x17e3fa,
      isBotAdmins: _0x41a8ba,
      isAdmins: _0x3551bd,
      reply: _0x23108a,
    }
  ) => {
    try {
      if (!_0x32acf3) {
        return await _0x23108a('*Only Owner \uD83D\uDEAB*')
      }
      if (config.ANTI_BOT == _0x29fe7c) {
        return _0x23108a('already on ')
      }
      return (
        await input_set('ANTI_BOT', _0x29fe7c),
        _0x23108a('*ANTI_BOT turned ' + _0x29fe7c + '*')
      )
    } catch (_0x2a7334) {
      _0x23108a('*Error !!*'), l(_0x2a7334)
    }
  }
)
const _0x4bae27 = {}
_0x4bae27.pattern = 'alwaysoffline'
_0x4bae27.dontAddCommandList = true
_0x4bae27.filename = __filename
cmd(
  _0x4bae27,
  async (
    _0x56272e,
    _0x5081c6,
    _0x5582f5,
    {
      from: _0x5543d5,
      quoted: _0x1cb2f5,
      body: _0xb76af5,
      isCmd: _0x441406,
      command: _0x2fc292,
      args: _0x52ca12,
      q: _0x45cae2,
      isGroup: _0x109cf5,
      sender: _0x4c9d87,
      senderNumber: _0x2e6b1e,
      botNumber2: _0x38142d,
      botNumber: _0x2a38fd,
      pushname: _0xb508ca,
      isMe: _0x3c2cb4,
      isOwner: _0x25aaca,
      groupMetadata: _0x476a4d,
      groupName: _0x538bd3,
      participants: _0x5c62cb,
      groupAdmins: _0x374432,
      isBotAdmins: _0x242524,
      isAdmins: _0x292892,
      reply: _0x2ecab6,
    }
  ) => {
    try {
      if (!_0x3c2cb4) {
        return await _0x2ecab6('*Only Owner \uD83D\uDEAB*')
      }
      if (config.ALLWAYS_OFFLINE == _0x45cae2) {
        return _0x2ecab6('already on ')
      }
      return (
        await input_set('ALLWAYS_OFFLINE', _0x45cae2),
        _0x2ecab6('*ALLWAYS_OFFLINE turned ' + _0x45cae2 + '*')
      )
    } catch (_0x2db7c8) {
      _0x2ecab6('*Error !!*'), l(_0x2db7c8)
    }
  }
)
const _0x241163 = {}
_0x241163.pattern = 'readcommand'
_0x241163.dontAddCommandList = true
_0x241163.filename = __filename
cmd(
  _0x241163,
  async (
    _0x4f538e,
    _0x2244ee,
    _0x209503,
    {
      from: _0x3be3a3,
      quoted: _0x2d54a1,
      body: _0x4e55ae,
      isCmd: _0x43847e,
      command: _0x579662,
      args: _0x11d49b,
      q: _0x3efb27,
      isGroup: _0x26c2d5,
      sender: _0x53da79,
      senderNumber: _0x1daf23,
      botNumber2: _0x4a5da4,
      botNumber: _0x5e5b98,
      pushname: _0xe77bf0,
      isMe: _0x146535,
      isOwner: _0x4a0478,
      groupMetadata: _0xdcd91c,
      groupName: _0x211553,
      participants: _0x9331c4,
      groupAdmins: _0x34bdc1,
      isBotAdmins: _0x4fe38e,
      isAdmins: _0x2fcbc2,
      reply: _0x3f9ddc,
    }
  ) => {
    try {
      if (!_0x146535) {
        return await _0x3f9ddc('*Only Owner \uD83D\uDEAB*')
      }
      if (config.READ_CMD == _0x3efb27) {
        return _0x3f9ddc('already on ')
      }
      return (
        await input_set('READ_CMD', _0x3efb27),
        _0x3f9ddc('*READ_CMD turned ' + _0x3efb27 + '*')
      )
    } catch (_0x5bca92) {
      _0x3f9ddc('*Error !!*'), l(_0x5bca92)
    }
  }
)
const _0x4dbba9 = {}
_0x4dbba9.pattern = 'autoreact'
_0x4dbba9.dontAddCommandList = true
_0x4dbba9.filename = __filename
cmd(
  _0x4dbba9,
  async (
    _0xb4d6da,
    _0x4c7454,
    _0x178e86,
    {
      from: _0x463690,
      quoted: _0x31b7ae,
      body: _0x38c554,
      isCmd: _0x527134,
      command: _0x17f815,
      args: _0x11f467,
      q: _0x31ce85,
      isGroup: _0x3945a1,
      sender: _0x3f5658,
      senderNumber: _0x426575,
      botNumber2: _0x434ca7,
      botNumber: _0x526dce,
      pushname: _0x314051,
      isMe: _0x7b51e6,
      isOwner: _0x170df3,
      groupMetadata: _0x1392b7,
      groupName: _0x4da763,
      participants: _0x287085,
      groupAdmins: _0x2674ad,
      isBotAdmins: _0x25f1a4,
      isAdmins: _0x3cc877,
      reply: _0x104d30,
    }
  ) => {
    try {
      if (!_0x7b51e6) {
        return await _0x104d30('*Only Owner \uD83D\uDEAB*')
      }
      if (config.AUTO_REACT == _0x31ce85) {
        return _0x104d30('already on ')
      }
      return (
        await input_set('AUTO_REACT', _0x31ce85),
        _0x104d30('*AUTO_REACT turned ' + _0x31ce85 + '*')
      )
    } catch (_0x470604) {
      _0x104d30('*Error !!*'), l(_0x470604)
    }
  }
)
const _0x58a341 = {}
_0x58a341.pattern = 'recording'
_0x58a341.dontAddCommandList = true
_0x58a341.filename = __filename
cmd(
  _0x58a341,
  async (
    _0x3d7112,
    _0x1ceeb1,
    _0x2aaaa0,
    {
      from: _0x216302,
      quoted: _0x1c918a,
      body: _0x45c53e,
      isCmd: _0x47593a,
      command: _0x4fdafa,
      args: _0x9d3788,
      q: _0x3627ee,
      isGroup: _0x259573,
      sender: _0x43a824,
      senderNumber: _0x52503c,
      botNumber2: _0x20ed75,
      botNumber: _0x1f61a3,
      pushname: _0x1ac862,
      isMe: _0x4bc501,
      isOwner: _0x45b8bf,
      groupMetadata: _0x392e96,
      groupName: _0x4d641b,
      participants: _0xa8b688,
      groupAdmins: _0x29ac03,
      isBotAdmins: _0x18438c,
      isAdmins: _0x52639d,
      reply: _0x46ac4f,
    }
  ) => {
    try {
      if (!_0x4bc501) {
        return await _0x46ac4f('*Only Owner \uD83D\uDEAB*')
      }
      if (config.RECORDING == _0x3627ee) {
        return _0x46ac4f('already on ')
      }
      return (
        await input_set('RECORDING', _0x3627ee),
        _0x46ac4f('*RECORDING turned ' + _0x3627ee + '*')
      )
    } catch (_0x52a3b5) {
      _0x46ac4f('*Error !!*')
      l(_0x52a3b5)
    }
  }
)
const _0x4bc9a2 = {}
_0x4bc9a2.pattern = 'newsjid'
_0x4bc9a2.dontAddCommandList = true
_0x4bc9a2.filename = __filename
cmd(
  _0x4bc9a2,
  async (
    _0x3c40d3,
    _0x3875af,
    _0x3447d9,
    {
      from: _0x5098fa,
      quoted: _0x3b86c2,
      body: _0x183c72,
      isCmd: _0x50b6c3,
      command: _0x46120d,
      args: _0x153336,
      q: _0x34271e,
      isGroup: _0x3ce7e9,
      sender: _0x737fd,
      senderNumber: _0x2fc26c,
      botNumber2: _0x4623b6,
      botNumber: _0x2ee3c3,
      pushname: _0x4b5384,
      isMe: _0x1f1821,
      isOwner: _0x38c4ed,
      groupMetadata: _0x1599ba,
      groupName: _0xf54585,
      participants: _0x4b05c4,
      groupAdmins: _0x350315,
      isBotAdmins: _0x10a8e0,
      isAdmins: _0x49d931,
      reply: _0x34a128,
    }
  ) => {
    try {
      if (!_0x1f1821) {
        return await _0x34a128('*Only Owner \uD83D\uDEAB*')
      }
      if (config.NEWS_JID == _0x34271e) {
        return _0x34a128('already on ')
      }
      return (
        await input_set('NEWS_JID', _0x34271e),
        _0x34a128('*NEWS_JID turned ' + _0x34271e + '*')
      )
    } catch (_0x5bc583) {
      _0x34a128('*Error !!*')
      l(_0x5bc583)
    }
  }
)
const _0x228c58 = {}
_0x228c58.pattern = 'aichat'
_0x228c58.dontAddCommandList = true
_0x228c58.filename = __filename
cmd(
  _0x228c58,
  async (
    _0xccb8bc,
    _0x509aa6,
    _0x3943bc,
    {
      from: _0x456543,
      quoted: _0x2b5b22,
      body: _0x390733,
      isCmd: _0x37013b,
      command: _0x5953f8,
      args: _0x50a425,
      q: _0x56f8d7,
      isGroup: _0x2aa065,
      sender: _0x306c18,
      senderNumber: _0x1367a2,
      botNumber2: _0x2b65a8,
      botNumber: _0x4b95f5,
      pushname: _0x48629b,
      isMe: _0x315004,
      isOwner: _0x508ddd,
      groupMetadata: _0x418ed4,
      groupName: _0x189aee,
      participants: _0x222916,
      groupAdmins: _0x48f56e,
      isBotAdmins: _0x24e6d7,
      isAdmins: _0x3aa040,
      reply: _0x2d0305,
    }
  ) => {
    try {
      if (!_0x315004) {
        return await _0x2d0305('*Only Owner \uD83D\uDEAB*')
      }
      if (config.AI_CHAT == _0x56f8d7) {
        return _0x2d0305('already on ')
      }
      return (
        await input_set('AI_CHAT', _0x56f8d7),
        _0x2d0305('*AI_CHAT turned ' + _0x56f8d7 + '*')
      )
    } catch (_0x1a5148) {
      _0x2d0305('*Error !!*')
      l(_0x1a5148)
    }
  }
)
const _0x23f638 = {}
_0x23f638.pattern = 'badno'
_0x23f638.dontAddCommandList = true
_0x23f638.filename = __filename
cmd(
  _0x23f638,
  async (
    _0x2226ff,
    _0x3a8463,
    _0x56f9a2,
    {
      from: _0x568125,
      quoted: _0x1fc8ea,
      body: _0x1c6134,
      isCmd: _0x3e8129,
      command: _0x388ef4,
      args: _0x4fd394,
      q: _0x265743,
      isGroup: _0x1551f2,
      sender: _0x5a2bf2,
      senderNumber: _0x1ff1c8,
      botNumber2: _0x57924d,
      botNumber: _0x2b45c9,
      pushname: _0x2292dd,
      isMe: _0x567461,
      isOwner: _0x43897f,
      groupMetadata: _0x36411f,
      groupName: _0x507c41,
      participants: _0x524e64,
      groupAdmins: _0x37ab9d,
      isBotAdmins: _0x51db81,
      isAdmins: _0x3e5c35,
      reply: _0x976173,
    }
  ) => {
    try {
      if (!_0x567461) {
        return await _0x976173('*Only Owner \uD83D\uDEAB*')
      }
      if (config.BAD_NO_BLOCK == _0x265743) {
        return _0x976173('already on ')
      }
      return (
        await input_set('BAD_NO_BLOCK', _0x265743),
        _0x976173('*BAD_NO_BLOCK turned ' + _0x265743 + '*')
      )
    } catch (_0x3b0e08) {
      _0x976173('*Error !!*')
      l(_0x3b0e08)
    }
  }
)
function _0x402540(_0x1ae675) {
  function _0x1ce69f(_0x110889) {
    if (typeof _0x110889 === 'string') {
      return function (_0x451cf3) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x110889 / _0x110889).length !== 1 || _0x110889 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x1ce69f(++_0x110889)
  }
  try {
    if (_0x1ae675) {
      return _0x1ce69f
    } else {
      _0x1ce69f(0)
    }
  } catch (_0x5c287f) {}
}
