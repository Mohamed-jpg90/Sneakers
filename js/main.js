// var plus = document.getElementById('plus')
// var minus = document.getElementById('minus')
//     let x=0
//     var numer = document.getElementById('num')
// plus.onclick = (function (){
//     x+=1
//     numer.innerHTML=x
// })()
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var numer = document.getElementById('num');
var Add_to_cart =document.getElementById('Add_to_cart')
let x = 0;
let show = document.getElementById('show2')
let cart =document.getElementById('cart2')
let n=1
let cart3 =document.getElementById('cart3')
var num_of_shows =document.getElementById('num_of_shows')
var total_price=document.getElementById('total_price')
var Delet_the_order=document.getElementById('Delet_the_order')

minus.onclick = function() {
  x += 1;
  numer.innerHTML = x;
};

plus.onclick = function() {
  x -= 1;
  if(x<0){
   x=0
  }
  numer.innerHTML = x;
};
Add_to_cart.onclick=function(){

  if(x===0){
    alert("enter the number of your par of shows")
  }else{
      cart3.style.display="block"
      num_of_shows.innerHTML=x
      total_price.innerHTML = x * 125+".00"
  }
}
Delet_the_order.onclick =function(){
  cart3.style.display="none"

}


///////////////////////////////////
var image1= document.getElementById('image1')
var image2= document.getElementById('image2')
var image3= document.getElementById('image3')
var image4= document.getElementById('image4')
function change(any){
 document.querySelector('.position1').src= any
}
image1.onclick= function(){
  change('images/image-product-1.jpg')
  image1.classList.add('active2')
  image2.classList.remove('active2')
  image3.classList.remove('active2')
  image4.classList.remove('active2')
  // position1.style. transition="0.7s"

} 
image2.onclick= function(){
  change('images/image-product-2.jpg')
  image2.classList.add('active2')
  image1.classList.remove('active2')
  image3.classList.remove('active2')
  image4.classList.remove('active2')
} 
image3.onclick= function(){
  change('images/image-product-3.jpg')
  image3.classList.add('active2')
  image2.classList.remove('active2')
  image1.classList.remove('active2')
  image4.classList.remove('active2')
} 
image4.onclick= function(){
  change('images/image-product-4.jpg')
  image4.classList.add('active2')
  image2.classList.remove('active2')
  image1.classList.remove('active2')
  image3.classList.remove('active2')
} 
////////////////////////////

// cart.style.display="none"
show.onclick=function(){
n++
if(n%2===0){
cart.style.display="block"  
}
else{
cart.style.display="none"  

}
}