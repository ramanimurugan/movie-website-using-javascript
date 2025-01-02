//navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}





const filterButtons=document.querySelectorAll(".filter-button button");
const filterableCards=document.querySelectorAll(".filterable_cards .card")

const filterCards=e=>{
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

filterableCards.forEach(card=>{
card.classList.add("hide");
if(card.dataset.name===e.target.dataset.name||e.target.dataset.name==="all"){
    card.classList.remove("hide");
}
})

};
filterButtons.forEach(button=>button.addEventListener("click",filterCards));

//celebrity
document.querySelectorAll('.card1').forEach(card => {

  card.addEventListener('mouseenter', () => {
    card.querySelector('.popup').style.opacity = '1';
    card.querySelector('.popup').style.transform = 'scale(1)';
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.popup').style.opacity = '0';
    card.querySelector('.popup').style.transform = 'scale(0.9)';
  });
});

//upcoming
const slider = document.getElementById('slider2');
let index = 0;

const moveSlider = () => {
  index++;
  if (index >= slider.children.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
};

setInterval(moveSlider, 3000); 

//contact form
function showForm(formId) {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => form.classList.remove('active'));

  document.getElementById(formId).classList.add('active');
}
