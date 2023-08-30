const topAds = document.getElementById('topAds');
const topAdsBtn = document.getElementById('topAdsBtn');
const menuBtn = document.getElementById('menu-sm-btn');
const dropdownContainer = document.getElementById('dropDownContainer');
const dropTriggers = document.getElementsByClassName("dropTrigger");

// event listener for topAds
topAdsBtn.addEventListener("click", ()=>{
    topAds.classList.add('d-none')
})

// animate menu btn
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('menu-btn-active')
})

// show and animate drop downs
for (let i; i<dropTriggers.length; i++){
    dropTriggers[i].addEventListener("mouseover", (event) => {
        dropdownContainer.classList.remove('d-none');
        console.log('s')
    });
}


