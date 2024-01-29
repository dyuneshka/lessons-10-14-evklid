window.addEventListener("DOMContentLoaded", function(){

        //header
    document.querySelector("#burger").addEventListener("click", function(){
    document.querySelector("#menu").classList.toggle("is-active")
    })

    document.querySelector("#closer").addEventListener("click", function(){
        document.querySelector("#menu").classList.remove("is-active")
    })

    document.querySelector("#search").addEventListener("click", function(){
        document.querySelector("#open-search").classList.toggle("search--active")
        document.querySelector(".header__nav-lists").classList.toggle("margin")
        document.querySelector(".header__logo").classList.toggle("logo-active")
        document.querySelector("#search").classList.toggle("search-none")
    })

    document.querySelector("#search-closer").addEventListener("click", function(){
        document.querySelector("#open-search").classList.remove("search--active")
        document.querySelector(".header__nav-lists").classList.remove("margin")
        document.querySelector(".header__logo").classList.remove("logo-active")
        document.querySelector("#search").classList.remove("search-none")
    })

    //swiper
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,

        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    });


    //tab

document.querySelectorAll(".staes__item-btn").forEach(function(itemBtn){
    itemBtn.addEventListener("click", function(event){
        const path = event.currentTarget.dataset.path

        document.querySelectorAll(".tab-content").forEach(function(tabContent){
            tabContent.classList.remove("tab-content-active")
        })

        document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
    })
})

    //accodion
    $(".accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });


})