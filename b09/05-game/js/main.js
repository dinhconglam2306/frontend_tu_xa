let arr=[1,25];
let div=document.getElementById('mainNumbers');
console.log(div)

for(let j =arr[0]; j <= arr[1]; j++){
    let nEl=document.createElement('span');
         nEl.appendChild(document.createTextNode(j));
         div.appendChild(nEl);
}
$('.main-right>span').click(function(){
  let randomNumber = randomInteger(arr[0],arr[1]);
  let spanNumer = parseInt($(this).html())

 if(spanNumer > randomNumber ){
   
 }else {
   
 }
  if($(this).hasClass('clicked')){
    $(this).removeClass('clicked')
  }else{
    if($(this).siblings('.clicked').length < this.parentNode.getAttribute('data-max')){
      $(this).addClass('clicked')
    }
  }
})
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}