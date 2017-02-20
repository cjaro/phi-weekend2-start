var phirephitersArray;
var currentPersonIndex = 0;

$(document).ready(function(){
  // Upon page load, get the data from the server
  // goGetMeSomeData(); //???????
  $('.buttonsNextPrevious').on('click', '.next', goNext);
  $('.buttonsNextPrevious').on('click', '.previous', goPrevious);
}); //closes document.ready

function getSomeData(){
  $.ajax({
    type: 'GET',
    url: '/data',
    success: function(data){
      // console.log('returned data from server: ', data);
      //data is inside this fxn
      phirephitersArray = data.phirephiters; //
      // newPeopleArray(phirephitersArray);
      // console.log("this is not working");
      phiCarusol();
      phiButtons(); //new functions??
      // updateMyCarousel();
    } //closes success function
  }); //ajax
}

function phiCarousel(){
for (var i = 0; i < phirephitersArray.length; i++) {

  // var $element = $('.carousel-container').children().last();

  $('#carousel-container').append('<button class="previous"></button>');
  $element.append('<p>' + 'name: ' + phirephitersArray.name + '</p>');
  $element.append('<p>' + 'git username: ' + phirephitersArray.git_username + '<p>');
  $element.append('<p>' + 'shoutout: ' + phirephitersArray.shoutout + '</p>');
  // console.log(phirephiters);

  // $element.hide();
}
}
$('#buttonsNextPrevious').append('<div class="person"></div>');
$('#buttonsNextPrevious').append('<button class="next"></button>');


function goNext(){
  if(currentPersonIndex < phirephitersArray.length-1){
    currentPersonIndex++;
  } else {
    currentPersonIndex=0;
  }
  // updateMyCarousel();
}
function goPrevious(){
  if(displayDiv > 0){
    displayDiv--;
  } else {
    currentPersonIndex=phirephitersArray.length-1;
  }
  // updateMyCarousel();
}



// want to go one at a time
// var clickNumber = 0;
//empty array to store people, now can write the rest of logic
//last thing is to plug in
//build all fxns, abstract them
// var personArray = [];  //have container to toss shit from fxns
// second workspace makes abstracting more doable

//build function to take in objects from JSON data and push into new empty array
// function newPeopleArray(array){
//   for (var i = 0; i < array.length; i++) {
//     personArray.push(array[i]);
//   }
// }

// console.log(personArray);

// function appendDom(person){
//   $('#main').append('<div class="phirephiters"></div>');
//   var $element = $('.carousel-container');
//   $element.append('<p>' + 'name: ' + person.name + '</p>');
//   $element.append('<p>' + 'git username: ' + person.git_username + '<p>');
//   $element.append('<p>' + 'shoutout: ' + person.shoutout + '</p>');
//   // console.log(phirephiters);
// } //closes appendDom

//fxn to build DOM
// function buildDom(array){
//   console.log('buildDom called');
//   appendDom(array[0]);
// }
