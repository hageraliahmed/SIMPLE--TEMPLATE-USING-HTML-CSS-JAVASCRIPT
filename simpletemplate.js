
//product drop down menu
var product=document.getElementById("productdropdownbutton");
var productMenu=document.getElementById("productdropdownmenue");
var menuHideTimeout1 ;


product.addEventListener("mouseenter", function (e) {
    productMenu.style.display = "block";
});


productMenu.addEventListener("mouseenter", function (e) {
    clearTimeout(menuHideTimeout1);
    productMenu.style.display = "block"; 
     
});


product.addEventListener("mouseleave", function (e) {
    
    hideMenuAfterDelay1() ;
    
});


productMenu.addEventListener("mouseleave", function (e) {
    hideMenuAfterDelay1();
});

function hideMenuAfterDelay1() {
      menuHideTimeout1 = setTimeout(function () {
        productMenu.style.display = "none";
    }, 100); 
}







//pages drop down menu
var pages=document.getElementById("pagesdropdownbutton");
var pagesMenu=document.getElementById("pagesdropdownmenue");
var menuHideTimeout2 ;

pages.addEventListener("mouseover",function(e){
    pagesMenu.style.display="block";
    });
    
    pagesMenu.addEventListener("mouseenter", function (e) {
        clearTimeout(menuHideTimeout2);
        pagesMenu.style.display = "block"; 
         
    });
    
    
    pages.addEventListener("mouseleave", function (e) {
        
        hideMenuAfterDelay2() ;
        
    });
    
    
    pagesMenu.addEventListener("mouseleave", function (e) {
        hideMenuAfterDelay2();
    });
    
    function hideMenuAfterDelay2() {
          menuHideTimeout2 = setTimeout(function () {
          pagesMenu.style.display = "none";
        }, 100); 
    }



    //blog drop down menu
var blog=document.getElementById("blogdropdownbutton");
var blogMenu=document.getElementById("blogdropdownmenue");
var menuHideTimeout3 ;

blog.addEventListener("mouseover",function(e){
    blogMenu.style.display="block";
    });
    
    blogMenu.addEventListener("mouseenter", function (e) {
        clearTimeout(menuHideTimeout3);
        blogMenu.style.display = "block"; 
         
    });
    
    
    blog.addEventListener("mouseleave", function (e) {
        
        hideMenuAfterDelay3() ;
        
    });
    
    
    blogMenu.addEventListener("mouseleave", function (e) {
        hideMenuAfterDelay3();
    });
    
    function hideMenuAfterDelay3() {
          menuHideTimeout3 = setTimeout(function () {
          blogMenu.style.display = "none";
        }, 100); 
    }






    //slider
var lineLift1=document.getElementById("lineleft1");
var lineLift2=document.getElementById("lineleft2");
var lineLift3=document.getElementById("lineleft3");

lineLift1.style.display="block";                     //initialization must because without it due to css display style make "" and the if condition doesn't occur
lineLift2.style.display="none";
lineLift3.style.display="none";



    var slider1=setInterval(function(){
        if(lineLift1.style.display==="block"&&lineLift2.style.display==="none"&&lineLift3.style.display==="none"){
            lineLift1.style.display="none";
            lineLift2.style.display="block";
        }
    },2000);


    var slider2=setInterval(function(){
        if(lineLift1.style.display==="none"&&lineLift2.style.display==="block"&&lineLift3.style.display==="none"){
            lineLift2.style.display="none";
            lineLift3.style.display="block";
        }     
       },3000);


       var slider3=setInterval(function(){
        if(lineLift1.style.display==="none"&&lineLift2.style.display==="none"&&lineLift3.style.display==="block"){
            lineLift3.style.display="none";
            lineLift1.style.display="block";
        }    
       },2000);