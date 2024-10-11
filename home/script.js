const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('nxt-btn')];
const preBtn = [...document.querySelectorAll('pre-btn')];

productConteiners.array.forEach((item, i) => {
    let conteinerDimensions = item.betboundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
});