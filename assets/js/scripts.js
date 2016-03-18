$(function() {
'use strict'



$.getJSON("./assets/JSON/pokemart.json", function() {
  console.log('hey');
  // data[0].name = "Fluffy Bear"
});

$.post('http://localhost:3000/1', {"name": "hey boi"}).success(function(){
  alert("YO");
})
.error(function(){
  alert("NO");
});

// $.ajax({
//   type: 'POST',
//   url: 'http://localhost:3000/0',
//   data: '{"name":"fluffy"}',
//   success: function(data){alert('data: '+ data); },
//   contentType: 'application/json',
//   dataType: 'json'
// });

//
// $.ajax({
//     type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
//     dataType: 'json', // Set datatype - affects Accept header
//     url: 'assets/JSON/pokemart.json', // A valid URL
//     headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
//     data: '{"name":"fluffy"}', // Some data e.g. Valid JSON as a string
//
// });



});
