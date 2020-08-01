/* $(document).ready(function() {
    console.log("funcionando")
})

$('h1').html('Etiqueta h1')
$('.display-4').html('Seleccionar desde una Clase'); 
$('#0h1').html('Selecionar desde el  id')

document.querySelector('h1').innerHTML="Etiqueta H1 Seleccionada con Javascript"; 
document.querySelector(".display-4").innerHTML=" Clase h1 con Javascript " */

//$('.container h1'). html('Cambiar todos de Texto h1'); 
//$('.container h1:first'). html('Cambiar todos de Texto h1');
//$('.container h1:last').html('ultimo cambio')


/* //agregar clases y remover clases 
$('#0h1').addClass('text-danger');
//$('#id0h1').removeClass('display-4');

$('#contenido').append('<h1> Este es un elemento al final</h1>');
$('#contenido').prepend('<h1> Este es un elemento al Principio</h1>');
$('#color-azul').css({color: 'blue', background:"salmon", padding:'20px'}); 
//$('#color-azul').remove(); 
$('#color-azul').hide();
$('img').attr('src', 'https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg');
$('img').attr('src', 'https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg');
$('img').attr('src', 'https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg');
$('img:last').attr('width','50'); 
 
///eventos con Jquery
let parrafo=$('#resultado  p'); 
console.log(parrafo); 
$(' .btn-primary').click(function() {
    parrafo.addClass('display-4');    
})


$('.btn-danger').click(function () {
    parrafo.removeClass('display-4'); 
    
})


$('.btn-warning').click(function() {
    parrafo.toggleClass('display-4');
    
})*/
//manipular enventos
/* $('#formulario').submit(function (evento) { 
evento.preventDefault(); 
//console.log('click'); 
let nombre= $('#nombre').val(); 
 console.log(nombre); 
    
}); */


//qqq

let resultado=$('#resultado'); 
/* 
$(' .btn-primary').click(function() {
   resultado.hide(1000);     
})


$('.btn-danger').click(function () {
    resultado.show(1000); 
    
})


$('.btn-warning').click(function() {
   resultado.toggle(1000); 
    
}); 
 */

//
/* $(' .btn-primary').click(function() {
    resultado.fadeOut(3000);;  
 })
 
 
 $('.btn-danger').click(function () {
     resultado.fadeIn(3000); 
     
 })

 
 $('.btn-warning').click(function() {
    resultado.toggle(1000); 
     
 }); 
 */

 $(' .btn-primary').click(function() {
    resultado.animate({
        left:'250px',
        opacity: '0.5',
        height:'+=150px',
        width:'+=150px'
},3000, function() {
    resultado.animate({
        left:'-250px',
        opacity:'1',
        height:'-=150px',
        width:'-=150px'
         
    },1000)
}); 
 })




