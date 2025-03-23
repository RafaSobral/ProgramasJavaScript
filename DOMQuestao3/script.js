// function clicar(){

//   this.style.backgroundColor = 'yellow'

// }

// document.querySelector("#clica").addEventListener('mousedown',clicar)

// function clicar(){

//   this.style.backgroundColor = 'blue'

// }

// document.querySelector("#clica").addEventListener('mouseup',clicar)

// function clicar(){

//   alert("Aviso!!")

// }

// document.querySelector("#clica").addEventListener('click',clicar)

// function clicar(){

//   this.style.backgroundColor = 'yellow'

// }

// document.querySelector("#clica").addEventListener('dblclick',clicar)

// function clicar(){

//   this.style.backgroundColor = 'yellow'

// }

// document.querySelector("#clica").addEventListener('mouseenter',clicar)



// var cx = document.querySelector("#clica")
// var isDragging = false 

// cx.addEventListener('mousedown',function(){

// isDragging = true
  
// })

// document.addEventListener('mousemove',function(e){

// if(isDragging){
//   cx.style.left = `${e.pageX - 50}px`
//   cx.style.top = `${e.pageY - 50}px`
//   }
// })

//   document.addEventListener('mouseup',function(){
//     isDragging = false
//   })

 function clicar(){

   document.querySelector("#clica").innerHTML = `${pageX}`

 }

 document.querySelector("#clica").addEventListener('mousemove',clicar)