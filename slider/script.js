let toogleNav = false;

let clickedButton = function(){

let getSideBar = document.querySelector(".nav-side-bar");
let visibleLi = document.querySelector(".nav-side-bar ul")

   if (toogleNav === false){
      getSideBar.style.width = "300px";
       console.log("this is the end");
       visibleLi.style.visibility="visible";
       visibleLi.style.overflow="visible";
       
       toogleNav =true;
   }
    
    else if (toogleNav === true){
      getSideBar.style.width = "60px";
       console.log("this is the end");
         visibleLi.style.visibility="hidden";
         visibleLi.style.overflow="hidden";
         
       
        toogleNav =false;
   }
    
};
 