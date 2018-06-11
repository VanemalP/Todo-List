var dataTodo = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
  todo : [],
  completed : []
}

// Remove and complete icons in SVG format
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
var editSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g><path class="fill" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></g></svg>';
var checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><g><path class="fill" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"/></g></svg>'

loadTodoList();
sortTodo();

$('#add').click(addItem);
$('#item').keypress(function(e) {
  if(e.which == 13) {
    addItem();
  }
});

function loadTodoList() {
  if (!dataTodo) {
    return false
  } else {
    for (var i = 0; i < dataTodo.todo.length; i++) {
      var value = dataTodo.todo[i];
      addItemTodo(value);
    }
    for (var j = 0; j < dataTodo.completed.length; j++) {
      var value = dataTodo.completed[j];
      addItemTodo(value, true);
      $('#completed .edit').hide();
    }
  }
};

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(dataTodo));
};

//User clicked on the add button
//If the input is not empty and the activity is not already listed, adds it to the todo list
function addItem() {
  var listItems = $("#todo").find('li');
  var inputValue = $('#item').val().trim();
  if (inputValue.length == 0) {
    $('.popup-text').text('Please enter an activity').fadeIn(500).delay(1000).fadeOut(500);
    return false;
  } else {
    for (var i = 0; i < listItems.length; i++ ) {
      if ($(listItems[i]).text().trim() == inputValue) {
        $('.popup-text').text('This activity is already in the list').fadeIn(500).delay(1000).fadeOut(500);
        return false;
      }
    }
  } 
  addItemTodo(inputValue);
  $('#item').focus().val('');
 
  dataTodo.todo.push(inputValue);
  dataObjectUpdated();
};

//Deletes item from the list
function removeItem(){
  var item = $(this).parent().parent();
  var listID = item.parent().attr('id');
  var value = item.text();

  if (listID == 'todo') {
    dataTodo.todo.splice(dataTodo.todo.indexOf(value), 1);
  } else {
    dataTodo.completed.splice(dataTodo.completed.indexOf(value), 1);
  }
  
  dataObjectUpdated();
  item.remove();
};

function completeItem() {
  var item = $(this).parent().parent();
  var listID = item.parent().attr('id');
  var value = item.text();
  var btnEdit = item.find('.buttons button').closest('.edit');

  //Checks if the item should be added to the completed list or moved to the todo list
  var target;
  if (listID == 'todo') {
    //todo activity to be completed
    target = $('#completed');
   
    btnEdit.hide();

    dataTodo.todo.splice(dataTodo.todo.indexOf(value), 1);
    dataTodo.completed.push(value);
  } else {
    //todo activity to be re-done
    target = $('#todo');

    btnEdit.show();

    dataTodo.completed.splice(dataTodo.completed.indexOf(value), 1);
    dataTodo.todo.push(value);
  }

  dataObjectUpdated();

  target.prepend('<li>' + item.html() + '</li>');
  //Adds click events for editing, removing and completing item
  target.find('button').eq(0).click(editItem);
  target.find('button').eq(1).click(removeItem);
  target.find('button').eq(2).click(completeItem);
  item.remove();
};

// Adds a new item to the todo list
function  addItemTodo(text, completed) {
  var list = (completed) ? $('#completed'):$('#todo');

  var item =  list.prepend('<li></li>').children().eq(0).append('<span>' + text + '</span>');
 
  var buttons = item.append('<div></div>').children().eq(1).addClass('buttons');

  var edit = buttons.append('<button></button>').children().html(editSVG).addClass('edit');
  //Adds click event for editing items
  edit.click(editItem);
  var remove = buttons.append('<button></button>').children().eq(1).html(removeSVG).addClass('remove');
  //Adds click event for removing items
  remove.click(removeItem);
  var complete = buttons.append('<button></button>').children().eq(2).html(completeSVG).addClass('complete');
  //Adds click event for completing items
  complete.click(completeItem);
};

function sortTodo() {
  $('#todo').sortable({
    axis: 'y',
    opacity: 0.6,
    cursor: 'move',
    placeholder: 'placeholder',
    revert: '150',
    update: function(event, ui){
      dataTodo.todo = [];
      var items = $(this).children('li');
      for (var i = items.length - 1; i >= 0; i--) {
        dataTodo.todo.push(items.eq(i).text());
      };
      dataObjectUpdated();
      }
  });
};

function editItem() {
  var item = $(this).parent().parent().find('span');
  var listItems = $("#todo").find('li');
  var btnEdit = $(this).closest('.edit');
  var value = item.text();
  var index = dataTodo.todo.indexOf(value);
  
  item.prop('contenteditable', true).focus();
  $(this).children().html(checkSVG);
  $('#todo').sortable('disable');
  
  $(this).unbind('click').click(function() {
    var newValue = item.text();

    item.prop('contenteditable', false);
    btnEdit.html(editSVG);
    btnEdit.click(editItem);
    dataTodo.todo.splice(index, 1, newValue);
    dataObjectUpdated();
    $('#todo').sortable('enable');
  });
  
  item.keypress(function(e) {
    var newValue = item.text();

    if (e.which == 13) {
      item.prop('contenteditable', false);
      btnEdit.html(editSVG);
      btnEdit.click(editItem);
      dataTodo.todo.splice(index, 1, newValue);
      dataObjectUpdated();
      $('#todo').sortable('enable');
    };
  });
};