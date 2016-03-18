$(function() {
'use strict'



$.getJSON("http://localhost:3000/items", function(data) {
  console.log(data);
  // data[0].name = "Fluffy Bear"
});


// $.ajax({
//   type: 'POST',
//   url: 'http://localhost:3000/items',
//   data: '{"name":"pikachu","description":"thundergod"}',
//   success: function(data){alert('yo')},
//   contentType: 'application/json',
//   dataType: 'json'
// });

$.ajax({

        url: 'http://localhost:3000/items/a27511cc-2d00-4dad-8a0e-c9de336d9144',
        data: { "name": "neel" },
        traditional: true,
        success: function(data){alert('yo')},
        type: 'DELETE'

        });


});
