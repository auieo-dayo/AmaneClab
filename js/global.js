const sleepAndExecute = (callback, sec) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback(); // 指定された関数を実行
      resolve(); // Promiseを解決
    }, sec * 1000);
  });
};



const color = [["red","green","blue","yellow"],0]
addEventListener("DOMContentLoaded",(event)=>{
setInterval(()=>{
if (color[0].length < color[1]) color[1]=0;
document.getElementById("title").style.color = color[0][color[1]]
color[1]++
},350)


setTimeout(()=>{
    document.getElementById("title").textContent = "あまネギ"
    alert("おや？あまね部の様子が....")
},1000*60*1)

//二個目
setTimeout(() => {
    document.getElementById("title").textContent = "あまねき"
    let flag=false
    setInterval(()=>{
      if (flag) {
        document.getElementById("title").style.scale = 1.2
        flag = false
      } else {
        document.getElementById("title").style.scale = 1
        flag = true
      }
    },500)
    alert("おや？またあまね部の様子が....")


}, 1000*60*2);
setTimeout(()=>{
  const a = ["あ","あま","あまさ","あまさん"]
  let index=0
  setInterval(()=>{
    document.getElementById("title").textContent = a[index]
    index++
    if (index == a.length) index = 0
  },500)
  
},1000*60*3)
})