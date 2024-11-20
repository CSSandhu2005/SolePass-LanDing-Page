var toggle ; 
var wrapper1 ;  
var menu ; 
var mainBody = document.querySelector("main") ; 
let dark = false ; 

function reDeclare() { 
    toggle = document.querySelector(".toggle-btn") ; 
    wrapper1 = document.querySelector(".big-wrapper") ; 
    menu = document.querySelector(".hamburger_menu") ; 
}

reDeclare() ; 



function t1animation() {
    dark = !dark ;  
    let clone = wrapper1.cloneNode(true) ; 
    if (dark) { 
        clone.classList.remove("light") ; 
        clone.classList.add("dark") ;  
 
    } else {  
        clone.classList.remove("dark") ; 
        clone.classList.add("light") ;  
    }
    clone.classList.add("copy") ; 
    mainBody.appendChild(clone) ; 

    clone.addEventListener("animationend" , () => {
        wrapper1.remove() ; 
        clone.classList.remove("copy") ; 
        // Re-Assigning Values ; Of The New Copy We Have Created : - 
        reDeclare() ; 
        newEvent() ; 
    })
}

function newEvent() { 
    toggle.addEventListener('click' , t1animation) ; 
    menu.addEventListener("click" , () => {
        wrapper1.classList.toggle("active") ; 
    }) ; 
}


newEvent() ; 
