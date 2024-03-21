const tumfotolar = document.querySelector(".tumfotolar");

async function getItem(){
    const response = await fetch("assets/json/bottomstories.json");
    const data = await response.json();
    return data; 
}

async function Items(){
    const data = await getItem();
    for (const Item of data) {
        tumfotolar.innerHTML += `
        <div class="fotolar">
            <img src="${Item.photo}" alt="" class="deneme"> 
            <div class="kapsayici">
                <div class="text text-1">
                    <h6>${Item.tarih}</h6>
                    <h3>${Item.title}</h3>
                    <h6>${Item.creator}</h6>
                </div>
                <h2 class="hero-btn">${Item.button} <img src="assets/img/Group 6.png" alt=""></h2>
            </div>
        </div>
        `
    }
}

Items();