//==============================================zooming in feature================================================================
//selectors
const text = document.querySelector('.section-content');
const image = document.querySelector('.section-image');

window.addEventListener('scroll', appearOnScroll);

function appearOnScroll(){
  console.log('working')
  let textPosition = text.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.5;
  if(windowHeight>textPosition){
    text.classList.remove('push-left');
    image.classList.remove('push-right');
  }else{
    text.classList.add('push-left');
    image.classList.add('push-right');
  }
}
appearOnScroll();