$(function() {
'use strict'

var test = $('.json-test');

var stuffPlz = $.getJSON("assets/JSON/pokemart.json", function(data) {
  console.log(data);
  // data[0].name = "Fluffy Bear"
});

$.post('http://localhost:8000/assets/JSON/pokemart.json', {"name": "fluffy"}).success(function(){
  alert("YO");
})
.error(function(){
  alert("NO");
});

// $.ajax({
//   type: 'POST',
//   url: 'assets/JSON/pokemart.json',
//   data: '{"name":"fluffy"}',
//   success: function(data){alert('data: '+ data); },
//   contentType: 'application/json',
//   dataType: 'json'
// });


});
