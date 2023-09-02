const topAds = document.getElementById('topAds');
const topAdsBtn = document.getElementById('topAdsBtn');
const menuBtn = document.getElementById('menu-sm-btn');
const dropdownContainer = document.getElementById('dropDownContainer');
const dropTriggers = document.querySelectorAll(".dropTrigger");
const middleCircle = document.querySelector('#middle-circle');
const textPhoneHeader = document.querySelector('#text-phone-header');
const textPhoneBody = document.querySelector('#text-phone-body');
let counter = 0;

// data for phone messages
const data = [
    {
        letter: 'S',
        messageName: 'سان استار',
        messageText: 'پيج رسمي سان استار در ايران\n' +
            'instagram.com/sunstariran\n' +
            '+Follow Us'
    },
    {
        letter: 'M',
        messageName: 'چرم مشهد',
        messageText: 'جناب آقاي زين العابدين نجار صادقي از خريد شما متشكريم.\n' +
            'چرم مشهد تلفن امور مشتركين:\n' +
            '021-22012xxx'
    }
]

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
})

// animating the phone content
setInterval(()=>{
    middleCircle.classList.add('fadeOut');
    textPhoneHeader.classList.add('fadeOut');
    textPhoneBody.classList.add('fadeOut');
    setTimeout(()=>{
        if (counter < data.length){
            middleCircle.innerHTML = data[counter].letter;
            textPhoneHeader.innerHTML = data[counter].messageName;
            textPhoneBody.innerHTML = data[counter].messageText;
            counter++;
        }else {
            middleCircle.innerHTML = data[0].letter;
            textPhoneHeader.innerHTML = data[0].messageName;
            textPhoneBody.innerHTML = data[0].messageText;
            counter = 1;
        }
        middleCircle.classList.remove('fadeOut');
        textPhoneHeader.classList.remove('fadeOut');
        textPhoneBody.classList.remove('fadeOut');
        middleCircle.classList.add('fadeIn');
        textPhoneHeader.classList.add('fadeIn');
        textPhoneBody.classList.add('fadeIn');
    },200);
    setTimeout(()=>{
        middleCircle.classList.remove('fadeIn');
        textPhoneHeader.classList.remove('fadeIn');
        textPhoneBody.classList.remove('fadeIn');
    },400);
},3000)



