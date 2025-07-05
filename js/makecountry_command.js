const CookieManager = {
  set: (name, value, days = 7) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
  },

  get: (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return null;
  },
  delete: (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}
const commands = [
{"command":"money","explanation":"所持金を表示"},
{"command":"setup","explanation":"セットアップ(管理者専用)"},
{"command":"msend<Number><PlayerName>","explanation":"他プレイヤーにお金を送る"},
{"command":"checkchunk","explanation":"現在のチャンクの状態を確認"},
{"command":"cc","explanation":"現在のチャンクの状態を確認"},
{"command":"sethome[HomeName]","explanation":"現在位置にHomeをセット"},
{"command":"home[HomeName]","explanation":"Homeにテレポート"},
{"command":"deletehome<HomeName>","explanation":"Homeを削除"},
{"command":"checkhome","explanation":"Homeの位置を確認"},
{"command":"adminchunk [x][z]","explanation":"チャンクを特別区域に設定(管理者専用)"},
{"command":"adminc [x][z]","explanation":"チャンクを特別区域に設定(管理者専用)"},
{"command":"resetchunk[x][z]","explanation":"チャンクをリセット(管理者専用)"},
{"command":"resetc [x][z]","explanation":"チャンクをリセット(管理者専用)"},
{"command":"buychunk [x][z]","explanation":"現在のチャンクを購入"},
{"command":"buyc[x][z]","explanation":"現在のチャンクを購入"},
{"command":"sellchunk[x][z]","explanation":"現在のチャンクを売却"},
{"command":"sellc [x][z]","explanation":"現在のチャンクを売却"},
{"command":"makecountry","explanation":"新しい国を作成"},
{"command":"mc","explanation":"新しい国を作成"},
{"command":"settingcountry","explanation":"国の設定を変更"},
{"command":"sc","explanation":"国の設定を変更"},
{"command":"leavecountry","explanation":"国から離脱"},
{"command":"kill","explanation":"自身をkill"},
{"command":"countrylist","explanation":"国の一覧を表示"},
{"command":"cl","explanation":"国の一覧を表示"},
{"command":"al","explanation":"同盟国リストを確認します"},
{"command":"joincountry","explanation":"国に参加"},
{"command":"jc","explanation":"国に参加"},
{"command":"chome","explanation":"自国のHomeni"},
{"command":"menu","explanation":"メニューを開きます"},
{"command":"jobs","explanation":"職業メニューを表示します"},
{"command":"playermarket","explanation":"プレイヤーマーケットを開きます"},
{"command":"pm","explanation":"プレイヤーマーケットを開きます"},
{"command":"shop","explanation":"SHOPを開きます"},
{"command":"tpa[PlayerName]","explanation":"テレポートメニューを開きます"},
{"command":"camera","explanation":"視点の固定を切り替えます"},
{"command":"map","explanation":"プレイヤー周辺のチャンクの状況を確認します"},
{"command":"invade ","explanation":"現在のチャンクを侵略します"},
{"command":"cr","explanation":"アイテムにコピーライトを付けます"},
{"command":"lc","explanation":"ローカルチャットへ切り替え"},
{"command":"g","explanation":"ジェネラルチャットへ切り替え"},
{"command":"cchat ","explanation":"国内チャットへ切り替え"},
{"command":"ac","explanation":"同盟チャットへ切り替え"},
{"command":"plot","explanation":"現在のチャンクのプロットメニューを開きます"},
]
document.addEventListener("DOMContentLoaded",()=>{
    let favorite = CookieManager.get("favorite_cmd") ?? []
    const cmdiv = document.getElementById("commands")
    for (const command of commands) {
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        h3.textContent = command.command
        div.appendChild(h3)
        const p = document.createElement("p")
        p.textContent = command.explanation
        div.appendChild(p)
        cmdiv.appendChild(div)
    }

})