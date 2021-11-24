function newItem(){


//adding a new item to the list:
let li = $('<li></li>');
let inputValue = $('#input').val();
//skipped let text
li.append(inputValue);

if(inputValue === ''){
  alert("You must write something!");
} else {
$('#list').append(li);
}


//crossing out items from list of items
function crossOut() {
  li.toggleClass("strike");
}
//double function makes code longer here?can I drop first one??
li.on('dblclick', function crossOut() {
  li.toggleClass("strike");
});


// adding a delete button 'x'
let crossOutButton = $('<crossOutButton></crossOutButton>')
   .append(document.createTextNode('x'));
li.append(crossOutButton);


//adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem(){
     li.addClass("delete");
   }


//reordering the items
$('#list').sortable();
}
