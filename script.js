/* ==========================================
   Aidil Portfolio
   Version 2.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initNavbar();
    initScrollReveal();
    initCounter();
    initSmoothScroll();
    initActiveMenu();

});

/* ==========================================
LOADER
========================================== */

function initLoader(){

    const loader = document.getElementById("loader");

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.visibility="hidden";

        },2200);

    });

}

/* ==========================================
NAVBAR SCROLL
========================================== */

function initNavbar(){

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            header.style.background="rgba(5,8,22,.82)";

            header.style.backdropFilter="blur(18px)";

            header.style.borderBottom="1px solid rgba(255,255,255,.08)";

        }

        else{

            header.style.background="rgba(5,8,22,.45)";

            header.style.borderBottom="1px solid rgba(255,255,255,.04)";

        }

    });

}

/* ==========================================
MOBILE MENU
========================================== */

const menuButton=document.querySelector(".menu-button");

const navMenu=document.querySelector(".nav-menu");

if(menuButton){

menuButton.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

}

/* ==========================================
SMOOTH SCROLL
========================================== */

function initSmoothScroll(){

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

}

/* ==========================================
ACTIVE MENU
========================================== */

function initActiveMenu(){

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

}

/* ==========================================
SCROLL REVEAL
========================================== */

function initScrollReveal(){

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".fade-up,.slide-left,.slide-right,.scale-up"

).forEach(el=>{

observer.observe(el);

});

}

/* ==========================================
COUNTER
========================================== */

function initCounter(){

const counters=document.querySelectorAll("[data-count]");

const speed=200;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.count;

let count=0;

const update=()=>{

const inc=Math.ceil(target/speed);

count+=inc;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});

}

/* ==========================================
   HERO TYPING EFFECT
========================================== */

function initTypingEffect(){

    const element=document.querySelector(".hero h2");

    if(!element) return;

    const words=[
        "Warehouse Team Leader",
        "Supply Chain Professional",
        "Inventory Specialist",
        "Data Analytics Enthusiast"
    ];

    let wordIndex=0;
    let charIndex=0;
    let deleting=false;

    function type(){

        const current=words[wordIndex];

        if(!deleting){

            element.textContent=current.substring(0,charIndex++);

            if(charIndex>current.length){

                deleting=true;

                setTimeout(type,1800);

                return;

            }

        }else{

            element.textContent=current.substring(0,charIndex--);

            if(charIndex===0){

                deleting=false;

                wordIndex=(wordIndex+1)%words.length;

            }

        }

        setTimeout(type,deleting?40:80);

    }

    type();

}


/* ==========================================
   MOUSE GLOW
========================================== */

function initMouseGlow(){

    const glow=document.createElement("div");

    glow.className="cursor-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove",(e)=>{

        glow.style.left=e.clientX+"px";

        glow.style.top=e.clientY+"px";

    });

}


/* ==========================================
   FLOATING PARALLAX
========================================== */

function initParallax(){

    const left=document.querySelector(".glow-left");

    const right=document.querySelector(".glow-right");

    window.addEventListener("mousemove",(e)=>{

        const x=e.clientX/window.innerWidth;

        const y=e.clientY/window.innerHeight;

        if(left){

            left.style.transform=

            `translate(${x*-40}px,${y*-30}px)`;

        }

        if(right){

            right.style.transform=

            `translate(${x*40}px,${y*30}px)`;

        }

    });

}


/* ==========================================
   CARD HOVER
========================================== */

function initTiltCards(){

    const cards=document.querySelectorAll(

        ".stats-card,.skill-card,.project-card,.experience-card,.certificate-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateX=((y/rect.height)-0.5)*10;

            const rotateY=((x/rect.width)-0.5)*-10;

            card.style.transform=

            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}


/* ==========================================
   SCROLL TO TOP
========================================== */

function initScrollTop(){

    const button=document.createElement("button");

    button.className="scroll-top";

    button.innerHTML="↑";

    document.body.appendChild(button);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/* ==========================================
   PROGRESS BAR
========================================== */

function initProgressBar(){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const progress=

                entry.target.querySelector(".skill-progress");

                if(progress){

                    progress.style.width=

                    progress.dataset.width;

                }

            }

        });

    });

    document.querySelectorAll(".skill-card").forEach(card=>{

        observer.observe(card);

    });

}


/* ==========================================
   CALL FUNCTIONS
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    initTypingEffect();

    initMouseGlow();

    initParallax();

    initTiltCards();

    initScrollTop();

    initProgressBar();

});
