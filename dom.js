// // getElementsByTagName

// var corpo = document.body 
// corpo.style.background='rgb(68,125,160)'

// var a = document.getElementsByTagName('p')[1]
// a.style.color ='white'
// a.style.fontSize ='16pt'
// a.style.background ='yellow'

// document.write('Mudando o texto ' + a.innerHTML)

// var b = document.getElementById('minhadiv')
// b.textContent = 'NovoValor'
// //innerText

// var c = document.getElementById('a')
// c.style.color = 'aquamarine'
// c.style.fontSize = '16pt'
// c.style.background = 'blue'
// c.innerHTML = 'DOM'

// var d = document.getElementsByName('c')[0]
// d.style.color = 'aquamarine'
// d.style.fontSize = '16pt'
// d.style.background = 'blue'
// d.innerHTML = 'DOM'

// var e = document.getElementsByClassName('b')[0]
// e.style.color = 'aquamarine'
// e.style.fontSize = '16pt'
// e.style.background = 'blue'
// e.innerHTML = 'DOM'

// var h = document.querySelector('p')
// h.style.color = 'aquamarine'
// h.style.fontSize = '16pt'
// h.style.background = 'blue'
// h.innerHTML = 'DOM'

// var imagem = document.getElementById('minhaimagem')
// imagem.setAttribute('src','photo-1589829545856-d10d557cf95f.jfif')

// var i = document.querySelector('#d')

// function clicar(){
//   i.innerHTML = 'clicou'
//   i.style.color = 'yellow'
//   i.style.background = 'blue'
// }
//i.addEventListener('click',clicar)

// function entrar(){
//   i.innerHTML = 'entrou'
//   i.style.color = 'red'
//   i.style.background = 'blue'
// }
//i.addEventListener('mouseenter',entrar)

// function sair(){
//   i.innerHTML = 'saiu'
//   i.style.color = 'black'
//   i.style.background = 'green'
//}
//i.addEventListener('mouseout',sair)

// var j = document.querySelector('#logo1')

// function acende(){
//   j.src ='imagem2.jpg'
// }
// j.addEventListener('mouseenter',acende)

// function apagada(){
//   j.src ='imagem1.jpg'
// }
// j.addEventListener('mouseout',apagada)

// var botao = document.getElementById('btn')
// var n = document.getElementById('nome')

// function boasVindas(){

//   saida.innerText =`Seja bem vindo ${n.value}!`
  
// }
// botao.addEventListener('click',boasVindas)

var soma = document.querySelector('#btn')

function somar(){

  a = Number(document.querySelector('#n1').value)
  b = Number(document.querySelector('#n2').value)
  resp.innerText = `A soma dos valores = ${a + b}`

}
soma.addEventListener('click',somar)
