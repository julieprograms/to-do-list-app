function newItem(){


//adding a new item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
//skipped let text
li.append(inputValue);

if(inputValue === ''){
  alert("You must write something!");
} else {
  $('#list').append(li);
  $('#input').val('')
}


//crossing out items from list of items:
function crossOut() {
  li.toggleClass('strike');
}

li.on('dblclick', crossOut);



// adding a delete button 'x'
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('x'));
li.append(crossOutButton);


//adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem(){
     li.addClass('delete');
   }
crossOutButton.on('click', deleteListItem);

//reordering the items
$('#list').sortable();
}
