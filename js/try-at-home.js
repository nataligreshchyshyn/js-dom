// var btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random()*(number+1));
// }

// btn.onmouseout = function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }
//var btn = document.querySelector('button');

// function bgChange() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }   

// btn.addEventListener('click', bgChange);

// btn.addEventListener('click', function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// });

// btn.removeEventListener('click', bgChange);

// function bgChange(e) {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   e.target.style.backgroundColor = rndCol;
//   console.log(e);
// }  

// btn.addEventListener('click', bgChange);

for(var i = 1; i <= 16; i++) {
        var myDiv = document.createElement('div');
        document.body.appendChild(myDiv);
}

function random(number) {
        return Math.floor(Math.random()*number);
      }
      function bgChange() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        return rndCol;
      }
      
var divs = document.querySelectorAll('div');

for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}