var box = document.querySelector("div#box");
box.insertAdjacentHTML("afterbegin", `<p class='car'> Welcome yoos! Start now!</p>`);

//=========================================================================================


var inputBox = document.querySelector('input');
var button = document.querySelector('button')

button.addEventListener('click', function() {
  box.insertAdjacentHTML("beforeend" ,"<p>" + inputBox.value +"<p>" );
  mascotFeedback();
}  )

//=========================================================================================

function mascotFeedback() {
    setTimeout(function (){
         box.insertAdjacentHTML('beforeend', '<p>im slik the fox</p>');
    },1500)
}








