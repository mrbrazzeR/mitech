//carousel 
$('#test__carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        }
    }
})
$('#part__carousel').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            item:3,
            nav:false
        }
    }
})
//search tab
const search=document.querySelector('.menu-searching');
const active=document.querySelector('.searching');
const close=document.querySelector('.search-close');
search.addEventListener("click",function(){
    active.classList.add("active");
})
close.addEventListener('click',function(){
    active.classList.remove("active");
});

//menu show
const mobileShow=document.querySelector(".menu__show").addEventListener("click",function(){
    const mobile=document.querySelector('.mobile__menu');
    mobile.style.visibility="visible";
    mobile.style.width="300px";
});
const mobileClose=document.querySelector(".mobile__top-close").addEventListener("click",function(){
    const mobile=document.querySelector('.mobile__menu');
    mobile.style.visibility="hidden";
    mobile.style.width="0px";
    const droped=document.querySelectorAll(".mobile__sub");
    const animIcon=document.querySelectorAll(".fa-chevron-circle-down");
    animIcon.forEach(function(element){
        element.classList.remove("drop-down");
    });
    droped.forEach(function(element){   
    element.style.maxHeight="0px";
    });
});

//mobile menu
const dropdown=document.querySelectorAll('.mobile__list-item');

dropdown.forEach(function(drop){
    const btn=drop.querySelector(".fa-chevron-circle-down");
    btn.addEventListener("click",function(e){
        const parent=e.currentTarget.parentElement;
        const sub =parent.querySelector('.mobile__sub');
        if(btn.classList.contains("drop-down")){
         sub.style.maxHeight="0px";
        btn.classList.remove("drop-down");
        }
        else{
            const droped=document.querySelectorAll(".mobile__sub");
            const animIcon=document.querySelectorAll(".fa-chevron-circle-down");
            animIcon.forEach(function(element){
                element.classList.remove("drop-down");
            })
            droped.forEach(function(element){   
            element.style.maxHeight="0px";
            
        })
        sub.style.maxHeight="1500px";
        btn.classList.add("drop-down");
        
     }
    });
});

//Accordion tab
const acc=document.querySelectorAll(".accordion");
acc.forEach(function(acr){
     acr.addEventListener("click",function(){
         const panel=this.nextElementSibling;
         if(panel.style.visibility==="visible"){
        const next=document.querySelectorAll(".accordion__panel");
        next.forEach(function(e){
            e.style.maxHeight="0px";
            e.style.visibility="hidden";
        })
    }
    else{
        const next=document.querySelectorAll(".accordion__panel");
        next.forEach(function(e){
            e.style.maxHeight="0px";
            e.style.visibility="hidden";
        })
        panel.style.maxHeight="300px";
        panel.style.visibility="visible";
    }
       
        })
    });
