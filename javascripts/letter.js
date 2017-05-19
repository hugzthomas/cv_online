

$(document).ready(function (){
  $('#user-input').submit(function(e){
  var company = $('#name').val();
  $('#name').blur();
 $('.company-name').html(company);
 e.preventDefault();
 $('.company-name').addClass('underline').addClass('bold');
});
});

