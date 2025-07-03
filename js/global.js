const color = [["red","green","blue","yellow"],0]
addEventListener("DOMContentLoaded",(event)=>{
setInterval(()=>{
if (color[0].length < color[1]) color[1]=0;
document.getElementById("title").style.color = color[0][color[1]]
color[1]++
},350)
setTimeout(()=>{
    document.getElementById("title").textContent = "あまネギ"
},1000*60*1)
})