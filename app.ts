// 引入类型
import { Client } from "oicq"
import { PMSstart } from "./service/PrivateMessageService"
// 引入包
const { createClient } = require("oicq")

// 创建账号
const bot:Client = createClient(731270812)

//扫码后按回车登录(黑盒，不用理解)
bot.on("system.login.qrcode", function (e: any) {
    process.stdin.once("data", () => {
      this.login()
    })
  }).login()

// 密码登录
// bot.login("yangyimengknbhm1")

// 通过on来进行事件监听
bot.on("system.online", () => console.log("Logged in!"))
 
// 启动不同服务
try {
  PMSstart(bot)
  // GMSstart(bot)
} catch (error) {
  console.log(error)
}