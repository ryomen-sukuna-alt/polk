let a = document.querySelector( 'h1' );

let b = Math.round( Math.random() * -100 );

let c = document.querySelector('div');

a.innerHTML = b;

if (b > -50) {
         c.style.background = 'red';
         c.style.width = '70px' ;
         
         
} else {
         c.style.background = 'blue';
         c.style.width = '70px' ;
}



