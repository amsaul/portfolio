//navbar active windwo tracker
function activeNavItem(element){
  let navbarItems = document.querySelectorAll('.active');
  //now lets remove the active class from the navbar item
  for (let i = 0; i < navbarItems.length; i++){
    navbarItems[i].classList.remove("active");
  }
  //now lets add the active navBarItem
  element.classList.add("active");
}
activeNavItem();

//==============================================zooming in feature================================================================
// Get all section elements
const sections = document.querySelectorAll('.section');

// Add event listener to window scroll event
window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    // Calculate section visibility
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // Add/remove active class based on visibility
    if (isVisible) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
