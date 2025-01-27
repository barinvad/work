const menuBtn = document.querySelector('.menu-btn'); 
const panel = document.querySelector('.right-side-nav'); 
const closeBtn = document.querySelector('.close-btn'); 

menuBtn.addEventListener('click', () => {
    panel.style.display = 'block';
    menuBtn.style.display = 'none'
}); 

closeBtn.addEventListener('click', () => { 
    menuBtn.style.display = 'block'; 
    panel.style.display = 'none'; 
}); 

const firstBtn = document.querySelector('.first-link'); 
const secondBtn = document.querySelector('.second-link'); 
const thirdBtn = document.querySelector('.third-link'); 
const fourthBtn = document.querySelector('.fourth-link'); 
const fifthBtn = document.querySelector('.fifth-link'); 
const sixthBtn = document.querySelector('.sixth-link'); 

firstBtn.addEventListener('mouseover', () => { 
    firstBtn.classList.add('header-nav-hover'); 
}); 
firstBtn.addEventListener('mouseleave', () => { 
    firstBtn.classList.remove('header-nav-hover'); 
}); 

secondBtn.addEventListener('mouseover', () => { 
    secondBtn.classList.add('header-nav-hover'); 
}); 
secondBtn.addEventListener('mouseleave', () => { 
    secondBtn.classList.remove('header-nav-hover'); 
}); 

thirdBtn.addEventListener('mouseover', () => { 
    thirdBtn.classList.add('header-nav-hover'); 
}); 
thirdBtn.addEventListener('mouseleave', () => { 
    thirdBtn.classList.remove('header-nav-hover'); 
}); 

fourthBtn.addEventListener('mouseover', () => { 
    fourthBtn.classList.add('header-nav-hover'); 
}); 
fourthBtn.addEventListener('mouseleave', () => { 
    fourthBtn.classList.remove('header-nav-hover'); 
}); 

fifthBtn.addEventListener('mouseover', () => { 
    fifthBtn.classList.add('header-nav-hover'); 
}); 
fifthBtn.addEventListener('mouseleave', () => { 
    fifthBtn.classList.remove('header-nav-hover'); 
}); 

sixthBtn.addEventListener('mouseover', () => { 
    sixthBtn.classList.add('header-nav-hover'); 
});  
sixthBtn.addEventListener('mouseleave', () => { 
    sixthBtn.classList.remove('header-nav-hover'); 
}); 