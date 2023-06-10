/*let li = $('<li></li>');
li.append('<li>some item</li>');
let inputValue = $('input').val;
let text = $('inputValue');

*/
// try again________________

//1

let li = $('<li></li>');
li.append('<li></li>');
let inputValue = $('input').val;
//$('inputValue').append('input').val;
let text = $('<span>').text(inputValue);
li.append(text);

if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('list');
    list.appendChild(li);
  }


//2

li.on ("click", function (){
    li.toggleClass("strike")
});

//3
let crossOutButton = $('crossOutButton');
deleteButton.append(document.createTextNode('X'));


___________________
// JQuery

/*
$('#list')
let list = $('#list');
let li = $('<li></li>');
li.addClass("strike");
list.append(li); //or: list.append("<li>list something</li>");


crossing out by clicking on it 
li.on("click", function() {
    li.addClass("strike");
});


$('#input').val;
let inputValue = $('#input').val;

li.append(inputValue);

adding class to display:none 
li.addClass("delete");
*/