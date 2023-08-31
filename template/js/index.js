const topAds = document.getElementById('topAds');
const topAdsBtn = document.getElementById('topAdsBtn');
const menuBtn = document.getElementById('menu-sm-btn');
const dropdownContainer = document.getElementById('dropDownContainer');
const dropTriggers = document.querySelectorAll(".dropTrigger");

// event listener for topAds
topAdsBtn.addEventListener("click", ()=>{
    topAds.classList.add('d-none')
})

// animate menu btn
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('menu-btn-active')
})

// show and animate drop downs
dropTriggers.forEach(el => {
    let xRight = el.offsetLeft;
    el.addEventListener('mouseover',()=>{
        dropdownContainer.style.left= `${xRight}px`;
    })
    console.log(xRight);
})



