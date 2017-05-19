$(document).ready(function(){
  $('.skill').removeClass('underline');
  skill1();
  skill2();
  skill3();
  skill4();

    function skill1(){

      setTimeout(function(){
      $('#1').addClass('underline');
      }, 1000);
      setTimeout(function(){
      $('#1').removeClass('underline');
      }, 2000);
    }

    function skill2(){
      setTimeout(function(){
      $('#2').addClass('underline');
      }, 3000);
      setTimeout(function(){
      $('#2').removeClass('underline');
      }, 4000);
    }
    function skill3(){
      setTimeout(function(){
      $('#3').addClass('underline');
      }, 5000);
      setTimeout(function(){
      $('#3').removeClass('underline');
      }, 6000);
    }
    function skill4(){
      setTimeout(function(){
      $('#4').addClass('underline');
      }, 7000);
      setTimeout(function(){
      $('#4').removeClass('underline');
      }, 8000);
    }





});


