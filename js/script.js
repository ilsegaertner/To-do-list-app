// JQuery


$('#list')
let list = $('#list');
let li = $('<li></li>');
li.addClass("strike");
list.append(li); //or: list.append("<li>list something</li>");


/* crossing out by clicking on it */
li.on("click", function() {
    li.addClass("strike");
});


$('#input').val;
let inputValue = $('#input').val;

li.append(inputValue);

/* adding class to display:none */
li.addClass("delete");