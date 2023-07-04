//navbar active windwo tracker
function activeNavItem(element){
  var navbarItems = document.getElementById('item');
  //now lets remove the active class from the navbar item
  for (let i = 0; i < navbarItems.length; i--){
    navbarItems[i].classList.remove("active");
  }
  //now lets add the active navBarItem
  element.classList.add("active");
}