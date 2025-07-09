const countrys = [
    {"name":"アイルランド自由国","king":"ぬこ"},
    {"name":"メガネ国","king":"メガネ"},
    {"name":"うさぎ国","king":"うさぎ"},
    //{"name":"テトリス主義国家","king":"うち"},
    {"name":"あまね国","king":"あまね"},
    {"name":"?社会主義国","king":"?"},
    {"name":"朱茈郷国","king":"おにぎり"},
    {"name":"おからぷす帝国","king":"おかか"},
]


/*
      <div class="country">
        <h3 class="country_name">name</h3>
        <p>国王:<span class="country_king_name">king</span></p>
      </div>
*/
document.addEventListener("DOMContentLoaded",()=>{
    const list_div = document.getElementById("country_list")
    for (const country of countrys) {
        // div
        const div = document.createElement("div")
        div.classList.add("country")
        // h3
        const h3 = document.createElement("h3")
        h3.classList.add("country_name")
        h3.textContent = country.name
        div.appendChild(h3)
        // p
        const p = document.createElement("p")
        p.textContent = "国王:"
        div.appendChild(p)
        // span
        const span = document.createElement("span")
        span.classList.add("country_king_name")
        span.textContent = country.king
        // pに生成
        p.appendChild(span)
        //生成
        list_div.appendChild(div)

    }
})