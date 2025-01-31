var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;
var im1,im2;
for(var i=1;i<=6;i++){
   if(rand1==i){
    im1=i
   }
   if(rand2==i){
    im2=i
   }
}
if(im1>im2){
    document.querySelector("h1").textContent="Player-1:  WINNER🏆";
}
else if(im1<im2){
    document.querySelector("h1").textContent="Player-2:  WINNER🏆";
}
else{
    document.querySelector("h1").textContent="TIE 😲";

}
document.querySelector(".dice .img1").setAttribute("src","./images/"+"dice"+im1+".png");
document.querySelector(".dice .img2").setAttribute("src","./images/"+"dice"+im2+".png");


